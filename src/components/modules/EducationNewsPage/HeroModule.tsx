'use client'

import { useElementOnScreen } from "@/components/hooks/useElementOnScreen"
import { nunito } from "@/utils/fonts"
import Image from "next/image"
import { useRef } from "react"

const HeroModule = () => {

  const titleRef = useRef(null)
  const titleOnScreen = useElementOnScreen({ ref: titleRef })

  return (
    <section className={`${nunito.className} bg-[url(/images/bg/bg-edukasi-berita.svg)] bg-center bg-cover bg-no-repeat h-fit max-h-screen flex`}>
      <div className="mt-[88px] md:mt-[93px] relative flex w-full justify-center overflow-hidden">
        <Image
          src={'/images/bg/circle-edukasi-berita.svg'}
          width={666} height={666} alt="Edukasi & Berita" ref={titleRef}
          className={`
            transition duration-1000
            ${titleOnScreen ? 'translate-y-0' : 'motion-safe:translate-y-full'}
          `}
        />
        <p
          className={`
            absolute bottom-0 text-2xl xxs:text-3xl xs:text-5xl sm:text-[60px] md:text-[65px] lg:text-[70px] font-extrabold text-dark
            transition duration-1000 motion-safe:delay-300 -translate-y-[150%]
            ${titleOnScreen ? 'opacity-100 -translate-y-[150%]' : 'opacity-0 motion-safe:translate-y-full'}
          `}
        >
          Edukasi & Berita
        </p>
      </div>
    </section>
  )
}

export default HeroModule