import { MainLayout } from '@/components/main-layout'
import { createClient } from '@/lib/supabase/server'
import Image from 'next/image'
import heroBg from '@/src/assets/hero-bg.webp'
import titleImage from '@/src/assets/title.webp'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const supabase = await createClient()

  const { data: profile } = await supabase.from('profiles').select('*').single()

  return (
    <MainLayout>
      <div className="min-h-[175vh] w-full relative">
        <div className="fixed top-2 left-1/2 -translate-x-1/2 w-full text-center text-sm text-white/50 z-[90] pointer-events-none">
          <p>클릭하면 페인트가 튀고, 길게 누르면 스프레이를 뿌릴 수 있어요!</p>
        </div>

        {/* Fixed Background Image */}
        <div className="fixed inset-0 z-0 pointer-events-none select-none">
          <Image
            src={heroBg}
            alt="Hero Background"
            fill
            priority
            draggable={false}
            className="object-cover opacity-90"
          />
          {/* 텍스트 가독성을 위한 반투명 오버레이 */}
          <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />
        </div>

        {/* Hero Section */}
        <section className="relative h-[100vh] w-full flex items-center justify-center pointer-events-none">
          
          <div className="relative z-30 text-center px-6">
            <div className="relative mx-auto w-[340px] h-[170px] sm:w-[500px] sm:h-[250px] md:w-[760px] md:h-[350px] max-w-[90vw] pointer-events-none select-none">
              <Image
                src={titleImage}
                alt="레쓰고 퍼짐 타이틀 로고"
                fill
                priority
                draggable={false}
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
