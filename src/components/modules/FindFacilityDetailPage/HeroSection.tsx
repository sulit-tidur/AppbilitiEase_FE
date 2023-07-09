'use client'

import { poppins } from '@/utils/fonts'
import { useRouter } from 'next/navigation'
import { IoIosArrowDropleftCircle } from 'react-icons/io'

interface HeroSectionProps {
  facilityName: string
}

const HeroSection: React.FC<HeroSectionProps> = ({
  facilityName
}) => {
  const router = useRouter()
  return (
    <section className={`${poppins.className} bg-[url(/images/bg/bg-cari-fasilitas.svg)] relative bg-center bg-cover bg-no-repeat h-fit flex`}>
      <div className='container mx-auto mt-[88px] px-4 sm:px-12 pt-[calc((50vh-88px)/2)] pb-[15vh] flex flex-col gap-4'>
        <button
          onClick={() => router.back()}
          className='flex items-center gap-[4px] group w-fit'
        >
          <IoIosArrowDropleftCircle />
          <p className='font-normal group-hover:underline'>
            Kembali
          </p>
        </button>
        <h1 className='font-semibold text-header text-dark'>
          {facilityName}
        </h1>
      </div>
    </section>
  )
}

export default HeroSection