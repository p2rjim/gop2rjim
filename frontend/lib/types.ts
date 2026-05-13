export interface Profile {
  id: string
  artist_name: string
  bio: string | null
  avatar_url: string | null
  instagram_url?: string | null
  created_at: string
  updated_at: string
}

export interface Work {
  id: string
  title: string
  description: string | null
  year: number | null
  category: string | null
  thumbnail_url: string | null
  order_index: number
  created_at: string
  updated_at: string
  images?: WorkImage[]
}

export interface WorkImage {
  id: string
  work_id: string
  image_url: string
  caption: string | null
  order_index: number
  created_at: string
}

export interface Illustration {
  id: string
  title: string
  description: string | null
  category: string | null
  thumbnail_url: string | null
  order_index: number
  created_at: string
  updated_at: string
  images?: IllustrationImage[]
}

export interface IllustrationImage {
  id: string
  illustration_id: string
  image_url: string
  caption: string | null
  order_index: number
  created_at: string
}

export interface Activity {
  id: string
  title: string
  description: string | null
  activity_type: 'exhibition' | 'workshop' | 'event' | 'press' | 'other'
  date: string | null
  location: string | null
  image_url: string | null
  link_url: string | null
  order_index: number
  created_at: string
  updated_at: string
}

export interface Comment {
  id: string
  content: string
  author_name: string
  author_email: string | null
  is_approved: boolean
  created_at: string
}

export type GalleryItem = Work | Illustration

export interface AdminState {
  isAdmin: boolean
  setAdmin: (value: boolean) => void
}
