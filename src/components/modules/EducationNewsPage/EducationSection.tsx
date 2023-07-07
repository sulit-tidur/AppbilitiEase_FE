import { educations } from "@/utils/constants"
import { poppins } from "@/utils/fonts"
import EducationCard from "./EducationCard"

const EducationSection = () => {
  return (
    <section className={`${poppins.className} sm:px-14 flex flex-col gap-14 items-center`}>
      <h1 className="text-5xl font-semibold text-dark">
        Edukasi
      </h1>
      <div className="flex w-full gap-6 pb-[25px] overflow-x-auto rounded-[30px]">
        {educations.map((education, index) => (
          <EducationCard
            education={education}
            type={index % 3}
          />
        ))}
      </div>
    </section>
  )
}

export default EducationSection