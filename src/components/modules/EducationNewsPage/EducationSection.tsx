import { educations } from '@/utils/constants'
import { poppins } from '@/utils/fonts'
import EducationCard from './EducationCard'

const EducationSection = () => {
  return (
    <section className={`${poppins.className} sm:px-14 flex flex-col gap-14 items-center`}>
      <h1 className='text-5xl font-semibold text-dark'>
        Edukasi
      </h1>
      <div className='
        flex w-full gap-6 pb-[30px] overflow-x-auto isolate rounded-[30px]
        scrollbar-thin scrollbar-thumb-purple scrollbar-track-neutral-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full
      '
      >
        {educations.map((education, index) => (
          <EducationCard
            key={index}
            education={education}
            type={index % 3}
          />
        ))}
      </div>
    </section>
  )
}

export default EducationSection