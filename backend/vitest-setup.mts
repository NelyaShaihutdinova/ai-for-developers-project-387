import { mkdirSync, existsSync, readFileSync, readdirSync, rmSync } from 'fs'
import { join } from 'path'
import Database from 'better-sqlite3'

const dataDir = join(process.cwd(), 'data')
const dbPath = join(dataDir, 'calendar.db')

export async function setup() {
  mkdirSync(dataDir, { recursive: true })

  if (existsSync(dbPath)) {
    rmSync(dbPath)
  }

  const sqlite = new Database(dbPath)
  const migrationsDir = join(process.cwd(), 'migrations')
  const files = readdirSync(migrationsDir).filter((f) => f.endsWith('.sql')).sort()
  for (const file of files) {
    const sql = readFileSync(join(migrationsDir, file), 'utf-8')
    sqlite.exec(sql)
  }
  sqlite.close()
}

export async function teardown() {}
