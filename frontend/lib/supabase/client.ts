class MockQuery {
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
      const baseUrl = typeof window !== 'undefined'
        ? ''
        : getServerBaseUrl()

      const response = await fetch(`${baseUrl}/api/db`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store',
        body: JSON.stringify({
          table: this.table,
          action: this.action,
          data: this.data,
          id: this._eq ? this._eq.val : null,
          col: this._eq ? this._eq.col : null,
          isCol: this._is ? this._is.col : null,
          isVal: this._is ? this._is.val : null
        })
      })

      const result = await response.json()
      
      if (this.action === 'select') {
        let res = result.data || []
        
        if (this._eq) {
          res = res.filter((r: any) => String(r[this._eq!.col]) === String(this._eq!.val))
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
        const items = result.data
        if (this._single && Array.isArray(items)) {
          return { data: items[0], error: null }
        } else if (this._single) {
          return { data: items, error: null }
        }
        return { data: items, error: null }
      }

      return { data: result.data || null, error: null }
    } catch (e: any) {
      console.error('Mock DB error:', e)
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

function getServerBaseUrl() {
  const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')
  if (publicSiteUrl) {
    return publicSiteUrl
  }

  const port = process.env.PORT || '3000'
  return `http://127.0.0.1:${port}`
}

export function createClient() {
  return {
    from: (table: string) => new MockQuery(table),
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
