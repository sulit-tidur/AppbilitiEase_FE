interface SectionHeaderProps {
  value: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  value
}) => {
  return (
    <h1 className='text-3xl font-semibold break-words md:text-5xl text-dark'>
      {value}
    </h1>
  )
}

export default SectionHeader