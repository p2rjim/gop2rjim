'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { ImageUpload, MultiImageUpload } from '@/components/image-upload'
import { Plus, Pencil, Trash2, GripVertical } from 'lucide-react'
import { toast } from 'sonner'
import Image from 'next/image'
import type { Illustration } from '@/lib/types'

export function IllustrationsManager() {
  const [illustrations, setIllustrations] = useState<Illustration[]>([])
  const [loading, setLoading] = useState(true)
  const [editingIllust, setEditingIllust] = useState<Illustration | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const fetchIllustrations = async () => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('illustrations')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (!error && data) {
      setIllustrations(data)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchIllustrations()
  }, [])

  const handleDelete = async (id: string) => {
    if (!confirm('정말 삭제하시겠습니까?')) return

    const supabase = createClient()
    const { error } = await supabase.from('illustrations').delete().eq('id', id)
    
    if (error) {
      toast.error('삭제에 실패했습니다')
    } else {
      toast.success('삭제되었습니다')
      fetchIllustrations()
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-display">일러스트 관리</h2>
        <Button onClick={() => { setEditingIllust(null); setIsDialogOpen(true) }}>
          <Plus className="w-4 h-4 mr-2" />
          새 일러스트 추가
        </Button>
      </div>

      {loading ? (
        <div className="text-center py-8 text-muted-foreground">로딩 중...</div>
      ) : illustrations.length === 0 ? null : (
        <div className="grid gap-4">
          {illustrations.map((illust) => (
            <div
              key={illust.id}
              className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:border-primary/50 transition-colors"
            >
              <GripVertical className="w-5 h-5 text-muted-foreground cursor-grab" />
              
              {illust.thumbnail_url ? (
                <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                  <Image
                    src={illust.thumbnail_url}
                    alt={illust.title}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
              ) : (
                <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-display text-muted-foreground">{illust.title[0]}</span>
                </div>
              )}
              
              <div className="flex-1 min-w-0">
                <h3 className="font-medium truncate">{illust.title}</h3>
                {illust.category && (
                  <span className="text-sm text-muted-foreground">{illust.category}</span>
                )}
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={() => { setEditingIllust(illust); setIsDialogOpen(true) }}>
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => handleDelete(illust.id)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      <IllustrationFormDialog
        illustration={editingIllust}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onSuccess={fetchIllustrations}
      />
    </div>
  )
}

interface IllustrationFormDialogProps {
  illustration: Illustration | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onSuccess: () => void
}

function IllustrationFormDialog({ illustration, open, onOpenChange, onSuccess }: IllustrationFormDialogProps) {
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null)
  const [imageUrls, setImageUrls] = useState<string[]>([])

  useEffect(() => {
    if (illustration) {
      setTitle(illustration.title)
      setDescription(illustration.description || '')
      setCategory(illustration.category || '')
      setThumbnailUrl(illustration.thumbnail_url)
      fetchImages(illustration.id)
    } else {
      resetForm()
    }
  }, [illustration])

  const fetchImages = async (illustrationId: string) => {
    const supabase = createClient()
    const { data } = await supabase
      .from('illustration_images')
      .select('image_url')
      .eq('illustration_id', illustrationId)
      .order('order_index')
    
    if (data) {
      setImageUrls(data.map((d: any) => d.image_url))
    }
  }

  const resetForm = () => {
    setTitle('')
    setDescription('')
    setCategory('')
    setThumbnailUrl(null)
    setImageUrls([])
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) {
      toast.error('제목을 입력해주세요')
      return
    }

    setLoading(true)
    const supabase = createClient()

    try {
      const illustData = {
        title: title.trim(),
        description: description.trim() || null,
        category: category.trim() === 'creative' || category.trim() === 'croquis' ? category.trim() : 'creative',
        thumbnail_url: thumbnailUrl,
      }

      if (illustration) {
        const { error } = await supabase
          .from('illustrations')
          .update(illustData)
          .eq('id', illustration.id)
          .select()
        
        if (error) throw error

        await supabase.from('illustration_images').delete().eq('illustration_id', illustration.id)
        
        if (imageUrls.length > 0) {
          const imageData = imageUrls.map((url, index) => ({
            illustration_id: illustration.id,
            image_url: url,
            order_index: index,
          }))
          const { error: insertErr } = await supabase.from('illustration_images').insert(imageData)
          if (insertErr) throw insertErr
        }

        toast.success('일러스트가 수정되었습니다')
      } else {
        const { data: newIllust, error } = await supabase
          .from('illustrations')
          .insert(illustData)
          .select()
          .single()
        
        if (error) throw error

        if (imageUrls.length > 0 && newIllust) {
          const imageData = imageUrls.map((url, index) => ({
            illustration_id: newIllust.id,
            image_url: url,
            order_index: index,
          }))
          const { error: insertErr } = await supabase.from('illustration_images').insert(imageData)
          if (insertErr) throw insertErr
        }

        toast.success('새 일러스트가 추가되었습니다')
      }

      onOpenChange(false)
      resetForm()
      onSuccess()
    } catch (error: any) {
      console.error('Save error:', error)
      toast.error('저장에 실패했습니다: ' + (error?.message || error?.details || '알 수 없는 오류'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{illustration ? '일러스트 수정' : '새 일러스트 추가'}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">썸네일</label>
            <ImageUpload
              bucket="portfolio"
              folder="illustrations/thumbnails"
              value={thumbnailUrl}
              onChange={setThumbnailUrl}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">제목 *</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="일러스트 제목"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">카테고리</label>
            <Input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="예: 캐릭터, 풍경"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">설명</label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="일러스트에 대한 설명"
              rows={4}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">상세 이미지</label>
            <MultiImageUpload
              bucket="portfolio"
              folder="illustrations/images"
              values={imageUrls}
              onChange={setImageUrls}
            />
          </div>

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              취소
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? '저장 중...' : '저장'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
