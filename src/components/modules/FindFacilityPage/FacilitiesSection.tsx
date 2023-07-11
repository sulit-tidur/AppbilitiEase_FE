'use client'

import { poppins } from '@/utils/fonts'
import { Facility } from '@/utils/types'
import { useEffect } from 'react'
import FacilityCard from './FacilityCard'
import useFacilitiesList from '@/components/hooks/useFacilitiesList'
import { BeatLoader } from 'react-spinners'
import useLoading from '@/components/hooks/useLoading'

interface FacilitiesSectionProps {
  facilities: Facility[]
}

const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({
  facilities
}) => {
  const facilitiesList = useFacilitiesList()
  const { loadingFasilitas } = useLoading()

  useEffect(() => {
    facilitiesList.setFacilities(facilities)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [facilities])

  return (
    <section className={`${poppins.className} flex flex-col items-center gap-8 pb-[40px] lg:pb-0 sm:px-14 md:gap-14`}>
      <div className='flex flex-col items-center w-full gap-14'>
        {(!facilitiesList.facilities || loadingFasilitas) &&
          <div className='flex justify-center w-full'>
            <BeatLoader color='#5842DB' size={20} />
          </div>
        }
        {(!loadingFasilitas && facilitiesList.facilities) && facilitiesList.facilities.map((facility) => (
          <FacilityCard
            key={facility.id}
            facility={facility}
          />
        ))}
        {(!loadingFasilitas && facilitiesList.facilities?.length) === 0 &&
          <h1 className='font-medium text-subheader text-dark'>
            Fasilitas tidak tersedia :(
          </h1>
        }
      </div>
    </section >
  )
}

export default FacilitiesSection