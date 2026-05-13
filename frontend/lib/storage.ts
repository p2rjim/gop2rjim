import { promises as fs } from 'fs'
import path from 'path'

export type DatabaseSchema = {
  profiles: any[]
  works: any[]
  work_images: any[]
  illustrations: any[]
  illustration_images: any[]
  activities: any[]
  comments: any[]
  [key: string]: any[]
}

export function createInitialDatabase(): DatabaseSchema {
  return {
    profiles: [{ id: 'default', artist_name: '레쓰고 퍼짐', bio: '안녕하세요, 레쓰고 퍼짐입니다.' }],
    works: [],
    work_images: [],
    illustrations: [],
    illustration_images: [],
    activities: [],
    comments: [],
  }
}

export function getStorageRoot() {
  return process.env.APP_DATA_DIR || path.join(process.cwd(), 'data')
}

export function getDatabasePath() {
  return path.join(getStorageRoot(), 'db.json')
}

export function getUploadsDirectory() {
  return path.join(getStorageRoot(), 'uploads')
}

export async function readDatabase() {
  const dbPath = getDatabasePath()

  try {
    const data = await fs.readFile(dbPath, 'utf8')
    return JSON.parse(data) as DatabaseSchema
  } catch {
    const initialDatabase = createInitialDatabase()
    await fs.mkdir(path.dirname(dbPath), { recursive: true })
    await fs.writeFile(dbPath, JSON.stringify(initialDatabase, null, 2))
    return initialDatabase
  }
}

export async function writeDatabase(database: DatabaseSchema) {
  const dbPath = getDatabasePath()
  await fs.mkdir(path.dirname(dbPath), { recursive: true })
  await fs.writeFile(dbPath, JSON.stringify(database, null, 2))
}