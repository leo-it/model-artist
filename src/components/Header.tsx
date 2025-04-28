'use client'

import { Instagram, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <nav className="max-w-[1200px] mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white text-xl font-light">
            Chiara
          </Link>
          
          {!isMobile && (
            <div className="flex space-x-8">
              <Link 
                href="/" 
                className={`text-white hover:text-gray-300 transition-colors ${
                  pathname === '/' ? 'font-bold' : 'font-light'
                }`}
              >
                Inicio
              </Link>
              <Link 
                href="/portfolio" 
                className={`text-white hover:text-gray-300 transition-colors ${
                  pathname === '/portfolio' ? 'font-bold' : 'font-light'
                }`}
              >
                Portfolio
              </Link>
              <Link 
                href="/about" 
                className={`text-white hover:text-gray-300 transition-colors ${
                  pathname === '/about' ? 'font-bold' : 'font-light'
                }`}
              >
                Acerca de mí
              </Link>
              <a
                href="https://www.instagram.com/chiari_in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          )}

          {isMobile && (
            <button
              className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[50] bg-black/95">
          <nav className="relative h-full flex flex-col items-center justify-center">
            <div className="space-y-8 text-center">
              <Link 
                href="/" 
                className="text-white text-2xl font-light hover:text-gray-300 transition-colors block"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="/portfolio" 
                className="text-white text-2xl font-light hover:text-gray-300 transition-colors block"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                href="/about" 
                className="text-white text-2xl font-light hover:text-gray-300 transition-colors block"
                onClick={() => setIsMenuOpen(false)}
              >
                Acerca de mí
              </Link>
              <a
                href="https://www.instagram.com/chiari_in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl font-light hover:text-gray-300 transition-colors block"
                onClick={() => setIsMenuOpen(false)}
              >
                Instagram
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
