import { Instagram } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Model Art
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link href="/portfolio" className="hover:text-gray-600 transition-colors">
              Portfolio
            </Link>
            <Link href="/acerca-de" className="hover:text-gray-600 transition-colors">
              Acerca de
            </Link>
            <Link href="/contacto" className="hover:text-gray-600 transition-colors">
              Contacto
            </Link>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
} 