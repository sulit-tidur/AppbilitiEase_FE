'use client'

import { poppins } from '@/utils/fonts'
import FacilityCard from './FacilityCard'
import { useEffect, useRef } from 'react'
import { useElementOnScreen } from '@/components/hooks/useElementOnScreen'
import useLandingRef from '@/components/hooks/useLandingRef'
import { Facility } from '@/utils/types'

interface NearestFacilityModuleProps {
  facilities: Facility[]
}

const NearestFacilityModule: React.FC<NearestFacilityModuleProps> = ({
  facilities
}) => {
  const landingPageRef = useLandingRef()
  const nearestFacilityRef = useRef<HTMLElement>(null)

  useEffect(() => {
    landingPageRef.setNearestFacilityRef(nearestFacilityRef)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nearestFacilityRef])

  const first = useRef(null)
  const firstOnScreen = useElementOnScreen({ ref: first })
  const second = useRef(null)
  const secondOnScreen = useElementOnScreen({ ref: second })
  const third = useRef(null)
  const thirdOnScreen = useElementOnScreen({ ref: third })

  return (
    <section ref={nearestFacilityRef} className={`${poppins.className} bg-[url(/images/bg/bg-fasilitas.svg)] bg-center bg-cover bg-no-repeat h-fit flex`}>
      <div className='container mx-auto p-4 md:max-w-[calc(100%-100px)] mb-20 mt-[430px] xxs:mt-[330px] md:mt-[220px] xl:mt-[170px]'>
        <div className='flex flex-col items-center gap-12'>
          {/* Header */}
          <div className='flex flex-col items-center gap-2 text-center'>
            <h1 className='text-5xl font-semibold text-dark'>
              <span className='text-purple'>Fasilitas</span> Terdekat
            </h1>
            <p className='text-xl font-medium text-neutral-400'>
              Temukan Fasilitas Ramah Disabilitas yang Tersedia</p>
          </div>

          {/* Facilities */}
          {facilities.length === 0 && (
            <p className='text-2xl font-medium text-center text-neutral-600'>
              Oops, nampaknya tidak ada fasilitas yang terdaftar saat ini :(
            </p>
          )}
          <div className='flex flex-col md:flex-row gap-x-6 gap-y-14'>
            {facilities[0] &&
              <div
                ref={first}
                className={`transition duration-1000 ${firstOnScreen ? 'opacity-100 translate-x-0' : 'opacity-0 motion-safe:translate-x-10'}`}
              >
                <FacilityCard facility={facilities[0]} />
              </div>
            }
            {facilities[1] &&
              <div
                ref={second}
                className={`transition delay-100 duration-1000 ${secondOnScreen ? 'opacity-100 translate-x-0' : 'opacity-0 motion-safe:translate-x-10'}`}
              >
                <FacilityCard facility={facilities[1]} />
              </div>
            }
            {facilities[2] &&
              <div
                ref={third}
                className={`transition delay-200 duration-1000 ${thirdOnScreen ? 'opacity-100 translate-x-0' : 'opacity-0 motion-safe:translate-x-10'}`}
              >
                <FacilityCard facility={facilities[2]} />
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default NearestFacilityModule