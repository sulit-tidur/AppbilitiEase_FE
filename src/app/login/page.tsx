import LoginModule from '@/components/modules/LoginPage/LoginModule'
import { redirect } from 'next/navigation'
import useAuth from '@/components/hooks/useAuth'

export default async function Login() {
  const { session } = await useAuth()

  if (session) {
    redirect('/')
  }

  return (
    <LoginModule />
  )
}