import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import Footer from '@/components/footer/Footer'

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
        <Footer />
      </body>
    </html>
  )
}
