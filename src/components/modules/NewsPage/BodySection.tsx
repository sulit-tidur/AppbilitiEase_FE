import { News } from '@/utils/types'
import Image from 'next/image'

interface BodySectionProps {
  news: News
}

const BodySection: React.FC<BodySectionProps> = ({
  news
}) => {
  return (
    <section className='container flex flex-col px-4 mx-auto md:px-20 pb-14'>
      <div className='-translate-y-[10vh] flex flex-col gap-20'>
        <Image
          src={news.image}
          width={1200} height={560} alt='Gambar Berita'
          className='aspect-[1200/560] w-full object-cover rounded-[20px]'
        />
        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quod quae et! Repellat quidem sequi accusamus odit sit quisquam magnam in beatae vero aperiam corrupti aliquam est, maiores dolorem illum!
        </p>
      </div>
    </section>
  )
}

export default BodySection