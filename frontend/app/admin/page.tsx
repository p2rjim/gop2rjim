'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { MainLayout } from '@/components/main-layout'
import { useAdmin } from '@/lib/admin-context'
import { AdminProvider } from '@/lib/admin-context'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Settings, Palette, Image, Calendar, MessageCircle, User } from 'lucide-react'
import { WorksManager } from './works-manager'
import { IllustrationsManager } from './illustrations-manager'
import { ActivitiesManager } from './activities-manager'
import { CommentsManager } from './comments-manager'
import { ProfileManager } from './profile-manager'

function AdminContent() {
  const { isAdmin, isInitializing } = useAdmin()
  const router = useRouter()

  useEffect(() => {
    if (!isInitializing && !isAdmin) {
      router.push('/')
    }
  }, [isAdmin, isInitializing, router])

  if (isInitializing) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (!isAdmin) {
    return null
  }

  return (
    <div className="min-h-screen p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-xl bg-primary/10">
            <Settings className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-display">관리자</h1>
            <p className="text-muted-foreground mt-1">콘텐츠 관리</p>
          </div>
        </div>
      </div>

      {/* Admin Tabs */}
      <div className="max-w-6xl mx-auto">
        <Tabs defaultValue="works" className="space-y-6">
          <TabsList className="grid grid-cols-5 w-full max-w-2xl">
            <TabsTrigger value="works" className="flex items-center gap-2">
              <Palette className="w-4 h-4" />
              <span className="hidden sm:inline">웹툰</span>
            </TabsTrigger>
            <TabsTrigger value="illustrations" className="flex items-center gap-2">
              <Image className="w-4 h-4" />
              <span className="hidden sm:inline">일러스트</span>
            </TabsTrigger>
            <TabsTrigger value="activities" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">활동</span>
            </TabsTrigger>
            <TabsTrigger value="comments" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">방명록</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">프로필</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="works">
            <WorksManager />
          </TabsContent>

          <TabsContent value="illustrations">
            <IllustrationsManager />
          </TabsContent>

          <TabsContent value="activities">
            <ActivitiesManager />
          </TabsContent>

          <TabsContent value="comments">
            <CommentsManager />
          </TabsContent>

          <TabsContent value="profile">
            <ProfileManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default function AdminPage() {
  return (
    <AdminProvider>
      <MainLayout showPaintEffects={false}>
        <AdminContent />
      </MainLayout>
    </AdminProvider>
  )
}
