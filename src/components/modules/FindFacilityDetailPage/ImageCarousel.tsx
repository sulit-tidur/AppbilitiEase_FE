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
      showThumbs={false} swipeable showStatus={false} showIndicators={false} infiniteLoop autoPlay interval={5000} emulateTouch
      className=''
    >
      {images.map((image) => (
        <div key={image.id} className='relative flex justify-center'>
          <Image
            src={image.image} key={image.id}
            width={1200} height={560} alt='Gambar Artikel'
            className='aspect-[1200/560] w-full h-full object-cover'
          />
          <div className='absolute bottom-0 w-full py-2 bg-gradient-to-t from-black/60 pt-[20%]'>
            <p className='text-xs font-semibold text-white'>
              {image.name}
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default ImageCarousel