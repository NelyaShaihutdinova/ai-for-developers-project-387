import { render, screen, fireEvent, waitFor, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import { vi } from 'vitest'

const mocks = vi.hoisted(() => ({
  meetingTypesList: vi.fn(() => Promise.resolve({ data: [] })),
  slotsList: vi.fn(() => Promise.resolve({ data: [] })),
  bookingsCreate: vi.fn(),
}))

vi.mock('../api', async () => {
  const actual = await vi.importActual<typeof import('../api')>('../api')
  return {
    ...actual,
    meetingTypesList: mocks.meetingTypesList,
    slotsList: mocks.slotsList,
    bookingsCreate: mocks.bookingsCreate,
    apiClient: {},
  }
})

afterEach(() => {
  vi.clearAllMocks()
})

async function navigateToBookingForm() {
  const { default: MeetingsPage } = await import('../pages/MeetingsPage')

  mocks.meetingTypesList.mockResolvedValue({
    data: [{ id: 1, name: 'Тест', description: '', durationMinutes: 30, isActive: true, createdAt: 'now' }],
  })
  mocks.slotsList.mockResolvedValue({
    data: [
      { startAt: '2026-12-01T06:00:00Z', endAt: '2026-12-01T06:30:00Z' },
      { startAt: '2026-12-01T06:30:00Z', endAt: '2026-12-01T07:00:00Z' },
    ],
  })

  render(
    <MemoryRouter initialEntries={['/meetings']}>
      <MantineProvider>
        <MeetingsPage />
      </MantineProvider>
    </MemoryRouter>,
  )

  // Select meeting type
  await waitFor(() => {
    expect(screen.getByText('Тест')).toBeInTheDocument()
  })
  fireEvent.click(screen.getByText('Тест'))

  // Select first date
  await waitFor(() => {
    expect(screen.getByText(/Выберите дату/i)).toBeInTheDocument()
  })
  const dateButton = screen.getAllByRole('button').find(btn =>
    btn.textContent?.match(/пн|вт|ср|чт|пт/)
  )
  if (dateButton) fireEvent.click(dateButton)

  // Select first time slot
  await waitFor(() => {
    const slotButton = screen.getAllByRole('button').find(btn =>
      btn.textContent?.includes('09:00')
    )
    expect(slotButton).toBeInTheDocument()
  })
  const slotButton = screen.getAllByRole('button').find(btn =>
    btn.textContent?.includes('09:00')
  )
  if (slotButton) fireEvent.click(slotButton)

  // Wait for form to appear
  await waitFor(() => {
    expect(screen.getByRole('textbox', { name: /имя/i })).toBeInTheDocument()
  })
}

test('topic TextInput renders in the booking form', async () => {
  await navigateToBookingForm()

  expect(screen.getByRole('textbox', { name: /тема/i })).toBeInTheDocument()
})

test('form submission includes topic value when provided', async () => {
  await navigateToBookingForm()

  mocks.bookingsCreate.mockResolvedValue({
    response: { ok: true, status: 201 },
    data: {
      id: 1,
      meetingTypeId: 1,
      startAt: '2026-12-01T06:00:00Z',
      endAt: '2026-12-01T06:30:00Z',
      guestName: 'Иван',
      guestEmail: 'ivan@example.com',
      topic: 'Важный вопрос',
      createdAt: 'now',
    },
  })

  fireEvent.change(screen.getByRole('textbox', { name: /имя/i }), { target: { value: 'Иван' } })
  fireEvent.change(screen.getByRole('textbox', { name: /email/i }), { target: { value: 'ivan@example.com' } })
  fireEvent.change(screen.getByRole('textbox', { name: /тема/i }), { target: { value: 'Важный вопрос' } })

  fireEvent.click(screen.getByRole('button', { name: /записаться/i }))

  await waitFor(() => {
    expect(mocks.bookingsCreate).toHaveBeenCalledTimes(1)
    const { body } = mocks.bookingsCreate.mock.calls[0][0]
    expect(body.topic).toBe('Важный вопрос')
  })
})
