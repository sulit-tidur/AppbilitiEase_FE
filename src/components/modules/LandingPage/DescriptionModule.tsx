'use client'

import { useElementOnScreen } from '@/components/hooks/useElementOnScreen'
import { poppins } from '@/utils/fonts'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { PiMagnifyingGlassBold } from 'react-icons/pi'
import FeaturesCard from './FeaturesCard'

const DescriptionModule = () => {
  const bubleRef = useRef(null)
  const orangRef = useRef(null)
  const bubleOnScreen = useElementOnScreen({ ref: bubleRef })
  const orangOnScreen = useElementOnScreen({ ref: orangRef })

  return (
    <section className={`${poppins.className} bg-[url(/images/bg/bg-deskripsi.svg)] bg-center bg-cover bg-no-repeat h-fit flex flex-col relative`}>
      <div className='container mx-auto p-4 md:max-w-[calc(100%-100px)] mb-[400px] xxs:mb-[300px] md:mb-[200px] xl:mb-[150px] mt-[150px] xl:mt-[90px] flex flex-col md:flex-row gap-y-10 gap-x-0 items-center justify-center'>
        <div className='relative max-w-[500px] flex flex-col gap-14'>
          <Image
            src={'/images/buble.svg'}
            width={50} height={50} alt='buble' ref={bubleRef}
            className={`
              absolute -translate-y-16 transition duration-1000
              ${bubleOnScreen ? 'opacity-100 -translate-x-0 xs:-translate-x-10' : 'opacity-0 motion-safe:-translate-x-10 xs:-translate-x-20 motion-reduce:xs:-translate-x-10'}
            `}
          />
          <h1 className='text-4xl font-bold capitalize xxs:text-5xl text-dark'>
            Wujudkan Inklusi Melalui <span className='text-purple'>AppbilitiEase</span>
          </h1>
          <p>
            AppbilitiEase merupakan aplikasi yang bertujuan untuk memudahkan masyarakat mencari fasilitas ramah disabilitas, meningkatkan kesadaran terhadap disabilitas, serta menyediakan konten edukasi dan berita seputar disabilitas.
          </p>
          <Link
            href={'/cari-fasilitas'}
            className='flex items-center p-2 transition bg-white rounded-full shadow-lg place-content-between hover:shadow-xl motion-safe:hover:-translate-y-1'
          >
            <div className='flex items-center gap-2 p-4'>
              <PiMagnifyingGlassBold size={15} />
              <p className='text-sm font-medium'>
                Cari fasilitas terdekat...
              </p>
            </div>
            <div className='hidden xs:block bg-purple p-4 rounded-full w-[134px]'>
              <p className='font-medium text-center text-white'>
                Cari
              </p>
            </div>
          </Link>
        </div>
        <Image
          src={'/images/Group-Gambar-Section-1.svg'}
          width={700} height={586.94} alt='Pencarian Fasilitas Terdekat' ref={orangRef}
          className={`
            transition duration-1000 w-[300px] lg:w-[500px] xl:w-[700px]
            ${orangOnScreen ? 'opacity-100 translate-x-[30px]' : 'opacity-0 translate-x-[70px] motion-reduce:translate-x-[30px]'}
          `}
        />
      </div>
      <div className='absolute bottom-0 flex flex-col w-full translate-y-1/2'>
        <FeaturesCard />
      </div>
    </section>
  )
}

export default DescriptionModule