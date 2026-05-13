'use server'

import { readDatabase, writeDatabase } from '@/lib/storage'

async function getDb() {
  return await readDatabase()
}

async function saveDb(db: any) {
  await writeDatabase(db)
}

function generateId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 9)}`
}

export async function mockSelect(table: string) {
  const db = await getDb()
  return db[table] || []
}

export async function mockInsert(table: string, data: any) {
  const db = await getDb()
  if (!db[table]) db[table] = []
  
  if (Array.isArray(data)) {
    const items = data.map(d => ({ id: generateId(), created_at: new Date().toISOString(), ...d }))
    db[table].push(...items)
    await saveDb(db)
    return items
  } else {
    const item = { id: generateId(), created_at: new Date().toISOString(), ...data }
    db[table].push(item)
    await saveDb(db)
    return item
  }
}

export async function mockUpdate(table: string, id: string, data: any) {
  const db = await getDb()
  if (!db[table]) return null
  
  const idx = db[table].findIndex((i: any) => i.id === id)
  if (idx !== -1) {
    db[table][idx] = { ...db[table][idx], ...data }
    await saveDb(db)
    return db[table][idx]
  }
  return null
}

export async function mockDelete(table: string, id: string) {
  const db = await getDb()
  if (!db[table]) return
  
  db[table] = db[table].filter((i: any) => i.id !== id)
  await saveDb(db)
}
