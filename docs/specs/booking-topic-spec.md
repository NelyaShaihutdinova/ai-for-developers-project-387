# Spec: Тема разговора (Booking Topic)

> Part of #1

## Problem Statement

Владелец календаря не может подготовиться к встрече, не зная её тему. Сейчас в списке предстоящих встреч отображаются только время, тип встречи и имя гостя, но отсутствует произвольная тема/повестка, которую гость мог бы указать при записи (например, «Обсудить миграцию на Hono»).

## Solution

Гость получает опциональное поле «Тема разговора» в форме бронирования. Введённая тема сохраняется в записи и отображается в таблице предстоящих встреч на дашборде владельца. Тема не участвует в правилах занятости слотов — это исключительно информационное поле.

## User Stories

1. As a guest, I want to optionally specify a conversation topic when booking a slot, so that the calendar owner knows what the meeting will be about.
2. As a calendar owner, I want to see the conversation topic next to each booking in my upcoming meetings list, so that I can prepare for each meeting.
3. As a guest, I want to book a slot without specifying a topic, so that the existing booking flow still works (backward compatibility).
4. As a system, I want to reject a booking with a topic when the slot is already taken, returning 409, so that the topic is never saved for a conflicting booking.

## Implementation Decisions

### API Contract (TypeSpec → OpenAPI → SDK)

The full contract chain must be preserved. Changes are made to TypeSpec, then `mise run generate:api` regenerates OpenAPI and the frontend SDK.

**BookingCreate model** — add optional field:
- `topic?: string` — max length 200 characters. Optional (nullable or omitted). Not used in conflict detection or any business rules.

**Booking model** (response) — add optional field:
- `topic?: string | null` — mirrors the input; present in GET /api/bookings responses.

**BookingWithTypeName model** — add optional field:
- `topic?: string | null` — included in the owner's dashboard list response.

No changes to ConflictError, ErrorResponse, or any other models. The 409 response remains identical.

### Database Schema

Add column to the `bookings` table (Drizzle schema):
- `topic` — `text`, nullable, no default. Migrated via `drizzle-kit generate`.

### Backend Validation

- Zod schema for `BookingCreate`: add `.optional()` string field with `.max(200)` constraint.
- Validation failure on topic > 200 chars returns 400 `VALIDATION_ERROR` (same pattern as existing email/guestName validation).
- Topic is passed through to the INSERT statement as-is (or NULL if omitted/empty).
- Topic does NOT affect conflict detection, slot availability, or any scheduling logic.

### Frontend — Guest Form (MeetingsPage)

- Add optional text input (textarea or TextInput) labeled «Тема разговора» below the existing guest name/email fields.
- Character counter showing `0/200`.
- Field is not required; form submits successfully when empty.
- On submit, include `topic` in the `bookingsCreate` body when non-empty.

### Frontend — Owner Dashboard (DashboardPage)

- Add a new column «Тема» to the bookings table, between existing columns (suggested position: after «Тип», before «Имя гостя»).
- Display the topic text if present; show a placeholder (e.g., «—») if null/empty.
- Column should truncate or wrap gracefully for long topics.

### Backward Compatibility

- Existing bookings (created before this change) will have `topic = null` — handled by UI as empty/placeholder.
- Booking without topic: request body omits `topic` field entirely; server stores NULL; behavior is identical to current flow.
- No breaking changes to any existing API responses — `topic` is an additional optional field.

## Testing Decisions

### Backend Integration Tests (bookings.test.ts)

- **Happy path**: Create booking with `topic` field → 201, response contains `topic` with same value.
- **Conflict with topic**: Attempt to book an already-taken slot WITH a topic → 409, topic is NOT saved to DB (verify via subsequent GET).
- **Backward compatibility**: Create booking WITHOUT `topic` field → 201, response has `topic = null` (or absent).
- **Topic max length**: Create booking with topic > 200 chars → 400 `VALIDATION_ERROR`.
- **Empty topic**: Create booking with `topic: ""` → 201, stored as null or empty string.
- **GET /api/bookings**: Verify that `topic` field is present in `BookingWithTypeName` responses.

### Frontend Tests

- DashboardPage renders the «Тема» column and displays topic text / placeholder correctly.
- MeetingsPage form accepts optional topic input, shows character counter, submits with/without topic.

### E2E Test (booking-flow.spec.ts)

- Extend the existing E2E flow: fill in topic field → submit → verify topic appears in dashboard table.

## Out of Scope

- Editing or deleting the topic after booking is created.
- Mandatory topic (it remains optional).
- Topic affecting slot availability, conflict detection, or scheduling rules.
- Topic search or filtering on the dashboard.
- Topic validation beyond max length (no profanity filter, no required patterns).

## Further Notes

- The topic field is purely informational — it does not participate in any business rules. This simplifies the implementation: only schema, validation, storage, and display need changes.
- The 14-day window, weekday-only, working hours, and 15-minute granularity rules remain unchanged.
- The contract chain (TypeSpec → OpenAPI → SDK) ensures type safety across backend and frontend without manual type synchronization.
