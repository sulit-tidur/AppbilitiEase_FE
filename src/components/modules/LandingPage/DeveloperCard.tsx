import { poppins } from '@/utils/fonts'
import { Developer } from '@/utils/types'
import Image from 'next/image'

interface DeveloperCardProps {
  developer: Developer
}

const DeveloperCard: React.FC<DeveloperCardProps> = ({
  developer
}) => {
  return (
    <div className={`${poppins.className} bg-white p-4 shadow-lg transition duration-300 hover:shadow-xl rounded-[14px] max-w-[380px] flex flex-col gap-4 group`}>
      {/* Facility Picture */}
      <div className='rounded-[14px] overflow-hidden isolate'>
        <Image
          src={developer.image}
          width={464} height={280} alt='Developer'
          className='transition motion-safe:group-hover:scale-105 w-full aspect-[58/35] object-cover rounded-[14px]'
        />
      </div>

      {/* Name & Education */}
      <div className='flex flex-col gap-[4px]'>
        <h3 className='text-xl font-medium'>
          {developer.name}
        </h3>
        <p className='text-sm font-normal text-neutral-500'>
          {developer.education}
        </p>
      </div>

      {/* Description */}
      <p className='text-base font-light text-neutral-400'>
        {developer.description}
      </p>

      <div className='flex items-center place-content-between'>
        {/* Role */}
        <p className='font-medium text-rose'>
          {developer.role}
        </p>

        {/* Social Medias */}
        <div className='flex gap-[1px] items-center'>
          <a href={developer.instagram} target='_blank' rel='noreferrer'>
            <Image
              src={'/images/instagram.svg'}
              width={30} height={30} alt='Instagram'
            />
          </a>
          <a href={developer.linkedin} target='_blank' rel='noreferrer'>
            <Image
              src={'/images/linkedin.svg'}
              width={30} height={30} alt='Linkedin'
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default DeveloperCard