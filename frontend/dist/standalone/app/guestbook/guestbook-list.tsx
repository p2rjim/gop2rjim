'use client'

import type { Comment } from '@/lib/types'
import { formatDistanceToNow } from 'date-fns'
import { ko } from 'date-fns/locale'
import { User } from 'lucide-react'

interface GuestbookListProps {
  comments: Comment[]
}

export function GuestbookList({ comments }: GuestbookListProps) {
  if (comments.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <p>아직 등록된 메시지가 없습니다.</p>
        <p className="text-sm mt-1">첫 번째 메시지를 남겨주세요!</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-display flex items-center gap-2">
        <span>메시지</span>
        <span className="text-sm font-normal text-muted-foreground">({comments.length})</span>
      </h2>
      
      {comments.map((comment) => (
        <article
          key={comment.id}
          className="p-5 rounded-xl bg-card border hover:border-primary/30 transition-colors"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <User className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium">{comment.author_name}</span>
                <span className="text-xs text-muted-foreground">
                  {formatDistanceToNow(new Date(comment.created_at), {
                    addSuffix: true,
                    locale: ko,
                  })}
                </span>
              </div>
              <p className="text-foreground whitespace-pre-wrap">{comment.content}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
