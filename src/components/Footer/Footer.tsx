import Logo from '../Logo/Logo'

const Footer = () => {
  return (
    <footer className='bg-cream min-h-[411px] flex flex-col items-center'>
      <div className='container mx-auto p-10 flex flex-col md:flex-row min-h-[355px] place-content-between items-center justify-center gap-10 md:gap-52'>
        <div className='flex flex-col flex-1 w-full gap-4'>
          <Logo footer />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy a type specimen book.</p>
        </div>
        <div className='flex flex-col flex-1 w-full gap-4'>
          <h3 className='font-semibold'>
            Contact Information
          </h3>
          <p>+0913-705-3875</p>
          <p>ElizabethJ@jourrapide.com</p>
          <p>4808 Skinner Hollow Road Days Creek, OR 97429</p>
        </div>
      </div>
      <hr className='w-full border-[1px] border-[#B7B7B7]' />
      <div className='container flex justify-center p-4 mx-auto'>
        <p className='text-[#606060] font-light'>
          AppbilitiEase All Right Reserved, 2023
        </p>
      </div>
    </footer>
  )
}

export default Footer