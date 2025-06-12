'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // List rute yang ingin disembunyikan Navbar-nya
  const hideNavbarRoutes = ['/galery', '/frondend', '/desain', '/project']
  const hideNavbar = hideNavbarRoutes.includes(pathname)

  return (
    <>
      {!hideNavbar && <Navbar />}
      <main className="w-full">{children}</main>
    </>
  )
}