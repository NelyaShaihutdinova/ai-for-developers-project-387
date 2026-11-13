import { mkdirSync, existsSync, readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import Database from 'better-sqlite3'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataDir = join(__dirname, 'data')
const dbPath = join(dataDir, 'calendar.db')

export async function setup() {
  mkdirSync(dataDir, { recursive: true })

  // If DB exists, delete it for a fresh start
  if (existsSync(dbPath)) {
    const { rmSync } = await import('fs')
    rmSync(dbPath)
  }

  const sqlite = new Database(dbPath)

  // Read and apply migration SQL files in order
  const migrationsDir = join(__dirname, 'migrations')
  const { readdirSync } = await import('fs')
  const files = readdirSync(migrationsDir)
    .filter((f) => f.endsWith('.sql'))
    .sort()

  for (const file of files) {
    const sql = readFileSync(join(migrationsDir, file), 'utf-8')
    sqlite.exec(sql)
  }

  sqlite.close()
}

export async function teardown() {}
