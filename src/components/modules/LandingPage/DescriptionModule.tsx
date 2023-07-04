'use client'

import { useElementOnScreen } from "@/components/hooks/useElementOnScreen"
import { poppins } from "@/utils/fonts"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { PiMagnifyingGlassBold } from "react-icons/pi"

const DescriptionModule = () => {
  const bubleRef = useRef(null)
  const orangRef = useRef(null)
  const bubleOnScreen = useElementOnScreen({ ref: bubleRef })
  const orangOnScreen = useElementOnScreen({ ref: orangRef })

  return (
    <section className={`${poppins.className} bg-[url(/images/bg/bg-deskripsi.svg)] bg-center bg-cover bg-no-repeat overflow-hidden`}>
      <div className="container mx-auto p-4 my-[150px] xl:my-[90px] relative flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-center">
        <div className="relative max-w-[500px] flex flex-col gap-14">
          <Image
            src={'/images/buble.svg'}
            width={50} height={50} alt="buble" ref={bubleRef}
            className={`
              absolute -translate-y-16 transition duration-1000
              ${bubleOnScreen ? 'opacity-100 -translate-x-0 sm:-translate-x-10' : 'opacity-0 -translate-x-10 sm:-translate-x-20'}
            `}
          />
          <h1 className='font-bold text-5xl text-dark capitalize'>
            Apa ya Kalimat yang bagus <span className="text-purple">Buat ini</span>
          </h1>
          <p>
            AppbilitiEase merupakan aplikasi yang bertujuan untuk Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..
          </p>
          <Link
            href={'/cari-fasilitas'}
            className="flex place-content-between items-center bg-white rounded-full p-2 shadow-lg transition hover:shadow-xl hover:-translate-y-1"
          >
            <div className="flex items-center gap-2 p-4">
              <PiMagnifyingGlassBold size={15} />
              <p className="font-medium text-sm">
                Cari fasilitas terdekat...
              </p>
            </div>
            <div className="hidden sm:block bg-purple p-4 rounded-full w-[134px]">
              <p className="text-white text-center font-medium">
                Cari
              </p>
            </div>
          </Link>
        </div>
        <Image
          src={'/images/Group-Gambar-Section-1.svg'}
          width={700} height={586.94} alt="Orang bermain laptop" ref={orangRef}
          className={`
            transition duration-1000 w-[300px] lg:w-[500px] xl:w-[700px]
            ${orangOnScreen ? 'opacity-100 translate-x-[30px]' : 'opacity-0 translate-x-[70px]'}
          `}
        />
      </div>
    </section>
  )
}

export default DescriptionModule