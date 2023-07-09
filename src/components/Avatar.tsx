import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import Image from 'next/image'

export default async function Avatar() {
  const session = await getServerSession(authOptions)

  return (
    <Image
      src={session.token.token.user.image || '/images/placeholder.jpg'}
      width={30} height={30} alt='Avatar'
      className='rounded-full'
    />
  )
}
