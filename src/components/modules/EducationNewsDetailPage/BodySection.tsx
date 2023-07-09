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
        <Image
          src={article.image}
          width={1200} height={560} alt='Gambar Artikel'
          className='aspect-[1200/560] w-full object-cover rounded-[20px]'
        />
        <p className='text-xl font-normal break-all whitespace-pre-wrap text-neutral-600'>
          {article.content}
        </p>
      </div>
    </section>
  )
}

export default BodySection