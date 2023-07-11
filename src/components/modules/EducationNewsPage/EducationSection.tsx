'use client'

import { poppins } from '@/utils/fonts'
import EducationCard from './EducationCard'
import { Article } from '@/utils/types'
import useArticleList from '@/components/hooks/useArticleList'
import { useEffect } from 'react'
import { BeatLoader } from 'react-spinners'

interface EducationSectionProps {
  educations: Article[]
}

const EducationSection: React.FC<EducationSectionProps> = ({
  educations
}) => {
  const educationsList = useArticleList()

  useEffect(() => {
    educationsList.setEducations(educations)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className={`${poppins.className} flex flex-col items-center gap-8 sm:px-14 md:gap-14`}>
      <h1 className='font-semibold text-header text-dark'>
        Edukasi
      </h1>
      <div className='
        flex w-fit max-w-[100vw] md:w-fit md:max-w-full gap-6 px-4 pb-[50px] overflow-x-auto isolate md:rounded-[30px]
        scrollbar-thin scrollbar-thumb-purple scrollbar-track-neutral-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full
      '
      >
        {!educationsList.educations &&
          <BeatLoader color='#5842DB' size={20} />
        }
        {educationsList.educations && educationsList.educations.map((education, index) => (
          <EducationCard
            key={index}
            education={education}
            type={index % 3}
          />
        ))}
        {educationsList.educations?.length === 0 &&
          <h1 className='font-medium text-center text-subheader text-dark'>
            Edukasi tidak tersedia :(
          </h1>
        }
      </div>
    </section>
  )
}

export default EducationSection