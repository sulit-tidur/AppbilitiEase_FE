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
    <div className='h-full bg-white p-4 pb-[40px] rounded-[14px] max-w-[480px] shadow-lg transition duration-300 hover:shadow-xl flex flex-col gap-2 relative group'>
      {/* Facility Picture */}
      <div className='rounded-[14px] overflow-hidden isolate'>
        <Image
          src={facility.image}
          width={464} height={238} alt='Fasilitas Terdekat'
          className='motion-safe:group-hover:scale-105 transition w-full aspect-[232/119] object-cover rounded-[14px]'
        />
      </div>

      {/* Location & Rating */}
      <div className='flex flex-wrap place-content-between gap-x-4'>
        <p className='text-base font-normal text-neutral-500'>
          {facility.location}
        </p>
        <Image
          src={'/images/stars.svg'}
          width={88} height={16} alt='Review Stars'
        />
      </div>

      {/* Title */}
      <h3 className='text-lg font-semibold'>
        {facility.name}
      </h3>

      <hr className='border-dashed border-[1px] border-neutral-300' />

      {/* Description */}
      <p className='text-xs font-normal break-all whitespace-pre-wrap line-clamp-3'>
        {facility.description}
      </p>

      {/* Details Button */}
      <Link
        href={`/cari-fasilitas/${facility.id}`}
        className='
          text-lg font-normal text-white bg-rose w-fit self-center py-2 px-10 rounded-full
          translate-y-1/2 absolute bottom-0 motion-safe:hover:translate-y-[40%] transition
        '
      >
        Lihat
      </Link>
    </div>
  )
}

export default FacilityCard