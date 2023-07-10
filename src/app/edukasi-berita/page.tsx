import BodyModule from '@/components/modules/BodyModule'
import EducationSection from '@/components/modules/EducationNewsPage/EducationSection'
import NewsSection from '@/components/modules/EducationNewsPage/NewsSection'
import SearchArticle from '@/components/modules/EducationNewsPage/SearchArticle'
import HeroModule from '@/components/modules/HeroModule'
import getArticles from '@/utils/actions/getArticles'

export default async function EducationNews() {
  const [educationsResult, newsResults] = await Promise.allSettled([
    getArticles({ tag: 'education' }),
    getArticles({ tag: 'news' })
  ])

  const educations = educationsResult.status === 'fulfilled' ? educationsResult.value : []
  const news = newsResults.status === 'fulfilled' ? newsResults.value : []

  return (
    <>
      <HeroModule title='Edukasi & Berita' bg='bg-[url(/images/bg/bg-edukasi-berita.svg)]' />
      <BodyModule>
        <SearchArticle />
        <hr />
        <EducationSection educations={educations} />
        <hr />
        <NewsSection news={news} />
      </BodyModule>
    </>
  )
}