import { MainLayout } from '@/components/main-layout'
import { createClient } from '@/lib/supabase/server'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: '활동 | 레쓰고 퍼짐',
  description: '레쓰고 퍼짐의 전시, 워크샵, 이벤트 등 활동 내역',
}

const activityTypeLabels: Record<string, string> = {
  exhibition: '전시',
  workshop: '워크샵',
  event: '이벤트',
  press: '언론',
  other: '기타',
}

const activityTypeColors: Record<string, string> = {
  exhibition: 'bg-primary/10 text-primary',
  workshop: 'bg-accent/20 text-accent-foreground',
  event: 'bg-secondary text-secondary-foreground',
  press: 'bg-chart-1/10 text-chart-1',
  other: 'bg-muted text-muted-foreground',
}

export default async function ActivitiesPage() {
  const supabase = await createClient()
  
  const { data: activities } = await supabase
    .from('activities')
    .select('*')
    .order('date', { ascending: false })

  return (
    <MainLayout>
      <div className="min-h-screen p-8 relative z-20">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-primary/10">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-display graffiti-text text-red-500">활동</h1>
              <p className="text-muted-foreground mt-1">Activities & Events</p>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl">
            전시, 워크샵, 이벤트 등 다양한 활동 내역을 확인하세요.
          </p>
        </div>

        {/* Activities List */}
        <div className="max-w-6xl mx-auto">
          {activities && activities.length > 0 ? (
            <div className="space-y-6">
              {activities.map((activity: any) => (
                <article
                  key={activity.id}
                  className="group flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-card border hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  {activity.image_url && (
                    <div className="relative w-full md:w-48 h-36 rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={activity.image_url}
                        alt={activity.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 192px"
                      />
                    </div>
                  )}
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${activityTypeColors[activity.activity_type] || activityTypeColors.other}`}>
                        {activityTypeLabels[activity.activity_type] || activity.activity_type}
                      </span>
                      {activity.date && (
                        <span className="text-sm text-muted-foreground">
                          {activity.date}
                        </span>
                      )}
                    </div>
                    
                    <h2 className="text-xl font-display mb-2 group-hover:text-primary transition-colors">
                      {activity.title}
                    </h2>
                    
                    {activity.location && (
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{activity.location}</span>
                      </div>
                    )}
                    
                    {activity.description && (
                      <p className="text-muted-foreground line-clamp-3">
                        {activity.description}
                      </p>
                    )}
                    
                    {activity.link_url && (
                      <Link
                        href={activity.link_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-3 text-primary hover:text-primary/80 text-sm"
                      >
                        자세히 보기 <ExternalLink className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
              <div className="w-24 h-24 mb-4 rounded-full bg-muted flex items-center justify-center">
                <Calendar className="w-12 h-12" />
              </div>
              <p className="text-lg font-medium">아직 등록된 활동이 없습니다</p>
              <p className="text-sm mt-1">관리자 모드에서 새 활동을 추가해보세요</p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  )
}
