'use client'

import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

interface ButtonBintangProps {
  value: number
  setValue: Dispatch<SetStateAction<number>>
}

const ButtonBintang: React.FC<ButtonBintangProps> = ({
  value, setValue
}) => {

  return (
    <div className='flex gap-[4px] place-content-around w-full aspect-[216/40]'>
      <button type='button' onClick={() => setValue(1)}>
        <Image src={'/images/bintang.svg'} width={40} height={40} alt='bintang' />
      </button>

      <button
        type='button'
        onClick={() => setValue(2)}
        className={`${value < 2 && 'opacity-50'}`}
      >
        <Image src={'/images/bintang.svg'} width={40} height={40} alt='bintang' />
      </button>

      <button
        type='button'
        onClick={() => setValue(3)}
        className={`${value < 3 && 'opacity-50'}`}
      >
        <Image src={'/images/bintang.svg'} width={40} height={40} alt='bintang' />
      </button>

      <button
        type='button'
        onClick={() => setValue(4)}
        className={`${value < 4 && 'opacity-50'}`}
      >
        <Image src={'/images/bintang.svg'} width={40} height={40} alt='bintang' />
      </button>

      <button
        type='button'
        onClick={() => setValue(5)}
        className={`${value < 5 && 'opacity-50'}`}
      >
        <Image src={'/images/bintang.svg'} width={40} height={40} alt='bintang' />
      </button>
    </div>
  )
}

export default ButtonBintang