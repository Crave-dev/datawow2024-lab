export type Category = 'community' | 'history' | 'food' | 'pets' | 'health' | 'fashion' | 'exercise' | 'other'

export interface Post {
  id: string | number
  category: { value: Category; text: string }
  title: string
  description: string
  comments: number
}