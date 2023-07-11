'use client'

import { poppins } from '@/utils/fonts'
import NewsCard from './NewsCard'
import { Article } from '@/utils/types'
import { useEffect } from 'react'
import useArticleList from '@/components/hooks/useArticleList'
import { BeatLoader } from 'react-spinners'
import useLoading from '@/components/hooks/useLoading'

interface NewsSectionProps {
  news: Article[]
}

const NewsSection: React.FC<NewsSectionProps> = ({
  news
}) => {
  const newsList = useArticleList()
  const { loadingBerita } = useLoading()

  useEffect(() => {
    newsList.setNews(news)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className={`${poppins.className} flex flex-col items-center gap-8 sm:px-14 md:gap-14`}>
      <h1 className='font-semibold text-center text-header text-dark'>
        Berita
      </h1>
      <div className='flex flex-col items-center w-full gap-6'>
        {(!newsList.news || loadingBerita) &&
          <BeatLoader color='#5842DB' size={20} />
        }
        {(!loadingBerita && newsList.news) && newsList.news.map((news, index) => (
          <NewsCard
            key={news.id}
            news={news}
            type={index % 3}
          />
        ))}
        {(!loadingBerita && newsList.news?.length) === 0 &&
          <h1 className='font-medium text-center text-subheader text-dark'>
            Berita tidak tersedia :(
          </h1>
        }
      </div>
    </section>
  )
}

export default NewsSection