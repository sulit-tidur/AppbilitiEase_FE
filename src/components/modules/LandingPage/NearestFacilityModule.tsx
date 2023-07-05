import { poppins } from "@/utils/fonts"
import { facilities } from "@/utils/constants"
import FacilityCard from "./FacilityCard"

const NearestFacilityModule = () => {
  return (
    <section className={`${poppins.className} bg-[url(/images/bg/bg-fasilitas.svg)] bg-center bg-cover bg-no-repeat h-fit flex`}>
      <div className="container mx-auto p-4 md:max-w-[calc(100%-100px)] mb-20 mt-[430px] xxs:mt-[330px] md:mt-[220px] xl:mt-[170px]">
        <div className="flex flex-col items-center gap-12">
          {/* Header */}
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-5xl font-semibold">
              <span className="text-purple">Fasilitas</span> Terdekat
            </h1>
            <p className="text-neutral-400 font-medium text-xl">
              Lorem Ipsum is simply dummy text of the printing.
            </p>
          </div>

          {/* Facilities */}
          <div className="flex flex-col md:flex-row gap-6">
            {facilities.slice(0, 3).map((facility) => (
              <FacilityCard key={facility.id} facility={facility} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NearestFacilityModule