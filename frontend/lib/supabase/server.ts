import { readDatabase, writeDatabase } from '@/lib/storage'

function generateId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 9)}`
}

class ServerMockQuery {
  table: string
  action: 'select' | 'insert' | 'update' | 'delete' = 'select'
  data: any = null
  _order: { col: string; opts?: any } | null = null
  _limit: number | null = null
  _eq: { col: string; val: any } | null = null
  _is: { col: string; val: any } | null = null
  _single: boolean = false

  constructor(table: string) {
    this.table = table
  }

  select(cols?: string) {
    if (!this.action || this.action === 'select') {
      this.action = 'select'
    }
    return this
  }

  insert(data: any) {
    this.action = 'insert'
    this.data = data
    return this
  }

  update(data: any) {
    this.action = 'update'
    this.data = data
    return this
  }

  delete() {
    this.action = 'delete'
    return this
  }

  order(col: string, opts?: any) {
    this._order = { col, opts }
    return this
  }

  limit(lim: number) {
    this._limit = lim
    return this
  }

  eq(col: string, val: any) {
    this._eq = { col, val }
    return this
  }

  is(col: string, val: any) {
    this._is = { col, val }
    return this
  }

  single() {
    this._single = true
    return this
  }

  async execute() {
    try {
      const db = await readDatabase()
      let res = db[this.table] || []

      if (this.action === 'select') {
        if (this._eq) {
          res = res.filter((r: any) => String(r[this._eq!.col]) === String(this._eq!.val))
        }
        if (this._is) {
          res = res.filter((r: any) => r[this._is!.col] === this._is!.val)
        }
        if (this._order) {
          const { col, opts } = this._order
          res.sort((a: any, b: any) => {
            const valA = a[col] ?? 0
            const valB = b[col] ?? 0
            if (opts?.ascending === false) return valA < valB ? 1 : -1
            return valA > valB ? 1 : -1
          })
        }
        
        if (this._limit) {
          res = res.slice(0, this._limit)
        }
        
        if (this._single) {
          return { data: res[0] || null, error: null }
        }
        return { data: res, error: null }
      }

      if (this.action === 'insert') {
        if (!db[this.table]) db[this.table] = []
        let items
        if (Array.isArray(this.data)) {
          items = this.data.map(d => ({ id: generateId(), created_at: new Date().toISOString(), ...d }))
          db[this.table].push(...items)
        } else {
          items = { id: generateId(), created_at: new Date().toISOString(), ...this.data }
          db[this.table].push(items)
        }
        await writeDatabase(db)
        
        if (this._single && Array.isArray(items)) {
          return { data: items[0], error: null }
        } else if (this._single) {
          return { data: items, error: null }
        }
        return { data: items, error: null }
      }

      if (this.action === 'update' && this._eq) {
        const idx = db[this.table].findIndex((i: any) => String(i[this._eq!.col]) === String(this._eq!.val))
        if (idx !== -1) {
          db[this.table][idx] = { ...db[this.table][idx], ...this.data }
          await writeDatabase(db)
          return { data: db[this.table][idx], error: null }
        }
        return { data: null, error: null }
      }

      if (this.action === 'delete' && this._eq) {
        db[this.table] = db[this.table].filter((i: any) => String(i[this._eq!.col]) !== String(this._eq!.val))
        await writeDatabase(db)
        return { data: null, error: null }
      }

      return { data: null, error: null }
    } catch (e: any) {
      console.error('Server Mock DB error:', e)
      return { data: null, error: e }
    }
  }

  then<TResult1 = any, TResult2 = never>(
    onfulfilled?: ((value: any) => TResult1 | PromiseLike<TResult1>) | undefined | null,
    onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
  ): Promise<TResult1 | TResult2> {
    return this.execute().then(onfulfilled, onrejected)
  }
}

export async function createClient() {
  return {
    from: (table: string) => new ServerMockQuery(table),
    auth: {
      getUser: async () => ({ data: { user: { id: 'admin' } }, error: null }),
    },
    storage: {
      from: () => ({
        upload: async () => ({ error: 'Use standard file upload API instead' }),
        getPublicUrl: () => ({ data: { publicUrl: '' } }),
      }),
    }
  }
}
