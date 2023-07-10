'use client'

import { FacilityImages } from '@/utils/types'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

interface ImageCarouselProps {
  images: FacilityImages[]
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images
}) => {
  return (
    <Carousel
      showArrows swipeable showStatus={false} infiniteLoop autoPlay interval={5000}
    >
      {images.map((image) => (
        <Image
          src={image.image} key={image.id}
          width={1200} height={560} alt='Gambar Artikel'
          className='aspect-[1200/560] rounded-[20px] w-full h-full object-cover'
        />
      ))}
    </Carousel>
  )
}

export default ImageCarousel