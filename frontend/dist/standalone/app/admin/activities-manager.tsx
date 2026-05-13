'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { ImageUpload } from '@/components/image-upload'
import { Plus, Pencil, Trash2 } from 'lucide-react'
import { toast } from 'sonner'
import Image from 'next/image'
import type { Activity } from '@/lib/types'

const activityTypes = [
  { value: 'exhibition', label: '전시' },
  { value: 'workshop', label: '워크샵' },
  { value: 'event', label: '이벤트' },
  { value: 'press', label: '언론' },
  { value: 'other', label: '기타' },
]

export function ActivitiesManager() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [loading, setLoading] = useState(true)
  const [editingActivity, setEditingActivity] = useState<Activity | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const fetchActivities = async () => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('activities')
      .select('*')
      .order('date', { ascending: false })
    
    if (!error && data) {
      setActivities(data)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchActivities()
  }, [])

  const handleDelete = async (id: string) => {
    if (!confirm('정말 삭제하시겠습니까?')) return

    const supabase = createClient()
    const { error } = await supabase.from('activities').delete().eq('id', id)
    
    if (error) {
      toast.error('삭제에 실패했습니다')
    } else {
      toast.success('삭제되었습니다')
      fetchActivities()
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-display">활동 관리</h2>
        <Button onClick={() => { setEditingActivity(null); setIsDialogOpen(true) }}>
          <Plus className="w-4 h-4 mr-2" />
          새 활동 추가
        </Button>
      </div>

      {loading ? (
        <div className="text-center py-8 text-muted-foreground">로딩 중...</div>
      ) : activities.length === 0 ? null : (
        <div className="grid gap-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:border-primary/50 transition-colors"
            >
              {activity.image_url ? (
                <div className="relative w-24 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                  <Image
                    src={activity.image_url}
                    alt={activity.title}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
              ) : (
                <div className="w-24 h-16 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-muted-foreground">이미지 없음</span>
                </div>
              )}
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                    {activityTypes.find(t => t.value === activity.activity_type)?.label || activity.activity_type}
                  </span>
                  {activity.date && <span className="text-xs text-muted-foreground">{activity.date}</span>}
                </div>
                <h3 className="font-medium truncate">{activity.title}</h3>
                {activity.location && (
                  <span className="text-sm text-muted-foreground">{activity.location}</span>
                )}
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={() => { setEditingActivity(activity); setIsDialogOpen(true) }}>
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => handleDelete(activity.id)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      <ActivityFormDialog
        activity={editingActivity}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onSuccess={fetchActivities}
      />
    </div>
  )
}

interface ActivityFormDialogProps {
  activity: Activity | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onSuccess: () => void
}

function ActivityFormDialog({ activity, open, onOpenChange, onSuccess }: ActivityFormDialogProps) {
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [activityType, setActivityType] = useState('exhibition')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('')
  const [linkUrl, setLinkUrl] = useState('')
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  useEffect(() => {
    if (activity) {
      setTitle(activity.title)
      setDescription(activity.description || '')
      setActivityType(activity.activity_type)
      setDate(activity.date || '')
      setLocation(activity.location || '')
      setLinkUrl(activity.link_url || '')
      setImageUrl(activity.image_url)
    } else {
      resetForm()
    }
  }, [activity])

  const resetForm = () => {
    setTitle('')
    setDescription('')
    setActivityType('exhibition')
    setDate('')
    setLocation('')
    setLinkUrl('')
    setImageUrl(null)
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
      const activityData = {
        title: title.trim(),
        description: description.trim() || null,
        activity_type: activityType as Activity['activity_type'],
        date: date || null,
        location: location.trim() || null,
        link_url: linkUrl.trim() || null,
        image_url: imageUrl,
      }

      if (activity) {
        const { error } = await supabase
          .from('activities')
          .update(activityData)
          .eq('id', activity.id)
        
        if (error) throw error
        toast.success('활동이 수정되었습니다')
      } else {
        const { error } = await supabase
          .from('activities')
          .insert(activityData)
        
        if (error) throw error
        toast.success('새 활동이 추가되었습니다')
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
          <DialogTitle>{activity ? '활동 수정' : '새 활동 추가'}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">이미지</label>
            <ImageUpload
              bucket="portfolio"
              folder="activities"
              value={imageUrl}
              onChange={setImageUrl}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">제목 *</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="활동 제목"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">유형</label>
              <Select value={activityType} onValueChange={setActivityType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {activityTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">날짜</label>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">장소</label>
            <Input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="예: 서울시립미술관"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">관련 링크</label>
            <Input
              type="url"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              placeholder="https://..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">설명</label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="활동에 대한 설명"
              rows={4}
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
