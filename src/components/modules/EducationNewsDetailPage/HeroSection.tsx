import BackButton from '@/components/Buttons/BackButton'
import { poppins } from '@/utils/fonts'
import { Article } from '@/utils/types'

interface HeroSectionProps {
  article: Article
}

const HeroSection: React.FC<HeroSectionProps> = ({
  article
}) => {
  return (
    <section className={`${poppins.className} bg-[url(/images/bg/bg-edukasi-berita.svg)] relative bg-center bg-cover bg-no-repeat h-fit flex`}>
      <div className='container mx-auto mt-[88px] px-4 md:px-20 pt-[calc((50vh-88px)/2)] pb-[15vh] flex flex-col gap-4'>
        <BackButton />
        <h1 className='font-semibold break-words text-header text-dark'>
          {article.title}
        </h1>
      </div>
    </section>
  )
}

export default HeroSection