'use client'

import { useState, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Upload, X, ImageIcon } from 'lucide-react'
import Image from 'next/image'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

interface ImageUploadProps {
  bucket: string
  folder: string
  value?: string | null
  onChange: (url: string | null) => void
  className?: string
}

export function ImageUpload({ bucket, folder, value, onChange, className }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [dragActive, setDragActive] = useState(false)

  const uploadImage = useCallback(async (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast.error('이미지 파일만 업로드할 수 있습니다')
      return
    }

    const maxSize = 10 * 1024 * 1024 // 10MB
    if (file.size > maxSize) {
      toast.error('파일 크기는 10MB 이하여야 합니다')
      return
    }

    setUploading(true)

    try {
      const formData = new FormData()
      formData.append('file', file)
      if (folder) {
        formData.append('folder', folder)
      }

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Upload failed')
      }

      const data = await response.json()

      if (!data.url) throw new Error('No URL returned')

      onChange(data.url)
      toast.success('이미지가 업로드되었습니다')
    } catch (error: any) {
      console.error('Upload error:', error)
      toast.error(`업로드 실패: ${error.message}`)
    } finally {
      setUploading(false)
    }
  }, [bucket, folder, onChange])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      uploadImage(file)
    }
  }, [uploadImage])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setDragActive(false)
    
    const file = e.dataTransfer.files?.[0]
    if (file) {
      uploadImage(file)
    }
  }, [uploadImage])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setDragActive(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setDragActive(false)
  }, [])

  const removeImage = useCallback(() => {
    onChange(null)
  }, [onChange])

  return (
    <div className={cn('relative', className)}>
      {value ? (
        <div className="relative aspect-video rounded-lg overflow-hidden border bg-muted">
          <Image
            src={value}
            alt="Uploaded image"
            fill
            className="object-cover"
            sizes="400px"
          />
          <button
            type="button"
            onClick={removeImage}
            className="absolute top-2 right-2 p-1.5 rounded-full bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <label
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={cn(
            'flex flex-col items-center justify-center gap-3 p-6 rounded-lg border-2 border-dashed cursor-pointer transition-colors',
            dragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/25 hover:border-primary/50',
            uploading && 'pointer-events-none opacity-50'
          )}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
            disabled={uploading}
          />
          
          {uploading ? (
            <>
              <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              <p className="text-sm text-muted-foreground">업로드 중...</p>
            </>
          ) : (
            <>
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                <ImageIcon className="w-6 h-6 text-muted-foreground" />
              </div>
              <div className="text-center">
                <p className="text-sm font-medium">이미지를 드래그하거나 클릭하세요</p>
                <p className="text-xs text-muted-foreground mt-1">PNG, JPG, WEBP (최대 10MB)</p>
              </div>
            </>
          )}
        </label>
      )}
    </div>
  )
}

interface MultiImageUploadProps {
  bucket: string
  folder: string
  values?: string[]
  urls?: string[]
  onChange: (urls: string[]) => void
  className?: string
}

export function MultiImageUpload({ bucket, folder, values: propValues, urls: propUrls, onChange, className }: MultiImageUploadProps) {
  const values = propValues || propUrls || []
  const [uploading, setUploading] = useState(false)

  const uploadImages = useCallback(async (files: FileList) => {
    const imageFiles = Array.from(files).filter(f => f.type.startsWith('image/'))
    if (imageFiles.length === 0) {
      toast.error('이미지 파일만 업로드할 수 있습니다')
      return
    }

    setUploading(true)
    const newUrls: string[] = []

    try {
      for (const file of imageFiles) {
        const formData = new FormData()
        formData.append('file', file)
        if (folder) {
          formData.append('folder', folder)
        }

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        })

        if (!response.ok) {
          console.error('Upload Error:', await response.text())
          continue
        }

        const data = await response.json()
        if (data.url) {
          newUrls.push(data.url)
        }
      }

      if (newUrls.length > 0) {
        onChange([...(values || []), ...newUrls])
        toast.success(`${newUrls.length}개의 이미지가 업로드되었습니다`)
      } else {
        toast.error('이미지 업로드에 실패했습니다 (서버 응답 오류)')
      }
    } catch (error: any) {
      console.error('Upload error:', error)
      toast.error(`업로드 실패: ${error.message}`)
    } finally {
      setUploading(false)
    }
  }, [folder, values, onChange])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      uploadImages(e.target.files)
    }
  }, [uploadImages])

  const removeImage = useCallback((index: number) => {
    onChange((values || []).filter((_, i) => i !== index))
  }, [values, onChange])

  return (
    <div className={cn('space-y-4', className)}>
      {/* Image Grid */}
      {(values || []).length > 0 && (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
          {(values || []).map((url, index) => (
            <div key={url} className="relative aspect-square rounded-lg overflow-hidden border bg-muted group">
              <Image
                src={url}
                alt={`Image ${index + 1}`}
                fill
                className="object-cover"
                sizes="150px"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 p-1 rounded-full bg-destructive text-destructive-foreground opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-3 h-3" />
              </button>
              <span className="absolute bottom-1 left-1 px-1.5 py-0.5 bg-black/50 text-white text-xs rounded">
                {index + 1}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Upload Button */}
      <label className={cn(
        'flex items-center justify-center gap-2 p-4 rounded-lg border-2 border-dashed cursor-pointer transition-colors',
        'border-muted-foreground/25 hover:border-primary/50',
        uploading && 'pointer-events-none opacity-50'
      )}>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileSelect}
          className="hidden"
          disabled={uploading}
        />
        
        {uploading ? (
          <>
            <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            <span className="text-sm">업로드 중...</span>
          </>
        ) : (
          <>
            <Upload className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm">이미지 추가</span>
          </>
        )}
      </label>
    </div>
  )
}
