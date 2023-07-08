import BodyModule from '@/components/modules/EducationNewsPage/BodyModule'
import HeroModule from '@/components/modules/EducationNewsPage/HeroModule'
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
      <HeroModule />
      <BodyModule educations={educations} news={news} />
    </>
  )
}