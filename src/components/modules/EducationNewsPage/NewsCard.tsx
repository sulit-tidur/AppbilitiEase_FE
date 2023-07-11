'use client'

import { Article } from '@/utils/types'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowDroprightCircle } from 'react-icons/io'

interface NewsCardProps {
  news: Article
  type: number
}

const NewsCard: React.FC<NewsCardProps> = ({
  news, type
}) => {
  return (
    <div
      className={`
        grid grid-cols-1 md:grid-cols-2 p-4 md:p-6 lg:p-10 xl:p-16 gap-x-10 gap-y-4 hover:shadow-lg duration-300
        w-full max-w-[300px] md:max-w-[1200px] rounded-[30px] relative group
        ${type === 0 && 'bg-light-blue'}
        ${type === 1 && 'bg-violet'}
        ${type === 2 && 'bg-pink'}
      `}
    >
      {/* Image */}
      <div className='rounded-[14px] md:order-last overflow-hidden isolate '>
        <Image
          src={news.image}
          width={453} height={355} alt='Fasilkom UI'
          className='w-full h-full aspect-[453/355] object-cover rounded-[14px] transition motion-safe:group-hover:scale-105'
        />
      </div>

      {/* Content */}
      <div className='relative flex flex-col gap-4'>
        {/* Tag & Date */}
        <div className='flex items-center justify-between gap-2'>
          <div className='px-4 py-[4px] border-2 rounded-full w-fit border-dark'>
            <p className='font-medium text-content'>
              Berita
            </p>
          </div>
          <p className='text-content'>
            {new Date(news.date).toLocaleDateString('id', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        {/* Title */}
        <h1 className='font-semibold text-subheader text-dark'>
          {news.title}
        </h1>

        {/* Content */}
        <p className='w-full font-normal break-words md:mb-[60px] lg:mb-[80px] text-content line-clamp-3 lg:line-clamp-4 xl:line-clamp-6 text-neutral-600'>
          {news.content}
        </p>

        {/* Link Button */}
        <Link
          href={`/edukasi-berita/${news.id}`}
          className={`
            self-center md:absolute md:left-0 md:bottom-0 w-fit motion-safe:hover:-translate-y-1 hover:shadow-md transition
            px-4 py-2 lg:px-8 lg:py-4 rounded-full flex gap-[4px] items-center bg-white
          `}
        >
          <p className='font-normal text-content'>
            Baca Berita
          </p>
          <IoIosArrowDroprightCircle
            className={`
              ${type === 0 && 'text-blue'}
              ${type === 1 && 'text-light-purple'}
              ${type === 2 && 'text-rose'}
            `}
          />
        </Link>
      </div>
    </div>
  )
}

export default NewsCard