import { Facility } from '@/utils/types'
import Image from 'next/image'
import FindFacilitySection from './FindFacilitySection'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import SectionHeader from './SectionHeader'
import ReviewCard from './ReviewCard'

interface BodySectionProps {
  facility: Facility
}

const BodySection: React.FC<BodySectionProps> = ({
  facility
}) => {
  return (
    <section className='container flex flex-col px-4 mx-auto pb-14'>
      <div className='-translate-y-[10vh] flex flex-col gap-4 md:gap-14'>
        {/* Image & Location */}
        <FindFacilitySection>
          <Image
            src={facility.image}
            width={1200} height={560} alt='Gambar Artikel'
            className='aspect-[1200/560] w-full object-cover rounded-[20px]'
          />
          <div className='flex items-center gap-2 text-neutral-400'>
            <HiOutlineLocationMarker size={27} />
            <p className='text-xl font-medium'>
              {facility.location}
            </p>
          </div>
        </FindFacilitySection>

        <hr />

        {/* Description */}
        <FindFacilitySection>
          <SectionHeader value='Deskripsi Tempat' />
          <p className='text-lg font-normal break-all whitespace-pre-wrap md:text-2xl text-neutral-800'>
            {facility.description}
          </p>
        </FindFacilitySection>

        <hr />

        {/* Location */}
        <FindFacilitySection>
          <SectionHeader value='Lokasi' />

        </FindFacilitySection>

        <hr />

        {/* Reviews */}
        <FindFacilitySection>
          <SectionHeader value='Ulasan' />
          <div className='flex flex-col gap-6 mt-4 md:mt-8'>
            {facility.review.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </FindFacilitySection>
      </div>
    </section>
  )
}

export default BodySection