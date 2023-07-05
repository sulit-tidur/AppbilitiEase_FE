import { Facility } from "@/utils/types"
import Image from "next/image"
import Link from "next/link"

interface FacilityCardProps {
  facility: Facility
}

const FacilityCard: React.FC<FacilityCardProps> = ({
  facility
}) => {
  return (
    <div className="bg-white p-2 pb-[40px] mb-8 md:mb-0 rounded-[14px] shadow-lg flex flex-col gap-2 relative group">
      {/* Facility Picture */}
      <div className="rounded-[14px] overflow-hidden">
        <Image
          src={facility.src}
          width={464} height={238} alt="Fasilitas Terdekat"
          className="group-hover:scale-105 transition aspect-[232/119] rounded-[14px]"
        />
      </div>

      {/* Location & Rating */}
      <div className="flex place-content-between flex-wrap">
        <p className="text-base text-neutral-500 font-normal">
          {facility.location}
        </p>
        <Image
          src={'/images/stars.svg'}
          width={88} height={16} alt="Review Stars"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold">
        {facility.title}
      </h3>

      <hr className="border-dashed border-[1px] border-neutral-300" />

      {/* Description */}
      <p className="text-xs font-normal">
        {facility.desc}
      </p>

      {/* Details Button */}
      <Link
        href={facility.href}
        className="
          text-lg font-normal text-white bg-rose w-fit self-center py-2 px-10 rounded-full
          translate-y-1/2 absolute bottom-0 hover:translate-y-[40%] transition
        "
      >
        Lihat
      </Link>
    </div>
  )
}

export default FacilityCard