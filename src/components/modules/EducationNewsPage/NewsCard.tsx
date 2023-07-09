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
        flex flex-col md:flex-row-reverse p-4 md:p-6 lg:p-10 xl:p-16 gap-x-10 gap-y-4 hover:shadow-lg duration-300
        w-full max-w-[300px] md:max-w-[1200px] rounded-[30px] relative group
        ${type === 0 && 'bg-light-blue'}
        ${type === 1 && 'bg-violet'}
        ${type === 2 && 'bg-pink'}
      `}
    >
      <div className='flex-1 rounded-[14px] overflow-hidden isolate w-full'>
        <Image
          src={news.image}
          width={453} height={355} alt='Fasilkom UI'
          className='w-full aspect-[453/355] object-cover rounded-[14px] transition motion-safe:group-hover:scale-105'
        />
      </div>
      <div className='relative flex flex-col flex-1 gap-4'>
        <h1 className='font-semibold text-subheader text-dark'>
          {news.title}
        </h1>
        <p className='w-full font-normal break-words text-content line-clamp-3 text-neutral-600'>
          {news.content}
        </p>
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