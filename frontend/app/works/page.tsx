import { MainLayout } from '@/components/main-layout'
import { GalleryGrid } from '@/components/gallery-grid'
import { createClient } from '@/lib/supabase/server'
import { Palette } from 'lucide-react'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: '웹툰 | 레쓰고 퍼짐',
  description: '레쓰고 퍼짐의 웹툰을 만나보세요',
}

export default async function WorksPage() {
  const supabase = await createClient()
  
  const { data: works } = await supabase
    .from('works')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <MainLayout>
      <div className="min-h-screen p-8 relative z-20">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-primary/10">
              <Palette className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-display graffiti-text text-green-500">웹툰</h1>
              <p className="text-muted-foreground mt-1">Webtoons & Projects</p>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl">
            다양한 웹툰과 프로젝트를 둘러보세요. 썸네일을 클릭하면 상세 이미지를 볼 수 있습니다.
          </p>
        </div>

        {/* Gallery */}
        <div className="max-w-6xl mx-auto">
          <GalleryGrid items={works || []} type="works" />
        </div>
      </div>
    </MainLayout>
  )
}
