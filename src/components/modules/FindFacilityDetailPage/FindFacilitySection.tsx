interface FindFacilitySectionProps {
  children: React.ReactNode
}

const FindFacilitySection: React.FC<FindFacilitySectionProps> = ({
  children
}) => {
  return (
    <section className='relative flex flex-col gap-4 md:gap-6 sm:px-8'>
      {children}
    </section>
  )
}

export default FindFacilitySection