import { mkdirSync, existsSync, readFileSync, readdirSync, rmSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import Database from 'better-sqlite3'
import { beforeEach } from 'vitest'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataDir = join(__dirname, 'data')
const dbPath = join(dataDir, 'calendar.db')

export async function setup() {
  mkdirSync(dataDir, { recursive: true })

  if (existsSync(dbPath)) {
    rmSync(dbPath)
  }

  const sqlite = new Database(dbPath)
  const migrationsDir = join(__dirname, 'migrations')
  const files = readdirSync(migrationsDir).filter((f) => f.endsWith('.sql')).sort()
  for (const file of files) {
    const sql = readFileSync(join(migrationsDir, file), 'utf-8')
    sqlite.exec(sql)
  }
  sqlite.close()
}

export async function teardown() {}

// Clear bookings before every individual test to prevent cross-test pollution
// (meeting types are preserved since they are often created in beforeAll)
beforeEach(() => {
  const sqlite = new Database(dbPath)
  sqlite.exec('DELETE FROM bookings')
  sqlite.close()
})
