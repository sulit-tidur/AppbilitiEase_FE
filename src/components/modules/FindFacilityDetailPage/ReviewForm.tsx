'use client'

import ButtonBintang from '@/components/ButtonBintang'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { toast } from 'react-hot-toast'

interface ReviewFormProps {
  session: any
  id: number
}

const ReviewForm: React.FC<ReviewFormProps> = ({
  session, id
}) => {

  const [description, setDescription] = useState('')
  const [rating, setRating] = useState(1)
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const submitReview = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    if (!session) {
      return
    }

    const { access_token } = session

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_BE_URL}/api/facility/review`,
        {
          description,
          rating,
          facility: id
        }, {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      })
      console.log(res)
      if (res.status !== 201) {
        throw new Error()
      }

      toast.success('Ulasan telah dikirimkan. Terima kasih!')
      router.refresh()

    } catch (err) {
      toast.error('Terjadi kesalahan. Coba beberapa saat lagi.')
    }

    setLoading(false)
  }

  return (
    <div className='border-2 rounded-[15px] p-4 sm:p-6'>
      <form
        onSubmit={submitReview}
        className='flex flex-col gap-4 place-content-between md:flex-row'
      >
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='text-content w-full max-w-[1024px] p-4 border-2 rounded-[12px]'
        />
        <div className='w-full md:max-w-[300px] flex flex-col gap-6'>
          <ButtonBintang value={rating} setValue={setRating} />
          {session &&
            <button
              type='submit'
              className='w-full p-4 transition rounded-full bg-purple hover:shadow-lg motion-safe:hover:-translate-y-1'
            >
              <p className='font-medium text-center text-white text-content'>
                Kirim
              </p>
            </button>
          }
          {!session &&
            <Link
              href={`/login?callbackUrl=${pathname}`}
              className='flex items-center justify-center w-full gap-2 p-4 transition rounded-full bg-light-blue hover:shadow-lg motion-safe:hover:-translate-y-1'
            >
              <Image
                src={'/images/google.svg'}
                width={32} height={32} alt='Google'
              />
              <p className='font-medium text-center'>
                Masuk terlebih dahulu
              </p>
            </Link>
          }
        </div>
      </form>
    </div>
  )
}

export default ReviewForm