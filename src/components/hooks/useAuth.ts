import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import axios, { isAxiosError } from 'axios'
import { getServerSession } from 'next-auth'

const useAuth = async () => {
  const session = await getServerSession(authOptions)

  let unAuthorized = false
  let unHandledError = false

  try {
    const { access_token } = session

    const res = await axios.post(`${process.env.NEXT_PUBLIC_BE_URL}/auth/token/verify/`, {
      token: access_token
    })

    if (res.status !== 200) {
      unAuthorized = true
    }

  } catch (err) {
    console.error(err)
    if (isAxiosError(err) && err.response?.status === 401) {
      unAuthorized = true
    } else {
      unHandledError = true
    }
  }

  return {
    unAuthorized,
    unHandledError,
    session
  }
}

export default useAuth