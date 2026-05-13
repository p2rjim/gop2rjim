'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Home, Image, Palette, Calendar, MessageCircle, Settings } from 'lucide-react'
import { useAdmin } from '@/lib/admin-context'
import { AdminLoginDialog } from './admin-login-dialog'

const navItems = [
  { href: '/', label: '홈', icon: Home, color: 'purple' },
  { href: '/works', label: '웹툰', icon: Palette, color: 'green' },
  { href: '/illustrations', label: '일러스트', icon: Image, color: 'yellow' },
  { href: '/activities', label: '활동', icon: Calendar, color: 'red' },
  { href: '/guestbook', label: '방명록', icon: MessageCircle, color: 'cyan' },
]

const colorStyles: Record<string, { base: string, active: string, inactive: string }> = {
  purple: {
    base: 'bg-[#9845ff] text-white border-2',
    active: 'border-white scale-110 shadow-[0_0_20px_rgba(152,69,255,0.8)] z-10',
    inactive: 'border-transparent hover:border-white/50 hover:scale-105 hover:-translate-y-1 hover:brightness-110'
  },
  green: {
    base: 'bg-[#00c853] text-white border-2',
    active: 'border-white scale-110 shadow-[0_0_20px_rgba(0,200,83,0.8)] z-10',
    inactive: 'border-transparent hover:border-white/50 hover:scale-105 hover:-translate-y-1 hover:brightness-110'
  },
  yellow: {
    base: 'bg-[#ffd600] text-black border-2',
    active: 'border-black scale-110 shadow-[0_0_20px_rgba(255,214,0,0.8)] z-10',
    inactive: 'border-transparent hover:border-black/50 hover:scale-105 hover:-translate-y-1 hover:brightness-110'
  },
  red: {
    base: 'bg-[#ff3d00] text-white border-2',
    active: 'border-white scale-110 shadow-[0_0_20px_rgba(255,61,0,0.8)] z-10',
    inactive: 'border-transparent hover:border-white/50 hover:scale-105 hover:-translate-y-1 hover:brightness-110'
  },
  cyan: {
    base: 'bg-[#00b0ff] text-white border-2',
    active: 'border-white scale-110 shadow-[0_0_20px_rgba(0,176,255,0.8)] z-10',
    inactive: 'border-transparent hover:border-white/50 hover:scale-105 hover:-translate-y-1 hover:brightness-110'
  }
}

export function Sidebar() {
  const pathname = usePathname()
  const { isAdmin, logout } = useAdmin()

  return (
    <>
      {/* 5개의 네모 칸 메뉴 (화면 맨 밑 중앙) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-4 w-full px-4 pointer-events-none">
        <nav className="flex justify-center gap-2 md:gap-4 w-full max-w-4xl pointer-events-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== '/' && pathname.startsWith(item.href))
            const Icon = item.icon
            const styles = colorStyles[item.color]
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex flex-col items-center justify-center w-16 h-16 md:w-28 md:h-24 transition-all duration-300 shadow-xl rounded-xl',
                  styles.base,
                  isActive ? styles.active : styles.inactive
                )}
              >
                <Icon className="w-5 h-5 md:w-7 md:h-7 mb-1 md:mb-2" />
                <span className="text-[10px] md:text-xs font-bold tracking-wider">{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Admin Section (Floating Top-Right) */}
      <div className="fixed top-6 right-6 z-40">
        {isAdmin ? (
          <div className="flex items-center gap-2 bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 p-1.5 rounded-full shadow-lg">
            <Link
              href="/admin"
              className={cn(
                'flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-200 text-sm',
                'hover:bg-zinc-800 text-zinc-300 hover:text-white',
                pathname.startsWith('/admin') && 'bg-cyan-500/20 text-cyan-400'
              )}
            >
              <Settings className="w-4 h-4" />
              <span className="font-semibold hidden md:inline">관리자</span>
            </Link>
            <button
              onClick={logout}
              className="px-3 py-1.5 text-xs font-bold text-red-400 hover:text-red-300 hover:bg-red-400/20 rounded-full transition-colors"
            >
              로그아웃
            </button>
          </div>
        ) : (
          <div className="bg-zinc-900/50 hover:bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 rounded-full shadow-lg transition-all">
            <AdminLoginDialog />
          </div>
        )}
      </div>
    </>
  )
}
