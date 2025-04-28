'use client'

import { Instagram, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <header className="fixed top-0 left-0 h-[110px] w-full bg-transparent z-50">
      <nav className="h-full flex items-center justify-between px-8 md:px-[70px]">
        {/* Logo */}
        <Link href="/" className="!text-white text-[25px] hover:!text-gray-300 transition-colors no-underline">
          Chiara
        </Link>

        {/* Menú desktop */}
        {!isMobile && (
          <div className="flex items-center [&>*:not(:last-child)]:mr-[70px]">
            <Link href="/portfolio" className="!text-white text-[25px] hover:!text-gray-300 transition-colors no-underline">Portfolio</Link>
            <Link href="/about" className="!text-white text-[25px] hover:!text-gray-300 transition-colors no-underline">Acerca de mi</Link>
            <a
              href="https://www.instagram.com/chiara.model/"
              target="_blank"
              rel="noopener noreferrer"
              className="!text-white hover:!text-gray-300 transition-colors no-underline"
            >
              <Instagram size={40} />
            </a>
          </div>
        )}

        {/* Botón menú para móvil */}
        {isMobile && (
          <button
            className="text-white p-2 hover:bg-white/10 rounded-full transition-colors z-[100]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={48} /> : <Menu size={48} />}
          </button>
        )}
      </nav>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[50] bg-black">
          <nav className="relative h-full flex flex-col items-center justify-center">
            <div className="space-y-12 text-center flex flex-col">
              <Link 
                href="/" 
                className="text-white text-3xl font-light hover:text-gray-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="/portfolio" 
                className="text-white text-3xl font-light hover:text-gray-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                href="/about" 
                className="text-white text-3xl font-light hover:text-gray-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Acerca de mi
              </Link>
              <a
                href="https://www.instagram.com/chiara.model/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl font-light hover:text-gray-300 transition-colors"
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
