import { Facility } from '@/utils/types'
import Image from 'next/image'
import Link from 'next/link'
import LabelRating from '../FindFacilityDetailPage/LabelRating'

interface FacilityCardProps {
  facility: Facility
}

const FacilityCard: React.FC<FacilityCardProps> = ({
  facility
}) => {
  return (
    <div className='grid grid-cols-1 h-full bg-white p-4 rounded-[14px] max-w-[480px] shadow-lg transition duration-300 hover:shadow-xl gap-2 relative group'>
      {/* Facility Picture */}
      <div className='rounded-[14px] aspect-[464/238] overflow-hidden isolate'>
        <Image
          src={facility.images[0].image}
          width={464} height={238} alt='Fasilitas Terdekat'
          className='motion-safe:group-hover:scale-105 transition w-full h-full aspect-[232/119] object-cover rounded-[14px]'
        />
      </div>

      {/* Location & Rating */}
      <div className='flex flex-wrap place-content-between gap-x-4'>
        <p className='text-base font-normal text-neutral-500'>
          {facility.location}
        </p>
        <div className='w-[88px]'>
          <LabelRating rating={facility.rating} />
        </div>
      </div>

      {/* Title */}
      <h3 className='font-semibold text-content'>
        {facility.name}
      </h3>

      <hr className='border-dashed border-[1px] border-neutral-300' />

      <div className='flex flex-col'>

        {/* Description */}
        <p className='mb-4 font-normal break-words whitespace-pre-wrap text-content-sm line-clamp-3'>
          {facility.description}
        </p>

        {/* Details Button */}
        <Link
          href={`/cari-fasilitas/${facility.id}`}
          className='
            self-center text-lg font-normal text-white bg-rose w-fit py-2 px-10 rounded-full
            translate-y-1/2 absolute bottom-0 motion-safe:hover:translate-y-[40%] transition
          '
        >
          Lihat
        </Link>
      </div>
    </div>
  )
}

export default FacilityCard