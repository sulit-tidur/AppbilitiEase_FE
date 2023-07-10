interface NotFoundProps {
  message?: string
}

export default function NotFound({ message = 'Halaman' }: NotFoundProps) {
  return (
    <section className='flex bg-[url(/images/bg/bg-login.svg)] bg-center bg-cover bg-no-repeat'>
      <div className='container flex flex-col items-center justify-center h-screen px-4 mx-auto py-14'>
        <h1 className='font-semibold text-center text-header text-purple'>
          404
        </h1>
        <h2 className='font-medium text-center text-subheader text-dark'>
          {message} yang kamu cari tidak ada :(
        </h2>
      </div>
    </section>
  )
}