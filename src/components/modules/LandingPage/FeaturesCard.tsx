import { roboto } from "@/utils/fonts"
import Image from "next/image"

const FeaturesCard = () => {
  return (
    <div className={`${roboto.className} bg-dark w-[95%] max-w-[1536px] self-center p-10 rounded-[14px] flex flex-col md:flex-row justify-center place-content-center gap-6 xl:gap-6`}>
      {/* Cari Fasilitas */}
      <div className="flex flex-col xxs:flex-row md:flex-col xl:flex-row items-center gap-4 group">
        <Image
          src={'/images/cari-fasilitas-icon.svg'}
          width={101} height={101} alt="Cari Fasilitas"
          className="motion-safe:group-hover:-translate-y-1 transition rounded-[23px]"
        />
        <div className="flex flex-col gap-2 items-center xxs:items-start md:items-center xl:items-start">
          <p className="text-white font-medium text-lg text-center xxs:text-left md:text-center xl:text-left">
            Cari Fasilitas Terdekat
          </p>
          <p className="text-white/70 text-xs text-center xxs:text-left md:text-center xl:text-left">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.
          </p>
        </div>
      </div>
      {/* Edukasi & Berita */}
      <div className="flex flex-col xxs:flex-row md:flex-col xl:flex-row items-center gap-4 group">
        <Image
          src={'/images/edukasi-icon.svg'}
          width={101} height={101} alt="Edukasi & Berita"
          className="motion-safe:group-hover:-translate-y-1 transition rounded-[23px]"
        />
        <div className="flex flex-col gap-2 items-center xxs:items-start md:items-center xl:items-start">
          <p className="text-white font-medium text-lg text-center xxs:text-left md:text-center xl:text-left">
            Dapatkan Edukasi & Berita Terkini
          </p>
          <p className="text-white/70 text-xs text-center xxs:text-left md:text-center xl:text-left">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.
          </p>
        </div>
      </div>
      {/* Review */}
      <div className="flex flex-col xxs:flex-row md:flex-col xl:flex-row items-center gap-4 group">
        <Image
          src={'/images/review-icon.svg'}
          width={101} height={101} alt="Beri Penilaian"
          className="motion-safe:group-hover:-translate-y-1 transition rounded-[23px]"
        />
        <div className="flex flex-col gap-2 items-center xxs:items-start md:items-center xl:items-start">
          <p className="text-white font-medium text-lg text-center xxs:text-left md:text-center xl:text-left">
            Berikan Penilaian
          </p>
          <p className="text-white/70 text-xs text-center xxs:text-left md:text-center xl:text-left">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeaturesCard