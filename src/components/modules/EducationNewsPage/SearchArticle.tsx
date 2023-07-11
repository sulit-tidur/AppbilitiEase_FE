'use client'

import SearchSection from '../SearchSection'
import getArticles from '@/utils/actions/getArticles'
import useArticleList from '@/components/hooks/useArticleList'
import useLoading from '@/components/hooks/useLoading'

const SearchArticle = () => {
  const articleList = useArticleList()
  const { setLoadingEdukasi, setLoadingBerita } = useLoading()

  const handleSearch = async (value: string) => {
    setLoadingEdukasi(true)
    setLoadingBerita(true)

    const [educationsResult, newsResults] = await Promise.allSettled([
      getArticles({ tag: 'education', title: value }),
      getArticles({ tag: 'news', title: value })
    ])
    educationsResult.status === 'fulfilled' ? articleList.setEducations(educationsResult.value) : []
    newsResults.status === 'fulfilled' ? articleList.setNews(newsResults.value) : []

    setLoadingEdukasi(false)
    setLoadingBerita(false)
  }

  return (
    <SearchSection placeholder='Cari edukasi atau berita..' action={handleSearch} />
  )
}

export default SearchArticle