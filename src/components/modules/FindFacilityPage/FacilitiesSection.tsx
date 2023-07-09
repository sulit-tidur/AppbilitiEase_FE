'use client'

import { poppins } from '@/utils/fonts';
import { Facility } from '@/utils/types'
import { useEffect } from 'react';
import FacilityCard from './FacilityCard';
import useFacilitiesList from '@/components/hooks/useFacilitiesList';

interface FacilitiesSectionProps {
  facilities: Facility[]
}

const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({
  facilities
}) => {
  const facilitiesList = useFacilitiesList()

  useEffect(() => {
    facilitiesList.setFacilities(facilities)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [facilities])

  return (
    <section className={`${poppins.className} flex flex-col items-center gap-8 pb-[40px] lg:pb-0 sm:px-14 md:gap-14`}>
      <div className='flex flex-col items-center w-full gap-14'>
        {facilitiesList.facilities.map((facility) => (
          <FacilityCard
            key={facility.id}
            facility={facility}
          />
        ))}
      </div>
    </section>
  )
}

export default FacilitiesSection