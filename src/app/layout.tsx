import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import Footer from '@/components/Footer/Footer'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: 'AppbilitiEase'
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

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
