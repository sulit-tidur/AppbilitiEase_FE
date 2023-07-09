import { Review } from '@/utils/types'
import Image from 'next/image'

interface ReviewCardProps {
  review: Review
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  review
}) => {
  return (
    <div className='flex flex-col gap-2 border-2 rounded-[15px] p-4 sm:p-6 xs:flex-row'>
      <div className='flex items-center gap-2 xs:items-start'>
        <div className='w-[60px] h-[60px]'>
          <Image
            src={review.image || '/images/placeholder.jpg'}
            width={60} height={60} alt='Avatar'
            className='aspect-[1/1] border-2 rounded-full w-full'
          />
        </div>
        <h3 className='text-xl font-medium xs:hidden'>
          {review.user}
        </h3>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <h3 className='hidden text-xl font-medium text-dark xs:block'>
            {review.user}
          </h3>
          <Image
            src={'/images/stars.svg'}
            width={88} height={16} alt='Review Stars'
          />
        </div>
        <p className='text-xl font-normal break-words whitespace-pre-wrap'>
          {review.description}
        </p>
      </div>
    </div>
  )
}

export default ReviewCard