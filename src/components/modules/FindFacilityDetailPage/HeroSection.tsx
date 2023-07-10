'use client'

import BackButton from '@/components/Buttons/BackButton'
import { poppins } from '@/utils/fonts'

interface HeroSectionProps {
  facilityName: string
}

const HeroSection: React.FC<HeroSectionProps> = ({
  facilityName
}) => {
  return (
    <section className={`${poppins.className} bg-[url(/images/bg/bg-cari-fasilitas.svg)] relative bg-center bg-cover bg-no-repeat h-fit flex`}>
      <div className='container mx-auto mt-[88px] px-4 sm:px-12 pt-[calc((50vh-88px)/2)] pb-[15vh] flex flex-col gap-4'>
        <BackButton />
        <h1 className='font-semibold text-header text-dark'>
          {facilityName}
        </h1>
      </div>
    </section>
  )
}

export default HeroSection