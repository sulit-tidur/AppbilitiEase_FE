import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <div>
      <Link href={'/'} className="cursor-pointer">
        <Image
          src={'/images/Logo.svg'}
          width={237} height={53.215}
          alt="AppbilitiEase Logo"
          className="hidden md:block w-[237px] h-[53.215px]"
        />
        <Image
          src={'/images/Logo-sm.svg'}
          width={46} height={53.215}
          alt="AppbilitiEase Logo"
          className="block md:hidden w-[46] h-[53.215px]"
        />
      </Link>
    </div>
  )
}

export default Logo