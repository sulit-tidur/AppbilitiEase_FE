import Image from 'next/image'
import { useMemo } from 'react'

interface LabelRatingProps {
  rating: number
}

const LabelRating: React.FC<LabelRatingProps> = ({
  rating
}) => {


  const width = useMemo(() => {
    return `${Number(rating.toFixed(1)) * 20}%`
  }, [rating])

  return (
    <div className='relative'>
      <Image
        src={'/images/bintang0.svg'}
        width={88} height={16} alt='Review Stars'
        className='w-full'
      />
      <Image
        src={'/images/bintang5.svg'}
        width={88} height={16} alt='Review Stars'
        className='absolute top-0 object-cover object-left h-full'
        style={{ width }}
      />
    </div>
  )
}

export default LabelRating