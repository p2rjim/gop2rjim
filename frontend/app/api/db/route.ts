import { NextRequest, NextResponse } from 'next/server'
import { readDatabase, writeDatabase } from '@/lib/storage'

export const runtime = 'nodejs'

function generateId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 9)}`
}

async function getDb() {
  return await readDatabase()
}

async function saveDb(db: any) {
  await writeDatabase(db)
}

export async function POST(request: NextRequest) {
  try {
    const { action, table, data, id, col, isCol, isVal } = await request.json()
    const db = await getDb()

    if (!db[table]) db[table] = []

    if (action === 'select') {
      let res = db[table]
      if (col && id) {
        res = res.filter((i: any) => String(i[col]) === String(id))
      }
      if (isCol) {
        res = res.filter((i: any) => i[isCol] === isVal)
      }
      return NextResponse.json({ data: res })
    }

    if (action === 'insert') {
      let items
      if (Array.isArray(data)) {
        items = data.map((d: any) => ({ id: generateId(), created_at: new Date().toISOString(), ...d }))
        db[table].push(...items)
      } else {
        items = { id: generateId(), created_at: new Date().toISOString(), ...data }
        db[table].push(items)
      }
      await saveDb(db)
      return NextResponse.json({ data: items })
    }

    if (action === 'update' && col && id) {
      const idx = db[table].findIndex((i: any) => String(i[col]) === String(id))
      if (idx !== -1) {
        db[table][idx] = { ...db[table][idx], ...data }
        await saveDb(db)
        return NextResponse.json({ data: db[table][idx] })
      }
      return NextResponse.json({ data: null })
    }

    if (action === 'delete' && col && id) {
      db[table] = db[table].filter((i: any) => String(i[col]) !== String(id))
      await saveDb(db)
      return NextResponse.json({ data: null })
    }

    return NextResponse.json({ data: null })
  } catch (error: any) {
    console.error("DB error:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}