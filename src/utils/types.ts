export interface Facility {
  id: number
  review: Review[]
  name: string
  description: string
  longitude: string
  latitude: string
  location: string
  images: FacilityImages[]
  rating: number
  total_rating: number
  sum_rating: number
  disability_support: string[]
}

export interface Review {
  id: number,
  user: string
  image: string
  description: string
  rating: number
}

export interface FacilityImages {
  id: number
  name: string
  image: string
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
  date: string
}
