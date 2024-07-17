import Link from 'next/link'
import Logo from '../Logo/Logo'
import { BsBuildingsFill, BsNewspaper } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='bg-cream min-h-[411px] flex flex-col items-center'>
      <div className='container mx-auto p-10 flex flex-col md:flex-row min-h-[355px] place-content-between items-center justify-center gap-10 md:gap-52'>
        <div className='flex flex-col flex-1 w-full gap-4'>
          <Logo footer />
          <ul className='flex flex-col gap-2'>
            <Link href={'/cari-fasilitas'} className='flex gap-[4px] items-center hover:underline w-fit'>
              <BsBuildingsFill />
              <p>Cari Fasilitas</p>
            </Link>
            <Link href={'/edukasi-berita'} className='flex gap-[4px] items-center hover:underline w-fit'>
              <BsNewspaper />
              <p>Edukasi & Berita</p>
            </Link>
          </ul>
        </div>
        <div className='flex flex-col flex-1 w-full gap-4'>
          <h3 className='font-semibold'>
            Contact Information
          </h3>
          <p>+62-123-4567-8910</p>
          <p>help@appbilitiease.com</p>
          <p>Kota Depok, Jawa Barat, Indonesia 16425</p>
        </div>
      </div>
      <hr className='w-full border-[1px] border-[#B7B7B7]' />
      <div className='container flex justify-center p-4 mx-auto'>
        <p className='text-[#606060] font-light'>
          AppbilitiEase All Rights Reserved, 2023
        </p>
      </div>
    </footer>
  )
}

export default Footer