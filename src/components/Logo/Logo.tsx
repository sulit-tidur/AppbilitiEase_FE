import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  footer?: boolean
}

const Logo: React.FC<LogoProps> = ({ footer }) => {
  return (
    <div>
      <Link href={'/'} className='cursor-pointer'>
        <Image
          src={'/images/Logo.svg'}
          width={180} height={40.42}
          alt='AppbilitiEase Logo'
          className={`${!footer && 'hidden md:block'}`}
        />
        {!footer &&
          < Image
            src={'/images/Logo-sm.svg'}
            width={34.94} height={40.42}
            alt='AppbilitiEase Logo'
            className='block md:hidden'
          />
        }
      </Link>
    </div>
  )
}

export default Logo