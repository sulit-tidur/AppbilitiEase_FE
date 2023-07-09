import { Article } from '@/utils/types'
import EducationSection from './EducationSection'
import NewsSection from './NewsSection'
import SearchSection from './SearchSection'

interface BodyModuleProps {
  educations: Article[]
  news: Article[]
}

const BodyModule: React.FC<BodyModuleProps> = ({
  educations, news
}) => {
  return (
    <section className='container flex flex-col gap-8 px-4 py-8 mx-auto md:py-14 md:gap-14'>
      <SearchSection />
      <hr />
      <EducationSection educations={educations} />
      <hr />
      <NewsSection news={news} />
    </section>
  )
}

export default BodyModule