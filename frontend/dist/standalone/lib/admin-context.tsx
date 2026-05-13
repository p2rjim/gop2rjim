'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

interface AdminContextType {
  isAdmin: boolean
  isInitializing: boolean
  login: (password: string) => boolean
  logout: () => void
}

const AdminContext = createContext<AdminContextType | undefined>(undefined)

const ADMIN_PASSWORD = '5590'
const ADMIN_KEY = 'letsgo_admin'

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isInitializing, setIsInitializing] = useState(true)

  useEffect(() => {
    const stored = sessionStorage.getItem(ADMIN_KEY)
    if (stored === 'true') {
      setIsAdmin(true)
    }
    setIsInitializing(false)
  }, [])

  const login = (password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      setIsAdmin(true)
      sessionStorage.setItem(ADMIN_KEY, 'true')
      return true
    }
    return false
  }

  const logout = () => {
    setIsAdmin(false)
    sessionStorage.removeItem(ADMIN_KEY)
  }

  return (
    <AdminContext.Provider value={{ isAdmin, isInitializing, login, logout }}>
      {children}
    </AdminContext.Provider>
  )
}

export function useAdmin() {
  const context = useContext(AdminContext)
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider')
  }
  return context
}
