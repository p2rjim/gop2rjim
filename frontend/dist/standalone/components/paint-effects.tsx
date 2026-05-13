'use client'

import { useEffect, useRef, useCallback, useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import spray1 from '@/src/assets/spray-1.webp'
import spray2 from '@/src/assets/spray-2.webp'
import spray3 from '@/src/assets/spray-3.webp'
import eraserImg from '@/src/assets/eraser.webp'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  alpha: number
  decay: number
}

interface SprayPoint {
  x: number
  y: number
  radius: number
  color: string
}

// Blue, mint, bluish mint, white only - no red
const COLORS = [
  'rgba(59, 130, 246, 0.8)',   // blue
  'rgba(45, 212, 191, 0.8)',   // mint
  'rgba(20, 184, 166, 0.8)',   // bluish mint (formerly green)
  'rgba(147, 197, 253, 0.8)',  // light blue
  'rgba(167, 243, 208, 0.8)',  // light mint
]

export function PaintEffectsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const sprayPointsRef = useRef<SprayPoint[]>([])
  const animationFrameRef = useRef<number>(0)
  const isSprayingRef = useRef(false)
  const longPressTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const lastPosRef = useRef({ x: 0, y: 0, clientX: 0, clientY: 0 })
  const [isDrawing, setIsDrawing] = useState(false)
  const [hasSprayDrawings, setHasSprayDrawings] = useState(false)
  const pathname = usePathname()

  // 이 컴포넌트가 언마운트(홈이 아닌 다른 곳으로 이동)될 때 잔여 스프레이 효과 지우기
  useEffect(() => {
    return () => {
      if (typeof document !== 'undefined') {
        const sprayArts = document.querySelectorAll('.custom-spray-art')
        sprayArts.forEach(el => el.remove())
      }
    }
  }, [])

  const getRandomColor = useCallback(() => {
    return COLORS[Math.floor(Math.random() * COLORS.length)]
  }, [])

  const createSplashParticles = useCallback((pageX: number, pageY: number, clientX: number, clientY: number) => {
    const particleCount = 12 + Math.floor(Math.random() * 8)
    const color = getRandomColor()
    
    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.5
      const speed = 2 + Math.random() * 4
      const radius = 3 + Math.random() * 8
      
      particlesRef.current.push({
        x: clientX,
        y: clientY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius,
        color,
        alpha: 1,
        decay: 0.02 + Math.random() * 0.02,
      })
    }

    // 마우스 클릭 시 랜덤 스프레이 이미지 생성 (클릭 위치 중심점 기준)
    const sprayImages = [spray1.src, spray2.src, spray3.src]
    const randomImgSrc = sprayImages[Math.floor(Math.random() * sprayImages.length)]
    
    // 단순 클릭 파티클은 true를 넣어 금방 사라지도록 변경합니다!
    createSprayDOMElement(pageX, pageY, randomImgSrc, true, 60 + Math.random() * 60)
  }, [getRandomColor])

  const createSprayDOMElement = (x: number, y: number, imgName: string, autoRemove: boolean = true, customSize?: number) => {
    // Vercel 서버에서는 document에 바로 접근하지 않음
    if (typeof document === 'undefined') return;
    
    const sprayEl = document.createElement('div');
    sprayEl.className = 'custom-spray-art'; // Clear 버튼으로 지울 수 있게 클래스 추가
    // 명도/채도가 최대인 쨍한 네온 컬러들로 대폭 수정 (형광핑크, 형광연두, 핫레드, 옐로우, 형광민트, 매직퍼플 등)
    const colors = ['#FF00FF', '#39FF14', '#FFEA00', '#FF3131', '#00FFFF', '#bc13fe', '#FF1493', '#00FF00'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const size = customSize || (30 + Math.random() * 20); // 크기를 지정하거나 작게 만들기
    const rotate = (Math.random() * 360) - 180; // 랜덤 회전각
    
    sprayEl.style.position = 'absolute';
    sprayEl.style.left = `${x - size / 2}px`;
    sprayEl.style.top = `${y - (size * 0.6)}px`; // 마우스 포인트 위치 조정
    sprayEl.style.width = `${size}px`;
    sprayEl.style.height = `${size}px`;
    sprayEl.style.pointerEvents = 'none';
    sprayEl.style.zIndex = '9999';
    sprayEl.style.transform = `rotate(${rotate}deg)`;
    sprayEl.style.backgroundColor = randomColor;
    sprayEl.style.webkitMaskImage = `url(${imgName})`;
    sprayEl.style.webkitMaskSize = 'contain';
    sprayEl.style.webkitMaskRepeat = 'no-repeat';
    sprayEl.style.webkitMaskPosition = 'center';
    sprayEl.style.maskImage = `url(${imgName})`;
    sprayEl.style.maskSize = 'contain';
    sprayEl.style.maskRepeat = 'no-repeat';
    sprayEl.style.maskPosition = 'center';
    // mixBlendMode 제거하여 색이 뭍히지 않고 본연의 쨍한 색 그대로 선명하게 출력하게 함
    sprayEl.style.opacity = '0'; // 애니메이션 시작 시 투명
    
    document.body.appendChild(sprayEl);

    // 투명도 100% (1)로 수정하여 아주 진하고 선명하게 나오게 설정!
    sprayEl.animate([
      { transform: `scale(0.5) rotate(${rotate}deg)`, opacity: 0 },
      { transform: `scale(1.1) rotate(${rotate}deg)`, opacity: 1 },
      { transform: `scale(1) rotate(${rotate}deg)`, opacity: 1 }
    ], {
      duration: 300,
      easing: 'ease-out',
      fill: 'forwards'
    });
    
    if (autoRemove) {
      // 투명도를 0으로 만드는 스타일 대신 animate() 덮어쓰기 방식으로 페이드아웃 적용
      setTimeout(() => {
        const fadeOutAnim = sprayEl.animate([
          { opacity: 1 },
          { opacity: 0 }
        ], {
          duration: 2500,
          easing: 'ease-in-out',
          fill: 'forwards'
        });
        
        fadeOutAnim.onfinish = () => {
          sprayEl.remove();
        };
      }, 1000);
    }
  }

  const addSprayPoints = useCallback((x: number, y: number) => {
    // Canvas 방식이었던 것을 DOM 방식(스프레이 이미지)으로 교체!
    // 성능을 위해 간격 제한 로직은 움직일 때 체크하게 변경. 여기선 1개만 생성.
    const sprayImages = [spray1.src, spray2.src, spray3.src];
    const randomImgSrc = sprayImages[Math.floor(Math.random() * sprayImages.length)];
    
    // 작은 사이즈로 생성, 지워지지 않음 (autoRemove: false)
    createSprayDOMElement(x, y, randomImgSrc, false, 25 + Math.random() * 20);
  }, [])

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // 캔버스를 매 프레임 선명하게 초기화하여 누를 때나 뗐을 때 투명도 차이가 생기지 않도록 수정
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw spray points (permanent until cleared)
    // 꾹 눌러서 연속 생성된 스프레이 포인트들 (에어브러쉬 느낌으로 부드럽게)
    sprayPointsRef.current.forEach((point) => {
      ctx.beginPath()
      const gradient = ctx.createRadialGradient(
        point.x, point.y, 0,
        point.x, point.y, point.radius
      )
      // 중심부는 지정된 색, 외곽으로 갈수록 투명해져 그라데이션(스프레이) 효과를 줍니다.
      const colorBase = point.color.replace(/[\d.]+\)$/, '1)')
      const colorTransparent = point.color.replace(/[\d.]+\)$/, '0)')
      
      gradient.addColorStop(0, colorBase)
      gradient.addColorStop(0.5, point.color.replace(/[\d.]+\)$/, '0.5)'))
      gradient.addColorStop(1, colorTransparent)

      ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()
    })

    // Draw and update particles
    particlesRef.current = particlesRef.current.filter((particle) => {
      particle.x += particle.vx
      particle.y += particle.vy
      particle.vy += 0.1 // gravity
      particle.alpha -= particle.decay

      if (particle.alpha <= 0) return false

      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
      ctx.fillStyle = particle.color.replace(/[\d.]+\)$/, `${particle.alpha})`)
      ctx.fill()

      // Add drip effect
      if (Math.random() < 0.1 && particle.radius > 4) {
        ctx.beginPath()
        ctx.ellipse(
          particle.x,
          particle.y + particle.radius,
          particle.radius * 0.3,
          particle.radius * 0.8,
          0,
          0,
          Math.PI * 2
        )
        ctx.fillStyle = particle.color.replace(/[\d.]+\)$/, `${particle.alpha * 0.5})`)
        ctx.fill()
      }

      return true
    })

    animationFrameRef.current = requestAnimationFrame(animate)
  }, [isDrawing])

  const handleClick = useCallback((e: MouseEvent) => {
    // 마우스 왼쪽 버튼 클릭만 허용 (0: 왼쪽 버튼)
    if (e.button !== 0) return;
    if (isSprayingRef.current) return
    
    // 화면 전체 위치(페이지 스크롤 여부 고려)를 얻기 위해 pageX/Y 사용
    const x = e.pageX
    const y = e.pageY
    
    // 캔버스 효과용(고정 화면)을 위해 clientX/Y도 따로 전달
    createSplashParticles(x, y, e.clientX, e.clientY)
  }, [createSplashParticles])

  const handlePointerDown = useCallback((e: PointerEvent) => {
    // 마우스 왼쪽 버튼(0) 혹은 터치 입력만 허용
    if (e.pointerType === 'mouse' && e.button !== 0) return;

    lastPosRef.current = {
      x: e.pageX,
      y: e.pageY,
      clientX: e.clientX,
      clientY: e.clientY
    }

    longPressTimerRef.current = setTimeout(() => {
      isSprayingRef.current = true
      setIsDrawing(true)
      setHasSprayDrawings(true)
      addSprayPoints(lastPosRef.current.x, lastPosRef.current.y)
    }, 150)
  }, [addSprayPoints])

  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (!isSprayingRef.current) return

    const x = e.pageX
    const y = e.pageY
    const clientX = e.clientX
    const clientY = e.clientY
    
    // 점이 너무 많이 찍히는 것을 방지하기 위해, 지난 위치에서 최소 15px 이상 움직였을 때만 이미지 생성
    const dx = clientX - (lastPosRef.current.clientX || clientX);
    const dy = clientY - (lastPosRef.current.clientY || clientY);
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance > 15) {
      addSprayPoints(x, y)
      lastPosRef.current = { x, y, clientX, clientY }
    }
  }, [addSprayPoints])

  const handlePointerUp = useCallback(() => {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current)
    }
    
    if (isSprayingRef.current) {
      isSprayingRef.current = false
      setIsDrawing(false)
    }
  }, [])

  const clearCanvas = useCallback(() => {
    sprayPointsRef.current = []
    particlesRef.current = []
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
    }
    
    // DOM에 추가된 커스텀 스프레이 요소들도 모두 찾아서 삭제!
    const sprayElements = document.querySelectorAll('.custom-spray-art')
    sprayElements.forEach(el => el.remove())
    setHasSprayDrawings(false)
  }, [])

  // 화면 이동 시 낙서 초기화
  useEffect(() => {
    clearCanvas()
  }, [pathname, clearCanvas])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    // 화면 전체(window)에서 이벤트를 감지하여 클릭해야하는 버튼 위에서도 낙서가 되도록 변경!
    window.addEventListener('click', handleClick)
    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp)
    window.addEventListener('pointercancel', handlePointerUp)

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('click', handleClick)
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
      window.removeEventListener('pointercancel', handlePointerUp)
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      if (longPressTimerRef.current) {
        clearTimeout(longPressTimerRef.current)
      }
    }
  }, [animate, handleClick, handlePointerDown, handlePointerMove, handlePointerUp])

  return (
    <>
      <canvas
        ref={canvasRef}
        // 이 캔버스는 마우스 클릭을 가로채지 않고 투명하게 통과시키도록 pointer-events-none 적용
        className="fixed inset-0 pointer-events-none z-10"
        style={{ touchAction: 'none' }}
      />
      {hasSprayDrawings && (
        <button
          onClick={() => {
            clearCanvas()
            setHasSprayDrawings(false)
          }}
          className="fixed bottom-4 right-4 z-[60] hover:scale-110 active:scale-95 transition-transform drop-shadow-lg"
        >
          <Image 
            src={eraserImg}
            alt="지우기"
            width={64}
            height={64}
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
          />
        </button>
      )}
    </>
  )
}
