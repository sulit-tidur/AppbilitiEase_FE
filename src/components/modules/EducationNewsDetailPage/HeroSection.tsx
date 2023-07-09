'use client'

import { poppins } from '@/utils/fonts'
import { Article } from '@/utils/types'
import { useRouter } from 'next/navigation'
import { IoIosArrowDropleftCircle } from 'react-icons/io'

interface HeroSectionProps {
  article: Article
}

const HeroSection: React.FC<HeroSectionProps> = ({
  article
}) => {
  const router = useRouter()
  return (
    <section className={`${poppins.className} bg-[url(/images/bg/bg-edukasi-berita.svg)] relative bg-center bg-cover bg-no-repeat h-fit flex`}>
      <div className='container mx-auto mt-[88px] px-4 md:px-20 pt-[calc((50vh-88px)/2)] pb-[15vh] flex flex-col gap-4'>
        <button
          onClick={() => router.back()}
          className='flex items-center gap-[4px] group w-fit'
        >
          <IoIosArrowDropleftCircle />
          <p className='font-normal group-hover:underline'>
            Kembali
          </p>
        </button>
        <h1 className='text-3xl font-semibold break-words sm:text-5xl text-dark'>
          {article.title}
        </h1>
      </div>
    </section>
  )
}

export default HeroSection