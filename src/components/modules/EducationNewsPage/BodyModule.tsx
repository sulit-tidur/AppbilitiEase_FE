import EducationSection from './EducationSection'
import NewsSection from './NewsSection'
import SearchSection from './SearchSection'

const BodyModule = () => {
  return (
    <section className='container flex flex-col gap-8 px-4 py-8 mx-auto md:py-14 md:gap-14'>
      <SearchSection />
      <hr />
      <EducationSection />
      <hr />
      <NewsSection />
    </section>
  )
}

export default BodyModule