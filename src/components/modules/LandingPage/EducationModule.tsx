'use client'

import { useElementOnScreen } from '@/components/hooks/useElementOnScreen'
import useLandingRef from '@/components/hooks/useLandingRef'
import { nunito, poppins, roboto } from '@/utils/fonts'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { IoIosArrowDroprightCircle } from 'react-icons/io'

const EducationModule = () => {

  const landingPageRef = useLandingRef()
  const educationNewsRef = useRef<HTMLElement>(null)

  useEffect(() => {
    landingPageRef.setEducationNewsRef(educationNewsRef)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [educationNewsRef])

  const orangFirstRef = useRef(null)
  const orangFirstOnScreen = useElementOnScreen({ ref: orangFirstRef })
  const orangSecondRef = useRef(null)
  const orangSecondOnScreen = useElementOnScreen({ ref: orangSecondRef })
  const edukasiRef = useRef(null)
  const edukasiOnScreen = useElementOnScreen({ ref: edukasiRef })
  const beritaRef = useRef(null)
  const beritaOnScreen = useElementOnScreen({ ref: beritaRef })

  return (
    <section ref={educationNewsRef} className='h-fit bg-cream'>
      <div className='container mx-auto px-4 py-14 md:max-w-[calc(100%-100px)]'>
        <div className='flex flex-col-reverse items-center justify-center md:flex-row gap-x-20 gap-y-14'>
          {/* Education & News Illustration */}
          <Image
            src={'/images/group-gambar-section-3.svg'}
            width={614} height={635} alt='Edukasi dan Berita' ref={orangFirstRef}
            className={`
              block sm:hidden lg:block w-[300px] lg:w-[450px] xl:w-[614px] transition duration-1000
              ${orangFirstOnScreen ? 'opacity-100 translate-x-0' : 'opacity-0 motion-safe:-translate-x-10'}
            `}
          />
          <div className='flex flex-col gap-14'>
            {/* Title */}
            <div className={`${poppins.className} w-fit max-w-[700px]`}>
              <h1 className='text-5xl font-semibold text-dark'>
                Dapatkan <span className='text-rose'>Edukasi</span> dan <span className='text-orange'>Berita</span> Seputar Disabilitas
              </h1>
            </div>

            <div className='flex gap-4'>
              <Image
                src={'/images/group-gambar-section-3.svg'}
                width={614} height={635} alt='Edukasi dan Berita' ref={orangSecondRef}
                className={`
                  hidden sm:block lg:hidden w-[300px] transition duration-1000
                  ${orangSecondOnScreen ? 'opacity-100 translate-x-0' : 'opacity-0 motion-safe:-translate-x-10'}
                `}
              />

              <div className={`${roboto.className} flex flex-col gap-6`}>
                {/* Education Info */}
                <div
                  ref={edukasiRef}
                  className={`
                    flex gap-4 items-center transition duration-1000
                    ${edukasiOnScreen ? 'opacity-100 translate-x-0' : 'opacity-0 motion-safe:translate-x-10'}
                  `}
                >
                  <Image
                    src={'/images/edukasi-icon-2.svg'}
                    width={101} height={101} alt='Edukasi'
                    className='rounded-[23px]'
                  />
                  <div>
                    <h5 className='text-2xl font-medium'>
                      Edukasi
                    </h5>
                    <p className='font-normal text-neutral-400'>
                      Very Contrary to popular belief, Lorem Ipsum is not simply random text.
                    </p>
                  </div>
                </div>

                {/* News Info */}
                <div
                  ref={beritaRef}
                  className={`
                    flex gap-4 items-center transition duration-1000
                    ${beritaOnScreen ? 'opacity-100 translate-x-0' : 'opacity-0 motion-safe:translate-x-10'}
                  `}
                >
                  <Image
                    src={'/images/berita-icon.svg'}
                    width={101} height={101} alt='Edukasi'
                    className='rounded-[23px]'
                  />
                  <div>
                    <h5 className='text-2xl font-medium'>
                      Berita
                    </h5>
                    <p className='font-normal text-neutral-400'>
                      Very Contrary to popular belief, Lorem Ipsum is not simply random text.
                    </p>
                  </div>
                </div>

                {/* Link to Education & News */}
                <Link
                  href={'/edukasi-berita'}
                  className={`
                    ${nunito.className} w-fit flex gap-[4px] mt-8 items-center py-2 px-4 rounded-full
                    bg-orange text-white shadow-md transition motion-safe:hover:-translate-y-1 hover:shadow-lg
                  `}
                >
                  <p>
                    Lihat Edukasi & Berita
                  </p>
                  <IoIosArrowDroprightCircle />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationModule