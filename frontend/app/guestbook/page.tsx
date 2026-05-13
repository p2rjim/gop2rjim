import { MainLayout } from '@/components/main-layout'
import { createClient } from '@/lib/supabase/server'
import { MessageCircle } from 'lucide-react'
import { GuestbookForm } from './guestbook-form'
import { GuestbookList } from './guestbook-list'
import Image from 'next/image'
import instrImg from '@/src/assets/instr.webp'
import nameImg from '@/src/assets/name.webp'
import { FallingImages } from '@/components/falling-images'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: '방명록 | 레쓰고 퍼짐',
  description: '레쓰고 퍼짐에게 메시지를 남겨주세요',
}

export default async function GuestbookPage() {
  const supabase = await createClient()
  
  const { data: comments } = await supabase
    .from('comments')
    .select('*')
    .eq('is_approved', true)
    .order('created_at', { ascending: false })

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .single()

  return (
    <MainLayout>
      <FallingImages />
      <div className="min-h-screen p-8 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center mb-4">
          
          {/* Profile Section (상단 중앙 강조) */}
          <div className="w-full max-w-4xl bg-card border rounded-3xl p-6 mb-6 shadow-xl hover:border-primary/50 transition-colors flex flex-col md:flex-row items-center gap-8 backdrop-blur-sm">
            {profile?.avatar_url ? (
              <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shrink-0 border-4 border-cyan-400/20">
                <Image
                  src={profile.avatar_url}
                  alt={profile.artist_name || '프로필 이미지'}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-muted flex items-center justify-center shrink-0 border-4 border-cyan-400/20">
                <span className="text-4xl text-muted-foreground">프로필</span>
              </div>
            )}
            
            <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start justify-center">
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mb-4 w-full">
                <div className="relative w-[240px] h-[120px] md:w-[450px] md:h-[225px] shrink-0">
                  <Image src={nameImg} alt="Name Logo" fill className="object-contain" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display graffiti-text text-cyan-400">
                  {profile?.artist_name || '레쓰고 퍼짐'}
                </h2>
              </div>
              {profile?.bio && (
                <p className="text-muted-foreground whitespace-pre-wrap leading-relaxed text-lg mb-6">
                  {profile.bio}
                </p>
              )}
              
              {/* Instagram Shortcut */}
              <a
                href="https://www.instagram.com/rlawjdgnswlwhsdlehlftkskdl?igsh=NDB3MmRhZHllenQ3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-40 h-20 bg-card hover:bg-muted border rounded-2xl transition-all hover:scale-105 shadow-lg group p-3"
              >
                <div className="relative w-full h-full group-hover:-translate-y-1 transition-transform">
                  <Image src={instrImg} alt="Instagram" fill className="object-contain" />
                </div>
              </a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12 items-start justify-center">
          
          {/* Comments List */}
          <div className="flex-1 w-full max-w-2xl lg:ml-auto">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-cyan-400/20">
                  <MessageCircle className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h1 className="text-4xl font-display graffiti-text text-cyan-400">방명록</h1>
                  <p className="text-muted-foreground mt-1">Guestbook</p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground">
                방문해주셔서 감사합니다! 자유롭게 메시지를 남겨주세요.
              </p>
            </div>

            <GuestbookList comments={comments || []} />
          </div>

          {/* Comment Form (화면 우측에 고정) */}
          <div className="w-full lg:w-[400px] lg:sticky lg:top-24 lg:mr-auto">
            <h2 className="text-2xl font-display mb-6">메시지 남기기</h2>
            <GuestbookForm />
          </div>
          
        </div>
      </div>
    </MainLayout>
  )
}
