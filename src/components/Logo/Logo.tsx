import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <div>
      <Link href={'/'} className="cursor-pointer">
        <Image
          src={'/images/Logo.svg'}
          width={180} height={40.42}
          alt="AppbilitiEase Logo"
          className="hidden md:block w-[180px] h-[40.42px]"
        />
        <Image
          src={'/images/Logo-sm.svg'}
          width={46} height={53.215}
          alt="AppbilitiEase Logo"
          className="block md:hidden w-[34.94px] h-[40.42px]"
        />
      </Link>
    </div>
  )
}

export default Logo