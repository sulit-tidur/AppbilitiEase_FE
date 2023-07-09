import { poppins } from '@/utils/fonts'
import NewsCard from './NewsCard'
import { Article } from '@/utils/types'

interface NewsSectionProps {
  news: Article[]
}

const NewsSection: React.FC<NewsSectionProps> = ({
  news
}) => {
  return (
    <section className={`${poppins.className} flex flex-col items-center gap-8 sm:px-14 md:gap-14`}>
      <h1 className='text-5xl font-semibold text-center text-dark'>
        Berita
      </h1>
      <div className='flex flex-col items-center w-full gap-6'>
        {news.map((news, index) => (
          <NewsCard
            key={news.id}
            news={news}
            type={index % 3}
          />
        ))}
      </div>
    </section>
  )
}

export default NewsSection