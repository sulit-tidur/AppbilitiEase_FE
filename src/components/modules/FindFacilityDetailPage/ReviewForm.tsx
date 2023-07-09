'use client'

import ButtonBintang from '@/components/ButtonBintang'
import { FormEvent, useState } from 'react'

export default function ReviewForm() {
  const [description, setDescription] = useState('')
  const [rating, setRating] = useState(0)

  const submitReview = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(description, rating)
  }

  return (
    <div className='border-2 rounded-[15px] p-4 sm:p-6'>
      <form
        onSubmit={submitReview}
        className='flex flex-col gap-4 place-content-between xs:flex-row'
      >
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='text-content w-full max-w-[1024px] p-4 border-2 rounded-[12px]'
        />
        <div className='w-full max-w-[300px] flex flex-col gap-6'>
          <ButtonBintang value={rating} setValue={setRating} />
          <button
            type='submit'
            className='w-full p-4 rounded-full bg-purple'
          >
            <p className='font-medium text-center text-white text-content'>
              Kirim
            </p>
          </button>
        </div>
      </form>
    </div>
  )
}