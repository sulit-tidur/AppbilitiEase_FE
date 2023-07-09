import { Article } from '@/utils/types'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowDroprightCircle } from 'react-icons/io'

interface EducationCardProps {
  education: Article
  type: number
}

const EducationCard: React.FC<EducationCardProps> = ({
  education, type
}) => {
  return (
    <div
      className={`
        flex flex-col p-4 pb-[40px] gap-2 hover:shadow-lg duration-300
        max-w-[500px] rounded-[30px] relative group
        ${type === 0 && 'bg-violet'}
        ${type === 1 && 'bg-light-yellow'}
        ${type === 2 && 'bg-pink'}
      `}
    >
      <div className='rounded-[14px] overflow-hidden isolate w-[175px] md:w-[250px] xl:w-[438px]'>
        <Image
          src={education.image}
          width={438} height={355} alt='Fasilkom UI'
          className='w-full aspect-[438/355] object-cover rounded-[14px] transition motion-safe:group-hover:scale-105'
        />
      </div>
      <p className='w-full font-normal break-all text-content text-dark line-clamp-3'>
        {education.content}
      </p>
      <Link
        href={`/edukasi-berita/${education.id}`}
        className={`
          absolute bottom-0 translate-y-1/2 motion-safe:hover:translate-y-[40%] transition
          px-10 py-2 text-content text-white self-center rounded-full flex gap-[4px] items-center
          ${type === 0 && 'bg-light-purple'}
          ${type === 1 && 'bg-orange'}
          ${type === 2 && 'bg-rose'}
        `}
      >
        <p>
          Baca
        </p>
        <IoIosArrowDroprightCircle />
      </Link>
    </div>
  )
}

export default EducationCard