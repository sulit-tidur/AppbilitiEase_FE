import { Article } from '@/utils/types'
import Image from 'next/image'

interface BodySectionProps {
  article: Article
}

const BodySection: React.FC<BodySectionProps> = ({
  article
}) => {
  return (
    <section className='container flex flex-col px-4 mx-auto md:px-20 pb-14'>
      <div className='-translate-y-[10vh] flex flex-col gap-20'>
        {article.tag === 'education' &&
          <Image
            src={article.image}
            width={1200} height={560} alt='Gambar Artikel'
            className='aspect-[1200/800] md:aspect-[1200/560] w-full object-contain rounded-[20px] bg-white border-2'
          />
        }
        {article.tag === 'news' &&
          <Image
            src={article.image}
            width={1200} height={560} alt='Gambar Artikel'
            className='aspect-[1200/800] md:aspect-[1200/560] w-full object-cover rounded-[20px]'
          />
        }
        <p className='font-normal break-words whitespace-pre-wrap text-content text-neutral-600'>
          {article.content}
        </p>
      </div>
    </section>
  )
}

export default BodySection