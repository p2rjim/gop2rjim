'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Check, X, Trash2 } from 'lucide-react'
import { toast } from 'sonner'
import { formatDistanceToNow } from 'date-fns'
import { ko } from 'date-fns/locale'
import type { Comment } from '@/lib/types'

export function CommentsManager() {
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(true)

  const fetchComments = async () => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (!error && data) {
      setComments(data)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchComments()
  }, [])

  const handleApprove = async (id: string, approve: boolean) => {
    const supabase = createClient()
    const { error } = await supabase
      .from('comments')
      .update({ is_approved: approve })
      .eq('id', id)
    
    if (error) {
      toast.error('처리에 실패했습니다')
    } else {
      toast.success(approve ? '승인되었습니다' : '승인이 취소되었습니다')
      fetchComments()
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('정말 삭제하시겠습니까?')) return

    const supabase = createClient()
    const { error } = await supabase.from('comments').delete().eq('id', id)
    
    if (error) {
      toast.error('삭제에 실패했습니다')
    } else {
      toast.success('삭제되었습니다')
      fetchComments()
    }
  }

  const pendingComments = comments.filter(c => !c.is_approved)
  const approvedComments = comments.filter(c => c.is_approved)

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-display mb-4">방명록 관리</h2>
        <p className="text-sm text-muted-foreground mb-6">
          방명록 메시지를 승인하거나 삭제할 수 있습니다. 승인된 메시지만 방문자에게 표시됩니다.
        </p>
      </div>

      {loading ? (
        <div className="text-center py-8 text-muted-foreground">로딩 중...</div>
      ) : comments.length === 0 ? null : (
        <div className="space-y-8">
          {/* Pending Comments */}
          {pendingComments.length > 0 && (
            <div>
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                승인 대기 ({pendingComments.length})
              </h3>
              <div className="space-y-3">
                {pendingComments.map((comment) => (
                  <CommentCard
                    key={comment.id}
                    comment={comment}
                    onApprove={() => handleApprove(comment.id, true)}
                    onReject={() => handleApprove(comment.id, false)}
                    onDelete={() => handleDelete(comment.id)}
                    showApproveButton
                  />
                ))}
              </div>
            </div>
          )}

          {/* Approved Comments */}
          {approvedComments.length > 0 && (
            <div>
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                승인됨 ({approvedComments.length})
              </h3>
              <div className="space-y-3">
                {approvedComments.map((comment) => (
                  <CommentCard
                    key={comment.id}
                    comment={comment}
                    onApprove={() => handleApprove(comment.id, true)}
                    onReject={() => handleApprove(comment.id, false)}
                    onDelete={() => handleDelete(comment.id)}
                    showRejectButton
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

interface CommentCardProps {
  comment: Comment
  onApprove: () => void
  onReject: () => void
  onDelete: () => void
  showApproveButton?: boolean
  showRejectButton?: boolean
}

function CommentCard({ comment, onApprove, onReject, onDelete, showApproveButton, showRejectButton }: CommentCardProps) {
  return (
    <div className="p-4 rounded-lg border bg-card">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-medium">{comment.author_name}</span>
            {comment.author_email && (
              <span className="text-sm text-muted-foreground">({comment.author_email})</span>
            )}
            <span className="text-xs text-muted-foreground">
              {formatDistanceToNow(new Date(comment.created_at), {
                addSuffix: true,
                locale: ko,
              })}
            </span>
          </div>
          <p className="text-foreground whitespace-pre-wrap">{comment.content}</p>
        </div>
        
        <div className="flex items-center gap-1 flex-shrink-0">
          {showApproveButton && (
            <Button variant="outline" size="icon" onClick={onApprove} title="승인">
              <Check className="w-4 h-4 text-green-600" />
            </Button>
          )}
          {showRejectButton && (
            <Button variant="outline" size="icon" onClick={onReject} title="승인 취소">
              <X className="w-4 h-4 text-yellow-600" />
            </Button>
          )}
          <Button variant="outline" size="icon" onClick={onDelete} title="삭제">
            <Trash2 className="w-4 h-4 text-destructive" />
          </Button>
        </div>
      </div>
    </div>
  )
}
