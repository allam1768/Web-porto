'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

// DecryptedText Component
const DecryptedText = ({
  text,
  speed = 100,
  maxIterations = 20,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!?@#$%^&*",
  className = "",
  parentClassName = "",
  encryptedClassName = ""
}) => {
  const [displayText, setDisplayText] = useState('')
  const [isDecrypting, setIsDecrypting] = useState(false)

  useEffect(() => {
    if (isDecrypting) {
      let iteration = 0
      const interval = setInterval(() => {
        setDisplayText(prevText => {
          return text
            .split('')
            .map((letter, index) => {
              if (index < iteration) {
                return text[index]
              }
              return characters[Math.floor(Math.random() * characters.length)]
            })
            .join('')
        })

        if (iteration >= text.length) {
          clearInterval(interval)
          setDisplayText(text)
        }

        iteration += 1 / 3
      }, speed)

      return () => clearInterval(interval)
    }
  }, [isDecrypting, text, speed, characters])

  useEffect(() => {
    setIsDecrypting(true)
  }, [])

  return (
    <span className={`${parentClassName} ${className}`}>
      {displayText || text}
    </span>
  )
}

// Translation content
const translations = {
  en: {
    home: 'Home',
    project: 'Project',
    skills: 'Skills',
    about: 'About',
    education: 'Education',
    contact: 'Contact',
    language: 'Language',
  },
  id: {
    home: 'Beranda',
    project: 'Proyek',
    skills: 'Keahlian',
    about: 'Tentang',
    education: 'Pendidikan',
    contact: 'Kontak',
    language: 'Bahasa',
  },
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState('en')
  const pathname = usePathname()

  const t = translations[language]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMobileMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'project', 'skills', 'about', 'education', 'contact']
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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const isActive = (section: string) => activeSection === section

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'id' : 'en'))
  }

  // Jika path mengandung '404' maka jangan tampilkan navbar
  if (pathname?.includes('404')) {
    return null
  }

  return (
    <>
      <nav className="fixed top-1 sm:top-2 left-1/2 transform -translate-x-1/2 z-50 bg-black/90 backdrop-blur-md text-gray-300 py-2 sm:py-2.5 rounded-full font-inter w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] max-w-6xl border border-gray-800">
        <div className="flex justify-between items-center px-3 sm:px-5 md:px-6 lg:px-8 w-full">
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

          <ul className="hidden md:flex gap-3 md:gap-5 lg:gap-6 font-medium text-sm lg:text-base">
            {['home', 'project', 'skills', 'about', 'education'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`transition-all duration-300 hover:text-white px-2 py-1 rounded-md ${isActive(section) ? 'text-white bg-gray-800' : 'hover:scale-105'}`}
                  style={{ color: isActive(section) ? '#ffffff' : '#696B63' }}
                >
                  {t[section as keyof typeof t]}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex gap-3 md:gap-4 items-center">
            <a href="https://www.linkedin.com/in/allam-permata-putra-281722364" target="_blank" rel="noopener noreferrer">
              <div className="w-5 h-5 hover:text-blue-400 transition-colors cursor-pointer flex items-center justify-center">
                <span className="text-sm font-semibold">in</span>
              </div>
            </a>

            <div className="md:hidden ml-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-8 h-8 flex flex-col justify-center items-center space-y-1 hover:scale-110 transition-all duration-300 relative z-50"
                aria-label="Toggle mobile menu"
              >
                <span className={`block w-5 h-0.5 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5 bg-[#FFAF1A]' : 'bg-gray-300'}`}></span>
                <span className={`block w-5 h-0.5 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 bg-[#FFAF1A]' : 'bg-gray-300'}`}></span>
                <span className={`block w-5 h-0.5 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5 bg-[#FFAF1A]' : 'bg-gray-300'}`}></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/95 backdrop-blur-lg" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black/90 backdrop-blur-xl border-l border-gray-800 flex flex-col justify-center px-8">
            <ul className="space-y-8">
              {[
                { name: 'home', icon: '🏠' },
                { name: 'project', icon: '💼' },
                { name: 'skills', icon: '🛠️' },
                { name: 'about', icon: '👤' },
                { name: 'education', icon: '🎓' }
              ].map((item, index) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.name)}
                    className={`flex items-center gap-4 w-full text-left py-4 transition-all duration-500 transform hover:translate-x-2 ${isActive(item.name) ? 'text-[#FFAF1A]' : 'text-white hover:text-[#FFAF1A]'}`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: mobileMenuOpen ? 'slideInRight 0.6s ease-out forwards' : ''
                    }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <DecryptedText
                      text={t[item.name as keyof typeof t]}
                      speed={50}
                      maxIterations={15}
                      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*"
                      className="text-xl font-medium"
                      parentClassName="block"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}
