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
    <div className='relative grid grid-cols-1 lg:grid-cols-2 w-full max-w-[1344px] gap-x-10 gap-y-2 p-4 border-2 rounded-[19px] bg-white shadow-xl group'>
      {/* Image */}
      <div className='rounded-[10px] overflow-hidden isolate'>
        <Image
          src={facility.images[0].image}
          width={548} height={365} alt='Gambar Fasilitas'
          className='aspect-[548/365] w-full h-full object-cover group-hover:scale-105 transition'
        />
      </div>

      {/* Content */}
      <div className='flex flex-col gap-2 lg:relative'>
        {/* Name & Stars */}
        <div className='flex flex-wrap place-content-between gap-x-4'>
          <h3 className='text-xl font-semibold'>
            {facility.name}
          </h3>
          <div className='flex items-center gap-2'>
            <div className='w-[88px]'>
              <LabelRating rating={facility.rating} />
            </div>
            <p className='text-sm'>
              {Number(facility.rating.toFixed(1))}/5
            </p>
          </div>
        </div>

        {/* Location */}
        <p className='font-normal text-neutral-500'>
          {facility.location}
        </p>

        <hr className='border-dashed border-[1px] border-neutral-300' />

        {/* Description */}
        <p className='mb-4 font-normal break-words whitespace-pre-wrap text-content-sm line-clamp-3 lg:line-clamp-4 xl:line-clamp-6'>
          {facility.description}
        </p>

        {/* Details Button */}
        <Link
          href={`/cari-fasilitas/${facility.id}`}
          className='absolute bottom-0 self-center px-10 py-2 text-lg font-normal text-white transition rounded-full lg:right-0 mt-14 bg-rose w-fit lg:hover:shadow-md translate-y-[50%] lg:translate-y-0 motion-safe:hover:translate-y-[40%] lg:motion-safe:hover:-translate-y-1'
        >
          Lihat
        </Link>
      </div>
    </div>
  )
}

export default FacilityCard