import { poppins } from "@/utils/fonts"
import { Developer } from "@/utils/types"
import Image from "next/image"

interface DeveloperCardProps {
  developer: Developer
}

const DeveloperCard: React.FC<DeveloperCardProps> = ({
  developer
}) => {
  return (
    <div className={`${poppins.className} bg-white p-4 shadow-lg rounded-[14px] max-w-[480px] flex flex-col gap-4 group`}>
      {/* Facility Picture */}
      <div className="rounded-[14px] overflow-hidden">
        <Image
          src={developer.image}
          width={464} height={238} alt="Developer"
          className="group-hover:scale-105 transition w-full aspect-[232/119] object-cover rounded-[14px]"
        />
      </div>

      {/* Name & Education */}
      <div className="flex flex-col gap-[4px]">
        <h3 className="font-medium text-xl">
          {developer.name}
        </h3>
        <p className="font-normal text-sm text-neutral-500">
          {developer.education}
        </p>
      </div>

      {/* Description */}
      <p className="font-light text-base text-neutral-400">
        {developer.description}
      </p>

      <div className="flex place-content-between items-center">
        {/* Role */}
        <p className="font-medium text-rose">
          {developer.role}
        </p>
        <div className="flex gap-2">
          <a href={developer.instagram} target="_blank" rel="noreferrer">
            <Image
              src={'/images/instagram.svg'}
              width={22} height={22} alt="Instagram"
            />
          </a>
          <a href={developer.linkedin} target="_blank" rel="noreferrer">
            <Image
              src={'/images/linkedin.svg'} 
              width={22} height={22} alt="Instagram"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default DeveloperCard