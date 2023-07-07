'use client'

import { News } from "@/utils/types"
import Image from "next/image"
import Link from "next/link"
import { IoIosArrowDroprightCircle } from "react-icons/io"

interface NewsCardProps {
  news: News
  type: number
}

const NewsCard: React.FC<NewsCardProps> = ({
  news, type
}) => {
  return (
    <div
      className={`
        flex flex-col md:flex-row-reverse p-4 md:p-6 lg:p-10 xl:p-16 gap-x-10 gap-y-4 hover:shadow-lg duration-300
        max-w-[300px] md:max-w-[1200px] rounded-[30px] relative group
        ${type === 0 && 'bg-light-blue'}
        ${type === 1 && 'bg-violet'}
        ${type === 2 && 'bg-pink'}
      `}
    >
      <div className="flex-1 rounded-[14px] overflow-hidden isolate w-full">
        <Image
          src={news.image}
          width={453} height={355} alt="Fasilkom UI"
          className="w-full aspect-[453/355] object-cover rounded-[14px] transition motion-safe:group-hover:scale-105"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <p>
          {new Date(news.date).toLocaleDateString('id', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
        <h1 className="font-semibold text-2xl text-dark">
          {news.title}
        </h1>
        <p className="font-normal w-full text-lg line-clamp-3 text-neutral-600">
          {news.content}
        </p>
        <Link
          href={news.href}
          className={`
          self-center md:self-start w-fit motion-safe:hover:-translate-y-1 hover:shadow-md transition
          px-4 py-2 lg:px-8 lg:py-4 rounded-full flex gap-[4px] items-center bg-white
        `}
        >
          <p className="font-normal text-lg">
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