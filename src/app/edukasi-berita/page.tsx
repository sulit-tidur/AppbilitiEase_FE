import BodyModule from '@/components/modules/BodyModule'
import EducationSection from '@/components/modules/EducationNewsPage/EducationSection'
import NewsSection from '@/components/modules/EducationNewsPage/NewsSection'
import HeroModule from '@/components/modules/HeroModule'
import SearchSection from '@/components/modules/SearchSection'
import getArticles from '@/utils/actions/getArticles'

export default async function EducationNews() {
  const [educationsResult, newsResults] = await Promise.allSettled([
    getArticles({ tag: 'education' }),
    getArticles({ tag: 'news' })
  ])

  const educations = educationsResult.status === 'fulfilled' ? educationsResult.value : []
  const news = newsResults.status === 'fulfilled' ? newsResults.value : []


  const handleSearch = async (value: string) => {
    'use server'
    console.log(value)
  }

  return (
    <>
      <HeroModule title='Edukasi & Berita' bg='bg-[url(/images/bg/bg-edukasi-berita.svg)]' />
      <BodyModule>
        <SearchSection placeholder='Cari edukasi atau berita..' action={handleSearch} />
        <hr />
        <EducationSection educations={educations} />
        <hr />
        <NewsSection news={news} />
      </BodyModule>
    </>
  )
}