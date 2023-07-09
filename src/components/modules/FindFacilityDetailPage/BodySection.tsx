import { Facility } from '@/utils/types'
import Image from 'next/image'
import FindFacilitySection from './FindFacilitySection'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import ReviewCard from './ReviewCard'
import FacilityMap from './FacilitiyMap'

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
            <p className='font-medium text-content'>
              {facility.location}
            </p>
          </div>
        </FindFacilitySection>

        <hr />

        {/* Description */}
        <FindFacilitySection>
          <h1 className='font-semibold text-header text-dark'>
            Deskripsi Tempat
          </h1>
          <p className='font-normal break-words whitespace-pre-wrap text-content text-neutral-800'>
            {facility.description}
          </p>
        </FindFacilitySection>

        <hr />

        {/* Location */}
        <FindFacilitySection>
          <h1 className='font-semibold text-header text-dark'>
            Lokasi
          </h1>
          <FacilityMap position={[Number(facility.latitude), Number(facility.longitude)]} />
        </FindFacilitySection>

        <hr />

        {/* Reviews */}
        <FindFacilitySection>
          <h1 className='font-semibold text-header text-dark'>
            Ulasan
          </h1>
          {facility.review.length === 0 ? (

            <p className='font-normal text-content text-neutral-600'>
              Fasilitas ini belum memiliki ulasan. Jadilah yang pertama :D
            </p>

          ) : (

            <div className='flex flex-col gap-6 mt-4 md:mt-8'>
              {facility.review.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          )}
        </FindFacilitySection>
      </div>
    </section>
  )
}

export default BodySection