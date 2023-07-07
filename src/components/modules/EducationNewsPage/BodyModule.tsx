import EducationSection from "./EducationSection"
import NewsSection from "./NewsSection"
import SearchSection from "./SearchSection"

const BodyModule = () => {
  return (
    <section className="container mx-auto px-4 py-8 md:py-14 flex flex-col gap-8 md:gap-14">
      <SearchSection />
      <hr />
      <EducationSection />
      <hr />
      <NewsSection />
    </section>
  )
}

export default BodyModule