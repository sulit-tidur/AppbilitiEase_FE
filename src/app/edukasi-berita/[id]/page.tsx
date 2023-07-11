import NotFound from '@/app/not-found'
import BodySection from '@/components/modules/EducationNewsDetailPage/BodySection'
import HeroSection from '@/components/modules/EducationNewsDetailPage/HeroSection'
import getArticles from '@/utils/actions/getArticles'

export default async function Berita({ params }: { params: { id: string } }) {
  const article = await getArticles({ id: Number(params.id) })

  if (isNaN(+params.id) || (!article[0])) {
    return (
      <NotFound message='Artikel' />
    )
  }

  return (
    <>
      <HeroSection article={article[0]} />
      <BodySection article={article[0]} />
    </>
  )
}