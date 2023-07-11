import useLandingRef from '@/components/hooks/useLandingRef'
import { roboto } from '@/utils/fonts'
import Image from 'next/image'
import { useRef } from 'react'

const FeaturesCard = () => {
  const landingPageRef = useLandingRef()

  const cardRef = useRef<HTMLDivElement>(null)

  const handleScrollToFacilities = () => {
    const element = landingPageRef.nearestFacilityRef?.current
    const navHeight = 88
    const elementPosition = element?.getBoundingClientRect().top || 0
    const offset = elementPosition + window.scrollY - navHeight + ((cardRef.current?.getBoundingClientRect().height || 0) / 2)

    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    })
  }

  const handleScrollToEducationNews = () => {
    const element = landingPageRef.educationNewsRef?.current
    const navHeight = 88
    const elementPosition = element?.getBoundingClientRect().top || 0
    const offset = elementPosition + window.scrollY - navHeight

    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    })
  }

  return (
    <div ref={cardRef} className={`${roboto.className} bg-dark w-[95%] max-w-[1536px] self-center p-10 rounded-[14px] flex flex-col md:flex-row justify-center place-content-center gap-6 xl:gap-6`}>
      {/* Cari Fasilitas */}
      <button
        onClick={handleScrollToFacilities}
        className='flex flex-col items-center gap-4 xxs:flex-row md:flex-col xl:flex-row group'
      >
        <Image
          src={'/images/cari-fasilitas-icon.svg'}
          width={101} height={101} alt='Cari Fasilitas'
          className='motion-safe:group-hover:-translate-y-1 transition rounded-[23px]'
        />
        <div className='flex flex-col items-center gap-2 xxs:items-start md:items-center xl:items-start'>
          <p className='text-lg font-medium text-center text-white xxs:text-left md:text-center xl:text-left group-hover:underline'>
            Cari Fasilitas Terdekat
          </p>
          <p className='text-xs text-center text-white/70 xxs:text-left md:text-center xl:text-left'>
            Temukan fasilitas ramah disabilitas yang tersedia sesuai dengan lokasi tujuan
          </p>
        </div>
      </button>
      {/* Edukasi & Berita */}
      <button
        onClick={handleScrollToEducationNews}
        className='flex flex-col items-center gap-4 xxs:flex-row md:flex-col xl:flex-row group'
      >
        <Image
          src={'/images/edukasi-icon.svg'}
          width={101} height={101} alt='Edukasi & Berita'
          className='motion-safe:group-hover:-translate-y-1 transition rounded-[23px]'
        />
        <div className='flex flex-col items-center gap-2 xxs:items-start md:items-center xl:items-start'>
          <p className='text-lg font-medium text-center text-white xxs:text-left md:text-center xl:text-left group-hover:underline'>
            Akses Edukasi & Berita Terkini
          </p>
          <p className='text-xs text-center text-white/70 xxs:text-left md:text-center xl:text-left'>
            Dapatkan artikel edukasi dan berita terkini seputar disabilitas dengan mudah
          </p>
        </div>
      </button>
      {/* Review */}
      <button
        onClick={handleScrollToFacilities}
        className='flex flex-col items-center gap-4 xxs:flex-row md:flex-col xl:flex-row group'
      >
        <Image
          src={'/images/review-icon.svg'}
          width={101} height={101} alt='Beri Penilaian'
          className='motion-safe:group-hover:-translate-y-1 transition rounded-[23px]'
        />
        <div className='flex flex-col items-center gap-2 xxs:items-start md:items-center xl:items-start'>
          <p className='text-lg font-medium text-center text-white xxs:text-left md:text-center xl:text-left group-hover:underline'>
            Berikan Penilaian
          </p>
          <p className='text-xs text-center text-white/70 xxs:text-left md:text-center xl:text-left'>
            Tingkatkan kualitas fasilitas ramah disabilitas dengan memberikan ulasan dan penilaian
          </p>
        </div>
      </button>
    </div>
  )
}

export default FeaturesCard