'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ImageUpload } from '@/components/image-upload'
import { toast } from 'sonner'
import type { Profile } from '@/lib/types'

export function ProfileManager() {
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [artistName, setArtistName] = useState('')
  const [bio, setBio] = useState('')
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const supabase = createClient()
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .single()
      
      if (!error && data) {
        setProfile(data)
        setArtistName(data.artist_name || '')
        setBio(data.bio || '')
        setAvatarUrl(data.avatar_url)
      }
      setLoading(false)
    }

    fetchProfile()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!artistName.trim()) {
      toast.error('작가명을 입력해주세요')
      return
    }

    setSaving(true)
    const supabase = createClient()

    try {
      const profileData = {
        artist_name: artistName.trim(),
        bio: bio.trim() || null,
        avatar_url: avatarUrl,
        updated_at: new Date().toISOString(),
      }

      if (profile) {
        const { error } = await supabase
          .from('profiles')
          .update(profileData)
          .eq('id', profile.id)
        
        if (error) throw error
      } else {
        const { error } = await supabase
          .from('profiles')
          .insert(profileData)
        
        if (error) throw error
      }

      toast.success('프로필이 저장되었습니다')
    } catch (error) {
      console.error('Save error:', error)
      toast.error('저장에 실패했습니다')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return <div className="text-center py-8 text-muted-foreground">로딩 중...</div>
  }

  return (
    <div className="max-w-2xl">
      <h2 className="text-xl font-display mb-6">프로필 관리</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">프로필 이미지</label>
          <div className="max-w-xs">
            <ImageUpload
              bucket="portfolio"
              folder="profile"
              value={avatarUrl}
              onChange={setAvatarUrl}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">작가명 *</label>
          <Input
            value={artistName}
            onChange={(e) => setArtistName(e.target.value)}
            placeholder="레쓰고 퍼짐"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">소개</label>
          <Textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="작가 소개를 입력하세요"
            rows={6}
          />
          <p className="text-xs text-muted-foreground mt-1">
            메인 페이지 히어로 섹션과 방명록에 표시됩니다.
          </p>
        </div>

        <Button type="submit" disabled={saving}>
          {saving ? '저장 중...' : '저장'}
        </Button>
      </form>
    </div>
  )
}
