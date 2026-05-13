'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import random1 from '@/src/assets/random1.webp'
import random2 from '@/src/assets/random2.webp'
import random3 from '@/src/assets/random3.webp'
import random4 from '@/src/assets/random4.webp'
import random5 from '@/src/assets/random5.webp'
import random6 from '@/src/assets/random6.webp'
import random7 from '@/src/assets/random7.webp'
import random8 from '@/src/assets/random8.webp'
import random9 from '@/src/assets/random9.webp'

const RANDOM_IMAGES = [random1, random2, random3, random4, random5, random6, random7, random8, random9]

interface FallingImage {
  id: string
  src: any
  startX: number
  startAngle: number
  endAngle: number
  duration: number
  size: number
}

export function FallingImages() {
  const [images, setImages] = useState<FallingImage[]>([])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Form 요소나 버튼 등을 클릭했을 때는 발생하지 않게 하려면 아래 주석 해제 (지금은 어디든 발생하게 둠)
      // if ((e.target as HTMLElement).closest('button, a, input, textarea')) return;

      // 한 번 클릭 시 1~3개의 이미지가 떨어지도록 설정
      const count = Math.floor(Math.random() * 3) + 1
      const newImages: FallingImage[] = []

      for (let i = 0; i < count; i++) {
        const id = Math.random().toString(36).substring(2, 9) + Date.now()
        const src = RANDOM_IMAGES[Math.floor(Math.random() * RANDOM_IMAGES.length)]
        
        // 화면 너비 내의 랜덤한 X 위치
        const startX = Math.random() * (window.innerWidth - 100)
        
        // 시작 각도와 회전하면서 떨어질 각도 설정
        const startAngle = Math.random() * 360
        const endAngle = startAngle + (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 360 + 360)
        
        // 떨어지는 속도 (2초 ~ 4초)
        const duration = Math.random() * 2 + 2
        
        // 이미지 크기 (80px ~ 150px)
        const size = Math.floor(Math.random() * 70) + 80

        newImages.push({ id, src, startX, startAngle, endAngle, duration, size })
        
        // 애니메이션이 끝나면 DOM에서 제거
        setTimeout(() => {
          setImages(prev => prev.filter(img => img.id !== id))
        }, duration * 1000)
      }

      setImages(prev => [...prev, ...newImages])
    }

    // 전역 클릭 이벤트 등록
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])

  // hydration 에러 방지를 위해 처음 렌더링 시에는 안 보이게 처리할 수도 있지만,
  // 아무 클릭도 일어나지 않으면 images 빈 배열이라 상관없음.

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {images.map(img => (
        <div
          key={img.id}
          className="absolute"
          style={{
            left: `${img.startX}px`,
            top: `-200px`, // 화면 위쪽 훨씬 바깥에서 시작
            width: `${img.size}px`,
            height: `${img.size}px`,
            animation: `fall-${img.id} ${img.duration}s linear forwards`,
          }}
        >
          <style>{`
            @keyframes fall-${img.id} {
              0% {
                transform: translateY(0) rotate(${img.startAngle}deg);
                opacity: 1;
              }
              90% {
                opacity: 1;
              }
              100% {
                transform: translateY(120vh) rotate(${img.endAngle}deg);
                opacity: 0;
              }
            }
          `}</style>
          <Image 
            src={img.src} 
            alt="Falling Random" 
            fill 
            className="object-contain drop-shadow-xl" 
          />
        </div>
      ))}
    </div>
  )
}