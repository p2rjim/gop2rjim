'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export function GuestbookForm() {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name.trim() || !content.trim()) {
      toast.error('이름과 메시지를 입력해주세요')
      return
    }

    setLoading(true)

    try {
      const supabase = createClient()
      
      const { error } = await supabase.from('comments').insert({
        author_name: name.trim(),
        author_email: email.trim() || null,
        content: content.trim(),
        is_approved: false, // Requires admin approval
      })

      if (error) throw error

      toast.success('메시지가 등록되었습니다. 관리자 승인 후 표시됩니다.')
      setName('')
      setEmail('')
      setContent('')
      router.refresh()
    } catch {
      toast.error('메시지 등록에 실패했습니다. 다시 시도해주세요.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded-2xl bg-card border">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            이름 <span className="text-destructive">*</span>
          </label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력하세요"
            required
            disabled={loading}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            이메일 (선택)
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일 주소"
            disabled={loading}
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="content" className="block text-sm font-medium mb-1">
          메시지 <span className="text-destructive">*</span>
        </label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="자유롭게 메시지를 남겨주세요"
          rows={4}
          required
          disabled={loading}
        />
      </div>
      
      <Button type="submit" disabled={loading} className="w-full sm:w-auto">
        {loading ? '등록 중...' : '메시지 남기기'}
      </Button>
      
      <p className="text-xs text-muted-foreground">
        * 메시지는 관리자 승인 후 게시됩니다.
      </p>
    </form>
  )
}
