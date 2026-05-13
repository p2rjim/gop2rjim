'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { GalleryModal } from './gallery-modal'
import type { Work, Illustration } from '@/lib/types'

interface GalleryGridProps {
  items: (Work | Illustration)[]
  type: 'works' | 'illustrations'
}

export function GalleryGrid({ items, type }: GalleryGridProps) {
  const [selectedItem, setSelectedItem] = useState<Work | Illustration | null>(null)

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
        <div className="w-24 h-24 mb-4 rounded-full bg-muted flex items-center justify-center">
          <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-lg font-medium">아직 등록된 작품이 없습니다</p>
        <p className="text-sm mt-1">관리자 모드에서 새 작품을 추가해보세요</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              'group relative aspect-square rounded-xl overflow-hidden cursor-pointer',
              'bg-muted border-2 border-transparent',
              'hover:border-primary hover:shadow-xl hover:shadow-primary/20',
              'transition-all duration-300 transform hover:scale-[1.02]'
            )}
            onClick={() => setSelectedItem(item)}
            style={{
              animationDelay: `${index * 50}ms`,
            }}
          >
            {item.thumbnail_url ? (
              <Image
                src={item.thumbnail_url}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                <span className="text-4xl font-display text-primary/40">{item.title[0]}</span>
              </div>
            )}
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-display text-lg truncate">{item.title}</h3>
                {item.category && (
                  <span className="inline-block mt-1 px-2 py-0.5 bg-white/20 rounded-full text-xs text-white/80">
                    {item.category}
                  </span>
                )}
              </div>
            </div>

            {/* Paint splash decoration on hover */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-spray-mint rounded-full opacity-0 group-hover:opacity-60 transition-opacity blur-sm" />
            <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-spray-blue rounded-full opacity-0 group-hover:opacity-50 transition-opacity blur-sm" />
          </div>
        ))}
      </div>

      <GalleryModal
        item={selectedItem}
        type={type}
        onClose={() => setSelectedItem(null)}
      />
    </>
  )
}
