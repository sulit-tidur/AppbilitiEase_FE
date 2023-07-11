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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Carousel
      showThumbs swipeable showStatus={false} showIndicators={false} infiniteLoop autoPlay interval={5000} emulateTouch
      className=''
    >
      {images.map((image) => (
        <div key={image.id}>
          <Image
            src={image.image} key={image.id}
            width={1200} height={560} alt='Gambar Artikel'
            className='aspect-[1200/560] rounded-[20px] w-full h-full object-cover'
          />
          <div className='w-full p-2 bg-white'>
            <p className='text-xs '>
              {image.name}
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default ImageCarousel