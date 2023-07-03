'use client'

import { nunito } from "@/utils/fonts"
import Logo from "../Logo/Logo"
import Link from "next/link"
import { useEffect, useState } from "react"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const changeNavbarBg = () => {
      if (window.scrollY >= 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', changeNavbarBg)

    return () => {
      window.removeEventListener('scroll', changeNavbarBg)
    }
  }, [])

  return (
    <nav className={`
        ${nunito.className} fixed flex w-full z-50 transition duration-300
        ${scrolled ? 'bg-white shadow-md' : 'bg-transparent shadow-none'}
      `}
    >
      <div className="container mx-auto p-4 flex place-content-between items-center gap-6">
        <Logo />
        <div className="hidden lg:flex gap-10 text-dark">
          <Link href={'/'} className="border-b-[3px] [border-image:linear-gradient(#FF9A2C,#6D5ADF)50;] ">
            Beranda
          </Link>
          <Link href={'/cari-fasilitas'}>
            Cari Fasilitas
          </Link>
          <Link href={'/edukasi-berita'}>
            Edukasi & Berita
          </Link>
        </div>
        <div className="flex gap-2">
          <Link
            href={'/login'}
            className="
              text-purple font-bold px-[32px] py-[16px] rounded-[15px] peer
              hover:bg-purple hover:text-white transition
            "
          >
            Login
          </Link>
          <Link
            href={'/register'}
            className="
              text-purple font-bold px-[32px] py-[16px] border-[1px] border-purple rounded-[15px]
              hover:bg-purple hover:text-white transition peer-hover:border-transparent
            "
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar