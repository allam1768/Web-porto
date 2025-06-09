import './globals.css'
import { Raleway } from 'next/font/google'
import Navbar from '../components/Navbar'

const raleway = Raleway({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata = {
  title: 'Allam Permata Putra',
  description: 'Portofolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${raleway.className} bg-[#121212] text-white`}>
        <Navbar />
        <main className="w-full">
          {children}
        </main>
      </body>
    </html>
  )
}