'use client'

import { useElementOnScreen } from "@/components/hooks/useElementOnScreen"
import { poppins } from "@/utils/fonts"
import Image from "next/image"
import { useRef } from "react"

const LoginModule = () => {

  const ref = useRef(null)
  const isOnScreen = useElementOnScreen({ ref })

  return (
    <section className={`${poppins.className} bg-[url(/images/bg/bg-login.svg)] bg-center bg-cover bg-no-repeat h-fit min-h-screen flex`}>
      <div className="container justify-center mx-auto px-4 md:max-w-[calc(100%-100px)] py-16 flex mt-[50px] md:mt-[88px]">
        <div className="flex items-center justify-center flex-col-reverse md:flex-row gap-x-14 lg:gap-x-20 xl:gap-x-40 gap-y-14">
          <Image
            src={'/images/group-login.svg'}
            width={733} height={636} alt="Login" ref={ref}
            className={`
              w-[300px] lg:w-[450px] xl:w-[600px] 2xl:w-[733px] transition duration-1000
              ${isOnScreen ? 'opacity-100 translate-x-0' : 'opacity-0 motion-safe:-translate-x-10'}
            `}
          />
          <div className="bg-white px-4 py-10 lg:px-10 lg:py-16 rounded-xl shadow-md flex flex-col gap-8 xl:gap-14">
            <h1 className="font-semibold text-3xl text-dark text-center">
              Masuk ke AppbilitiEase
            </h1>
            <p className="text-sm font-normal text-center">
              Berikan <span className="text-rose">ulasan</span> dan <span className="text-orange">penilaian</span> terhadap fasilitas yang pernah kamu kunjungi!
            </p>
            <button

              className="
                bg-light-blue py-[12px] px-[9px] flex items-center gap-2 justify-center rounded-[12px]
                transition motion-safe:hover:-translate-y-1 hover:shadow-md
              "
            >
              <Image
                src={'/images/google.svg'}
                width={32} height={32} alt="Google"
              />
              <p>
                Masuk dengan Google
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginModule