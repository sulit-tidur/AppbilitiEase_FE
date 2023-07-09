import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

const useAuth = async () => {
  const session = await getServerSession(authOptions)
  if (!session) {
    return null
  }
  const access_token = session.access_token

  return {
    access_token
  }
}

export default useAuth