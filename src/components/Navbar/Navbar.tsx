'use client'

import { nunito } from "@/utils/fonts"
import Logo from "../logo/Logo"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useMemo, useState } from "react"
import { PiSignInBold } from "react-icons/pi"
import { BiSolidChevronDown } from "react-icons/bi"
import useOutsideClick from "../hooks/useOutsideClick"

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

  const [isOpen, setIsOpen] = useState(false)

  const ref = useOutsideClick(() => setIsOpen(false))

  const pathname = usePathname()
  const pathLabel = useMemo(() => {
    switch (pathname) {
      case '/':
        return 'Beranda'
      case 'cari-fasilitas':
        return 'Cari Fasilitas'
      case 'edukasi-berita':
        return 'Edukasi & Berita'
    }
  }, [pathname])

  return (
    <nav className={`
        ${nunito.className} fixed flex w-full z-50 transition duration-300
        ${scrolled ? 'bg-white shadow-md' : 'bg-transparent shadow-none'}
      `}
    >
      <div className="container mx-auto p-4 flex place-content-between items-center gap-6">
        <Logo />
        <div className="hidden md:flex gap-10 text-dark">
          <Link href={'/'} className="border-b-[3px] [border-image:linear-gradient(#FF9A2C,#6D5ADF)50;]">
            Beranda
          </Link>
          <Link href={'/cari-fasilitas'}>
            Cari Fasilitas
          </Link>
          <Link href={'/edukasi-berita'}>
            Edukasi & Berita
          </Link>
        </div>
        <div ref={ref} className="flex md:hidden relative p-2 justify-center text-dark">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center"
          >
            <p className="font-bold">
              {pathLabel}
            </p>
            <BiSolidChevronDown size={20} className={`absolute -right-4 transition duration-300 ${isOpen && 'rotate-180'}`} />
          </button>
          <div className={`
              flex flex-col absolute top-full text-center bg-dark text-white w-[170px] rounded-xl shadow-xl z-50 overflow-hidden transition-all ease-out duration-300
              ${isOpen ? 'h-[124px] border-2 border-orange' : 'h-0'}
            `}
          >
            <Link href={'/'} onClick={() => setIsOpen(false)} className="py-2 px-6 transition hover:bg-white/20">
              Beranda
            </Link>
            <Link href={'/cari-fasilitas'} className="py-2 px-6 transition hover:bg-white/20">
              Cari Fasilitas
            </Link>
            <Link href={'/edukasi-berita'} className="py-2 px-6 transition hover:bg-white/20">
              Edukasi & Berita
            </Link>
          </div>
        </div>
        <div className="flex gap-2">
          <Link
            href={'/login'}
            className="
              text-purple font-bold px-[20px] sm:px-[32px] py-[16px] rounded-[15px] peer
              hover:bg-purple hover:text-white transition
            "
          >
            <p className="hidden sm:block">Login</p>
            <PiSignInBold size={20} className="block sm:hidden" />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar