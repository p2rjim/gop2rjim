'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Lock } from 'lucide-react'
import { useAdmin } from '@/lib/admin-context'
import { toast } from 'sonner'

export function AdminLoginDialog() {
  const [open, setOpen] = useState(false)
  const [password, setPassword] = useState('')
  const { login } = useAdmin()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (login(password)) {
      toast.success('관리자 모드로 전환되었습니다')
      setOpen(false)
      setPassword('')
    } else {
      toast.error('비밀번호가 일치하지 않습니다')
      setPassword('')
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="flex items-center gap-2 px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-full">
          <Lock className="w-4 h-4" />
          <span className="hidden md:inline">관리자 로그인</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Lock className="w-5 h-5" />
            관리자 로그인
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              취소
            </Button>
            <Button type="submit">
              로그인
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
