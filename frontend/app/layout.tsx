import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

export const metadata: Metadata = {
  title: '레쓰고 퍼짐 | Artist Portfolio',
  description: '레쓰고 퍼짐 - 작가 포트폴리오. 그래피티와 스트릿 아트 스타일의 작품들을 만나보세요.',
  keywords: ['artist', 'portfolio', 'graffiti', 'street art', '작가', '포트폴리오', '그래피티'],
  authors: [{ name: '레쓰고 퍼짐' }],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: '레쓰고 퍼짐 | Artist Portfolio',
    description: '그래피티와 스트릿 아트 스타일의 작품들',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3b82f6' },
    { media: '(prefers-color-scheme: dark)', color: '#1e40af' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
        <Toaster position="bottom-right" />
        <Analytics />
      </body>
    </html>
  )
}
