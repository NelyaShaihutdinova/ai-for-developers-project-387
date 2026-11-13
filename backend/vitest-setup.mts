import { mkdirSync, existsSync, rmSync } from 'fs'
import { execSync } from 'child_process'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataDir = join(__dirname, 'data')
const dbPath = join(dataDir, 'calendar.db')

// Create data directory if it doesn't exist (e.g. in CI)
mkdirSync(dataDir, { recursive: true })

// Delete and recreate database for each test file to ensure isolation
if (existsSync(dbPath)) {
  rmSync(dbPath)
}

// Run migrations to create fresh tables
execSync('npx drizzle-kit migrate', {
  cwd: __dirname,
  stdio: 'inherit',
})
