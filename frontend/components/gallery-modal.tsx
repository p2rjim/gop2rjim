'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Work, Illustration, WorkImage, IllustrationImage } from '@/lib/types'
import { createClient } from '@/lib/supabase/client'

interface GalleryModalProps {
  item: Work | Illustration | null
  type: 'works' | 'illustrations'
  onClose: () => void
}

type GalleryImage = WorkImage | IllustrationImage

export function GalleryModal({ item, type, onClose }: GalleryModalProps) {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!item) {
      setImages([])
      setCurrentIndex(0)
      return
    }

    const fetchImages = async () => {
      setLoading(true)
      const supabase = createClient()
      const tableName = type === 'works' ? 'work_images' : 'illustration_images'
      const foreignKey = type === 'works' ? 'work_id' : 'illustration_id'

      const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .eq(foreignKey, item.id)
        .order('order_index', { ascending: true })

      if (!error && data) {
        // If no images in the images table, use thumbnail as fallback
        if (data.length === 0 && item.thumbnail_url) {
          setImages([{
            id: 'thumbnail',
            [foreignKey]: item.id,
            image_url: item.thumbnail_url,
            caption: null,
            order_index: 0,
            created_at: new Date().toISOString(),
          } as unknown as GalleryImage])
        } else {
          setImages(data)
        }
      }
      setLoading(false)
    }

    fetchImages()
  }, [item, type])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }, [images.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }, [images.length])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [item, goToPrevious, goToNext, onClose])

  if (!item) return null

  const currentImage = images[currentIndex]
  const isWork = 'year' in item

  return (
    <Dialog open={!!item} onOpenChange={() => onClose()}>
      <DialogContent 
        showCloseButton={false}
        className={cn(
          "p-0 border-none shadow-none flex flex-col overflow-hidden max-w-none m-0",
          type === 'works' ? "w-[100vw] h-[100vh] sm:w-[95vw] sm:h-[95vh] bg-black sm:rounded-lg max-w-3xl" : "w-[100vw] h-[100vh] bg-transparent backdrop-blur-md"
        )}
      >
        <DialogTitle className="sr-only">{item.title}</DialogTitle>
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'works' ? (
          // 웹툰 뷰어 모드: 여러 이미지를 세로로 간격 없이 스크롤
          <div className="flex-1 w-full h-full overflow-y-auto bg-black">
            {loading ? (
              <div className="flex items-center justify-center min-h-[50vh]">
                <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <div className="flex flex-col w-full max-w-3xl mx-auto">
                <div className="w-full py-8 px-4 text-center">
                  <h2 className="text-3xl font-display text-white mb-2">{item.title}</h2>
                </div>
                {images.map((img) => (
                  <div key={img.id} className="relative w-full aspect-auto leading-none align-bottom">
                    <img
                      src={img.image_url}
                      alt={item.title}
                      className="w-full h-auto block m-0 p-0"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          // 일러스트레이션 뷰어 모드: 가로/세로 모든 스크롤을 막고 뷰포트 내에 꽉 차게 원본 비율 유지
          <div className="flex flex-col w-full h-[100dvh] items-center justify-center p-4">
            {/* Image area */}
            <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden min-h-0">
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
                </div>
              ) : currentImage ? (
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                  <img
                    src={currentImage.image_url}
                    alt={item.title}
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center text-white/50">
                  이미지가 없습니다
                </div>
              )}

              {/* Navigation arrows (illustrations) */}
              {images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute z-10 left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 rounded-full w-12 h-12"
                    onClick={goToPrevious}
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute z-10 right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 rounded-full w-12 h-12"
                    onClick={goToNext}
                  >
                    <ChevronRight className="w-8 h-8" />
                  </Button>

                  <div className="absolute z-10 bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={cn(
                          'w-2 h-2 rounded-full transition-all shadow-md',
                          index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
                        )}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Info panel */}
            <div className="w-auto min-w-[200px] flex-shrink-0 mt-4 rounded-xl bg-black/70 text-white backdrop-blur-xl shadow-2xl p-4 mb-4">
              <div className="flex flex-col items-center text-center gap-1">
                <h2 className="text-2xl font-display text-white drop-shadow-md">{item.title}</h2>
                {/* Thumbnail info */}
                {images.length > 1 && (
                  <span className="text-xs text-white/60 shrink-0 whitespace-nowrap drop-shadow-sm mt-1">
                    {currentIndex + 1} / {images.length}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
