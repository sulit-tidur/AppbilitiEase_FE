import { nunito } from "@/utils/fonts"
import Image from "next/image"

const HeroModule = () => {
  return (
    <section className={`${nunito.className} bg-[url(/images/bg/bg-edukasi-berita.svg)] bg-center bg-cover bg-no-repeat h-fit flex`}>
      <div className="mt-[88px] md:mt-[93px] relative flex w-full justify-center">
        <Image
          src={'/images/bg/circle-edukasi-berita.svg'}
          width={666} height={666} alt="Edukasi & Berita"
        />
          <p className="absolute bottom-0 text-2xl xxs:text-3xl xs:text-5xl sm:text-[60px] md:text-[65px] lg:text-[70px] font-extrabold text-dark -translate-y-[150%]">
            Edukasi & Berita
          </p>
      </div>
    </section>
  )
}

export default HeroModule