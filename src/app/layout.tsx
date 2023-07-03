import Navbar from '@/components/Navbar/Navbar'
import './globals.css'

export const metadata = {
  title: 'AppbilitiEase'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className=''>
          {children}
        </main>
      </body>
    </html>
  )
}
