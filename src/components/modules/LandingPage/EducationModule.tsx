import { nunito, poppins, roboto } from "@/utils/fonts"
import Image from "next/image"
import Link from "next/link"
import { IoIosArrowDroprightCircle } from "react-icons/io"

const EducationModule = () => {
  return (
    <section className="h-fit bg-cream">
      <div className="container mx-auto px-4 py-14 md:max-w-[calc(100%-100px)]">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-x-20 gap-y-14">
          {/* Education & News Illustration */}
          <Image
            src={'/images/group-gambar-section-3.svg'}
            width={614} height={635} alt="Edukasi dan Berita"
            className="block sm:hidden lg:block w-[300px] lg:w-[450px] xl:w-[614px]"
          />
          <div className="flex flex-col gap-14">
            {/* Title */}
            <div className={`${poppins.className} w-fit max-w-[700px]`}>
              <h1 className="text-5xl font-semibold text-dark">
                Dapatkan <span className="text-rose">Edukasi</span> dan <span className="text-orange">Berita</span> Seputar Disabilitas
              </h1>
            </div>

            <div className="flex gap-4">
              <Image
                src={'/images/group-gambar-section-3.svg'}
                width={614} height={635} alt="Edukasi dan Berita"
                className="hidden sm:block lg:hidden w-[300px]"
              />

              <div className={`${roboto.className} flex flex-col gap-6`}>
                {/* Education & News Info */}
                <div className="flex gap-4 items-center">
                  <Image
                    src={'/images/edukasi-icon-2.svg'}
                    width={101} height={101} alt="Edukasi"
                    className="rounded-[23px]"
                  />
                  <div>
                    <h5 className="font-medium text-2xl">
                      Edukasi
                    </h5>
                    <p className="font-normal text-neutral-400">
                      Very Contrary to popular belief, Lorem Ipsum is not simply random text.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <Image
                    src={'/images/berita-icon.svg'}
                    width={101} height={101} alt="Edukasi"
                    className="rounded-[23px]"
                  />
                  <div>
                    <h5 className="font-medium text-2xl">
                      Berita
                    </h5>
                    <p className="font-normal text-neutral-400">
                      Very Contrary to popular belief, Lorem Ipsum is not simply random text.
                    </p>
                  </div>
                </div>

                {/* Link to Education & News */}
                <Link
                  href={'/edukasi-berita'}
                  className={`
                    ${nunito.className} w-fit flex gap-[4px] mt-8 items-center py-2 px-4 rounded-full
                    bg-orange text-white shadow-md transition hover:-translate-y-1 hover:shadow-lg
                  `}
                >
                  <p>
                    Lihat Edukasi & Berita
                  </p>
                  <IoIosArrowDroprightCircle />
                </Link>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationModule