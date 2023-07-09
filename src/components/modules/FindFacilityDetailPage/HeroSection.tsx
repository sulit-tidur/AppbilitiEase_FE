'use client'

import { poppins } from '@/utils/fonts'
import { Facility } from '@/utils/types'
import { useRouter } from 'next/navigation'
import { IoIosArrowDropleftCircle } from 'react-icons/io'

interface HeroSectionProps {
  facility: Facility
}

const HeroSection: React.FC<HeroSectionProps> = ({
  facility
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
        <h1 className='text-5xl font-semibold text-dark'>
          {facility.name}
        </h1>
      </div>
    </section>
  )
}

export default HeroSection