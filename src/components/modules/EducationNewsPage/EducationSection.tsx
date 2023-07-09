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
    <section className={`${poppins.className} flex flex-col items-center gap-8 sm:px-14 md:gap-14`}>
      <h1 className='text-5xl font-semibold text-dark'>
        Edukasi
      </h1>
      <div className='
        flex w-screen md:max-w-full gap-6 px-4 pb-[30px] overflow-x-auto isolate md:rounded-[30px]
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