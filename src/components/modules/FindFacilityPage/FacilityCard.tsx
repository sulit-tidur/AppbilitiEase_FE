import { Facility } from '@/utils/types'
import Image from 'next/image'
import Link from 'next/link'

interface FacilityCardProps {
  facility: Facility
}

const FacilityCard: React.FC<FacilityCardProps> = ({
  facility
}) => {
  return (
    <div className='relative flex flex-col lg:flex-row w-full max-w-[1344px] lg:max-h-[420px] gap-x-10 gap-y-2 p-4 pb-[40px] lg:pb-4 border-2 rounded-[19px] bg-white shadow-xl group'>
      {/* Image */}
      <div className='rounded-[10px] overflow-hidden isolate'>
        <Image
          src={facility.image}
          width={548} height={365} alt='Gambar Fasilitas'
          className='aspect-[548/365] min-w-full h-full object-cover group-hover:scale-105 transition'
        />
      </div>

      {/* Content */}
      <div className='max-w-[685px] flex flex-col gap-2 lg:relative'>
        {/* Name & Stars */}
        <div className='flex flex-wrap place-content-between gap-x-4'>
          <h3 className='text-xl font-semibold'>
            {facility.name}
          </h3>
          <div className='flex items-center gap-2'>
            <Image
              src={'/images/stars.svg'}
              width={88} height={16} alt='Review Stars'
            />
            <p className='text-sm'>
              4/5
            </p>
          </div>
        </div>

        {/* Location */}
        <p className='font-normal text-neutral-500'>
          {facility.location}
        </p>

        <hr className='border-dashed border-[1px] border-neutral-300' />

        {/* Description */}
        <p className='font-normal break-words whitespace-pre-wrap text-content-sm line-clamp-3 lg:line-clamp-4 xl:line-clamp-6'>
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