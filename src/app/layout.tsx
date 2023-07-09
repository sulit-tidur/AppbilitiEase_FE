import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import Footer from '@/components/Footer/Footer'
import { Toaster } from 'react-hot-toast'
import useAuth from '@/components/hooks/useAuth'

export const metadata = {
  title: 'AppbilitiEase'
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { session } = await useAuth()

  return (
    <html lang="en">
      <body>
        <Toaster />
        <Navbar session={session} />
        <main className=''>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
