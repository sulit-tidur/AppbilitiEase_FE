export interface Facility {
  id: number
  review: Review[]
  name: string
  description: string
  longitude: string
  latitude: string
  location: string
  image: string
  rating: number
  total_rating: number
  sum_rating: number
}

export interface Review {
  id: number,
  user: string
  image: string
  description: string
  rating: number
}

export interface Developer {
  name: string
  image: string
  education: string
  description: string
  role: string
  instagram: string
  linkedin: string
}

export interface Article {
  id: number
  title: string
  content: string
  image: string
  tag: "education" | "news"
}

export interface Education {
  image: string
  content: string
  href: string
}

export interface News {
  image: string
  title: string
  content: string
  href: string
  date: string
}
