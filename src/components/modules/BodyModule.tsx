interface BodyModuleProps {
  children: React.ReactNode
}

const BodyModule: React.FC<BodyModuleProps> = ({
  children
}) => {

  return (
    <section className='container flex flex-col gap-8 px-4 py-8 mx-auto md:py-14 md:gap-14'>
      {children}
    </section>
  )
}

export default BodyModule