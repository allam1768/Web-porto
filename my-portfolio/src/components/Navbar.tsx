'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMobileMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'about', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (section: string) => activeSection === section

  return (
    <>
      <nav className="fixed top-1 sm:top-2 left-1/2 transform -translate-x-1/2 z-50 bg-black/90 backdrop-blur-md text-gray-300 py-2 sm:py-2.5 rounded-full font-inter w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] max-w-6xl border border-gray-800">
        <div className="flex justify-between items-center px-3 sm:px-5 md:px-6 lg:px-8 w-full">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={24}
              height={24}
              className="bg-blue-500 rounded-full sm:w-7 sm:h-7"
            />
            <span className="font-bold text-base sm:text-lg">Allam</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden sm:flex gap-3 md:gap-5 lg:gap-6 font-medium text-sm lg:text-base">
            {['home', 'skills', 'about', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`transition-all duration-300 hover:text-white px-2 py-1 rounded-md ${
                    isActive(section) ? 'text-white bg-gray-800' : 'hover:scale-105'
                  }`}
                  style={{ color: isActive(section) ? '#ffffff' : '#696B63' }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-7 h-7 flex flex-col justify-center items-center space-y-1 hover:text-white transition-colors"
            >
              <span className={`block w-4 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block w-4 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-4 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </button>
          </div>

          {/* Social Icons */}
          <div className="hidden sm:flex gap-3 md:gap-4 items-center">
            <button onClick={() => {/* Language switch logic */}}>
              <svg className="w-5 h-5 hover:text-green-400 transition-colors cursor-pointer" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
              </svg>
            </button>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <div className="w-5 h-5 hover:text-blue-400 transition-colors cursor-pointer flex items-center justify-center">
                <span className="text-sm font-semibold">in</span>
              </div>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 sm:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="fixed top-14 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm bg-black/95 backdrop-blur-md border border-gray-800 rounded-2xl p-5">
            <ul className="space-y-3">
              {['home', 'project', 'about', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`w-full text-left py-2.5 px-3 rounded-lg transition-all duration-300 ${
                      isActive(section) ? 'text-white bg-gray-800' : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile Social */}
            <div className="flex justify-center gap-6 mt-5 pt-5 border-t border-gray-700">
              <button onClick={() => {/* Language switch logic */}}>
                <svg className="w-5 h-5 hover:text-green-400 transition-colors cursor-pointer" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <path d="M2 12h20" />
                </svg>
              </button>
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                <div className="w-5 h-5 hover:text-blue-400 transition-colors cursor-pointer flex items-center justify-center">
                  <span className="text-sm font-semibold">in</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
