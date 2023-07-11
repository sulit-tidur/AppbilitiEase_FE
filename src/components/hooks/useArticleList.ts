import { Article } from '@/utils/types';
import { create } from 'zustand';

interface ArticleListProps {
  educations: Article[] | null
  setEducations: (educations: Article[]) => void

  news: Article[] | null
  setNews: (articles: Article[]) => void
}

const useArticleList = create<ArticleListProps>((set) => ({
  educations: null,
  setEducations: (educations: Article[]) => set({ educations }),

  news: null,
  setNews: (news: Article[]) => set({ news })
}))

export default useArticleList