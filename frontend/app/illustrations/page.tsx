import { MainLayout } from '@/components/main-layout'
import { GalleryGrid } from '@/components/gallery-grid'
import { createClient } from '@/lib/supabase/server'
import { Image as ImageIcon } from 'lucide-react'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: '일러스트 | 레쓰고 퍼짐',
  description: '레쓰고 퍼짐의 일러스트레이션을 만나보세요',
}

export default async function IllustrationsPage() {
  const supabase = await createClient()
  
  const { data: illustrations } = await supabase
    .from('illustrations')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <MainLayout>
      <div className="min-h-screen p-8 relative z-20">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-yellow-400/20">
              <ImageIcon className="w-8 h-8 text-yellow-400" />
            </div>
            <div>
              <h1 className="text-4xl font-display graffiti-text text-yellow-400">일러스트</h1>
              <p className="text-muted-foreground mt-1">Illustrations</p>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl">
            일러스트레이션 작품들을 감상해보세요. 각 작품을 클릭하면 더 자세히 볼 수 있습니다.
          </p>
        </div>

        {/* Gallery */}
        <div className="max-w-6xl mx-auto">
          <GalleryGrid items={illustrations || []} type="illustrations" />
        </div>
      </div>
    </MainLayout>
  )
}
