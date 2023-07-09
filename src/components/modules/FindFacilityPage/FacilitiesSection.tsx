'use client'

import { poppins } from '@/utils/fonts';
import { Facility } from '@/utils/types'
import { useEffect, useState } from 'react';
import FacilityCard from './FacilityCard';

interface FacilitiesSectionProps {
  facilities: Facility[]
}

const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({
  facilities
}) => {
  const [facilitiesState, setFacilitiesState] = useState<Facility[]>([])

  useEffect(() => {
    setFacilitiesState(facilities)
  }, [facilities])

  return (
    <section className={`${poppins.className} flex flex-col items-center gap-8 pb-[40px] sm:px-14 md:gap-14`}>
      <div className='flex flex-col items-center w-full gap-14'>
        {facilitiesState.map((facility) => (
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