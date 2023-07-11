'use client'

import { useRouter } from 'next/navigation'
import { IoIosArrowDropleftCircle } from 'react-icons/io'

const BackButton = () => {

  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className='flex items-center gap-[4px] group w-fit text-purple'
    >
      <IoIosArrowDropleftCircle />
      <p className='font-normal group-hover:underline'>
        Kembali
      </p>
    </button>
  )
}

export default BackButton