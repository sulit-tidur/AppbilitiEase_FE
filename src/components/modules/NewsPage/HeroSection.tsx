import { poppins } from "@/utils/fonts"
import { News } from "@/utils/types"

interface HeroSectionProps {
  news: News
}

const HeroSection: React.FC<HeroSectionProps> = ({
  news
}) => {
  return (
    <section className={`${poppins.className} bg-[url(/images/bg/bg-edukasi-berita.svg)] relative bg-center bg-cover bg-no-repeat h-fit flex`}>
      <div className="container mx-auto mt-[88px] px-4 md:px-20 pt-[calc((50vh-88px)/2)] pb-[15vh] flex flex-col gap-4">
        <p>
          {new Date(news.date).toLocaleDateString('id', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
        <h1 className="font-semibold text-5xl text-dark">
          {news.title}
        </h1>
      </div>
    </section>
  )
}

export default HeroSection