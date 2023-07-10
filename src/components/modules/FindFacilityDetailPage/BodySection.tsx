import { Facility } from '@/utils/types'
import Image from 'next/image'
import FindFacilitySection from './FindFacilitySection'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import ReviewCard from './ReviewCard'
import FacilityMap from './FacilitiyMap'
import ReviewForm from './ReviewForm'
import useAuth from '@/components/hooks/useAuth'
import LabelRating from './LabelRating'
import ImageCarousel from './ImageCarousel'

interface BodySectionProps {
  facility: Facility
}

const BodySection: React.FC<BodySectionProps> = async ({
  facility
}) => {

  const auth = await useAuth()

  return (
    <section className='container flex flex-col px-4 mx-auto pb-14'>
      <div className='-translate-y-[10vh] flex flex-col gap-4 md:gap-14'>
        {/* Image & Location */}
        <FindFacilitySection>
          <div className='rounded-[20px] overflow-hidden isolate'>
            <ImageCarousel images={facility.images} />
          </div>
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

        {/* Description */}
        <FindFacilitySection>
          <h1 className='font-semibold text-header text-dark'>
            Fasilitas yang Disediakan
          </h1>
          <p className='font-normal break-words whitespace-pre-wrap text-content text-neutral-800'>
            {facility.disability_support.map((support, index) => (
              <li key={index} className=''>
                {support}
              </li>
            ))}
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
          <div className='flex items-center place-content-between'>
            <h1 className='font-semibold text-header text-dark'>
              Ulasan
            </h1>
            <div className='flex items-center gap-2 md:gap-4'>
              <div className='w-[25px] xs:hidden aspect-square'>
                <Image src={'/images/bintang.svg'} width={25} height={25} alt='Bintang' className='w-full' />
              </div>
              <div className='hidden xs:block w-[150px] md:w-[200px] aspect-[88/16]'>
                <LabelRating rating={facility.rating} />
              </div>
              <p className='font-normal text-subheader'>
                {Number(facility.rating.toFixed(1))}/5
              </p>
            </div>
          </div>

          <ReviewForm auth={auth} id={facility.id} />

          {facility.review.length === 0 ? (

            <p className='font-normal text-center text-subheader mt-14 text-neutral-600'>
              Fasilitas ini belum memiliki ulasan.<br />Ayo, jadi yang pertama! :D
            </p>

          ) : (

            <div className='flex flex-col gap-6 mt-4 md:mt-8'>
              {facility.review.sort((a, b) => b.id - a.id).map((review) => (
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