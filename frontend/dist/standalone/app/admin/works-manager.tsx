'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ImageUpload, MultiImageUpload } from '@/components/image-upload'
import { Plus, Pencil, Trash2, GripVertical } from 'lucide-react'
import { toast } from 'sonner'
import Image from 'next/image'
import type { Work } from '@/lib/types'

export function WorksManager() {
  const [works, setWorks] = useState<Work[]>([])
  const [loading, setLoading] = useState(true)
  const [editingWork, setEditingWork] = useState<Work | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const fetchWorks = async () => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('works')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (!error && data) {
      setWorks(data)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchWorks()
  }, [])

  const handleDelete = async (id: string) => {
    if (!confirm('정말 삭제하시겠습니까?')) return

    const supabase = createClient()
    const { error } = await supabase.from('works').delete().eq('id', id)
    
    if (error) {
      toast.error('삭제에 실패했습니다')
    } else {
      toast.success('삭제되었습니다')
      fetchWorks()
    }
  }

  const openNewDialog = () => {
    setEditingWork(null)
    setIsDialogOpen(true)
  }

  const openEditDialog = (work: Work) => {
    setEditingWork(work)
    setIsDialogOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-display text-green-500">웹툰 관리</h2>
        <Button onClick={openNewDialog} className="bg-green-500 hover:bg-green-600">
          <Plus className="w-4 h-4 mr-2" />
          새 웹툰 추가
        </Button>
      </div>

      {loading ? (
        <div className="text-center py-8 text-muted-foreground">로딩 중...</div>
      ) : works.length === 0 ? null : (
        <div className="grid gap-4">
          {works.map((work) => (
            <div
              key={work.id}
              className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:border-primary/50 transition-colors"
            >
              <GripVertical className="w-5 h-5 text-muted-foreground cursor-grab" />
              
              {work.thumbnail_url ? (
                <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                  <Image
                    src={work.thumbnail_url}
                    alt={work.title}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
              ) : (
                <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-display text-muted-foreground">{work.title[0]}</span>
                </div>
              )}
              
              <div className="flex-1 min-w-0">
                <h3 className="font-medium truncate">{work.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  {work.year && <span>({work.year})</span>}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={() => openEditDialog(work)}>
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => handleDelete(work.id)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      <WorkFormDialog
        work={editingWork}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onSuccess={fetchWorks}
      />
    </div>
  )
}

interface WorkFormDialogProps {
  work: Work | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onSuccess: () => void
}

function WorkFormDialog({ work, open, onOpenChange, onSuccess }: WorkFormDialogProps) {
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [year, setYear] = useState('')
  const [category, setCategory] = useState('')
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null)
  const [imageUrls, setImageUrls] = useState<string[]>([])

  useEffect(() => {
    if (work) {
      setTitle(work.title)
      setDescription(work.description || '')
      setYear(work.year?.toString() || '')
      setCategory(work.category || '')
      setThumbnailUrl(work.thumbnail_url)
      // Fetch images for this work
      fetchWorkImages(work.id)
    } else {
      resetForm()
    }
  }, [work])

  const fetchWorkImages = async (workId: string) => {
    const supabase = createClient()
    const { data } = await supabase
      .from('work_images')
      .select('image_url')
      .eq('work_id', workId)
      .order('order_index')
    
    if (data) {
      setImageUrls(data.map((d: any) => d.image_url))
    }
  }

  const resetForm = () => {
    setTitle('')
    setDescription('')
    setYear('')
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
      const workData = {
        title: title.trim(),
        description: description.trim() || null,
        year: year ? parseInt(year) : null,
        thumbnail_url: thumbnailUrl,
      }

      if (work) {
        // Update existing work
        const { error } = await supabase
          .from('works')
          .update(workData)
          .eq('id', work.id)
          .select()
        
        if (error) throw error

        // Update images
        await supabase.from('work_images').delete().eq('work_id', work.id)
        
        if (imageUrls.length > 0) {
          const imageData = imageUrls.map((url, index) => ({
            work_id: work.id,
            image_url: url,
            order_index: index,
          }))
          const { error: insertErr } = await supabase.from('work_images').insert(imageData)
          if (insertErr) throw insertErr
        }

        toast.success('작업이 수정되었습니다')
      } else {
        // Create new work
        const { data: newWork, error } = await supabase
          .from('works')
          .insert(workData)
          .select()
          .single()
        
        if (error) throw error

        // Add images
        if (imageUrls.length > 0 && newWork) {
          const imageData = imageUrls.map((url, index) => ({
            work_id: newWork.id,
            image_url: url,
            order_index: index,
          }))
          const { error: insertErr } = await supabase.from('work_images').insert(imageData)
          if(insertErr) throw insertErr
        }

        toast.success('새 작업이 추가되었습니다')
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
          <DialogTitle>{work ? '작업 수정' : '새 작업 추가'}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">썸네일</label>
            <ImageUpload
              bucket="portfolio"
              folder="works/thumbnails"
              value={thumbnailUrl}
              onChange={setThumbnailUrl}
            />
            <p className="text-xs text-muted-foreground mt-1">웹툰 목록 페이지에 표시될 대표 이미지를 업로드하세요.</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">제목 *</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="작업 제목"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">웹툰 이미지들 *</label>
            <MultiImageUpload
              bucket="portfolio"
              folder="works"
              values={imageUrls}
              onChange={setImageUrls}
            />
            <p className="text-xs text-muted-foreground mt-1">드래그하여 이미지 순서를 변경할 수 있습니다.</p>
          </div>

          <div className="flex justify-end gap-2 pt-4">
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
