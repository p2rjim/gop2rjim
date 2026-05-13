'use client'

import { Sidebar } from './sidebar'
import { AdminProvider } from '@/lib/admin-context'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'

const PaintEffectsCanvas = dynamic(() => import('./paint-effects').then(mod => mod.PaintEffectsCanvas), { ssr: false })

interface MainLayoutProps {
  children: React.ReactNode
  showPaintEffects?: boolean
}

export function MainLayout({ children, showPaintEffects = true }: MainLayoutProps) {
  const pathname = usePathname()

  const getBgClass = () => {
    if (!pathname) return 'bg-background'
    if (pathname.startsWith('/works') || pathname.startsWith('/admin/works')) return 'bg-[#00c853]/40'
    if (pathname.startsWith('/illustrations') || pathname.startsWith('/admin/illustrations')) return 'bg-[#ffd600]/40'
    if (pathname.startsWith('/activities') || pathname.startsWith('/admin/activities')) return 'bg-[#ff3d00]/40'
    if (pathname.startsWith('/guestbook') || pathname.startsWith('/admin/comments')) return 'bg-[#00b0ff]/40'
    if (pathname === '/') return 'bg-[#9845ff]/40'
    return 'bg-background'
  }

  return (
    <AdminProvider>
      <div className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${getBgClass()}`}>
        <Sidebar />
        <main className="min-h-[100dvh]">
          {children}
        </main>
        {showPaintEffects && pathname === '/' && <PaintEffectsCanvas />}
      </div>
    </AdminProvider>
  )
}
