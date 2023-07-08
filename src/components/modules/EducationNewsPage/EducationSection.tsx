import { poppins } from '@/utils/fonts'
import EducationCard from './EducationCard'
import { Article } from '@/utils/types'

interface EducationSectionProps {
  educations: Article[]
}

const EducationSection: React.FC<EducationSectionProps> = ({
  educations
}) => {
  return (
    <section className={`${poppins.className} sm:px-14 flex flex-col gap-14 items-center`}>
      <h1 className='text-5xl font-semibold text-dark'>
        Edukasi
      </h1>
      <div className='
        flex w-fit max-w-full gap-6 pb-[30px] overflow-x-auto isolate rounded-[30px]
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