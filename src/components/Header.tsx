'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isAtFooter, setIsAtFooter] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      setIsScrolled(scrollPosition > 50)
      
      // Detectar si estamos cerca del footer (últimos 200px)
      const distanceFromBottom = documentHeight - (scrollPosition + windowHeight)
      setIsAtFooter(distanceFromBottom < 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
      isAtFooter 
        ? 'transform -translate-y-full opacity-0' 
        : isScrolled 
          ? 'bg-white/70 backdrop-blur-md shadow-md transform translate-y-0 opacity-100' 
          : 'bg-white/95 backdrop-blur-lg shadow-lg transform translate-y-0 opacity-100'
    }`}>
      <div className="container mx-auto flex items-center justify-between whitespace-nowrap px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center">
          <Image
          src="/logo.png"
          alt="FUMIPLAG Pest Control"
          width={250}
          height={65}
          className="h-14 w-auto"
          priority={true}
        />
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            <Link className="text-color-primary text-base font-medium leading-normal hover:text-primary transition-colors" href="#hero">
              Inicio
            </Link>
            <Link className="text-color-primary text-base font-medium leading-normal hover:text-primary transition-colors" href="#services">
              Servicios
            </Link>
            <Link className="text-color-primary text-base font-medium leading-normal hover:text-primary transition-colors" href="#about">
              Nosotros
            </Link>
            <Link className="text-color-primary text-base font-medium leading-normal hover:text-primary transition-colors" href="#contact">
              Contacto
            </Link>
          </nav>
          <div className="h-6 w-px bg-gray-200"></div>
          <div className="flex items-center gap-4">
            <a 
              className="text-gray-500 hover:text-primary transition-colors"
              href="https://www.instagram.com/fumiplagrd" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <Link 
          href="#contact"
          className="hidden md:flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-primary text-black text-base font-bold leading-normal tracking-wide shadow-lg hover:opacity-90 transition-all"
        >
          <span className="truncate">Cotizar</span>
        </Link>
        
        <button 
          className="md:hidden text-color-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menú"
        >
          <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <line x1="3" x2="21" y1="12" y2="12"></line>
            <line x1="3" x2="21" y1="6" y2="6"></line>
            <line x1="3" x2="21" y1="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden border-t shadow-lg transition-all duration-300 ease-in-out ${
          isScrolled 
            ? 'bg-white/70 backdrop-blur-md' 
            : 'bg-white/95 backdrop-blur-lg'
        }`}>
          <nav className="flex flex-col p-4 space-y-4">
            <Link className="text-color-primary text-base font-medium hover:text-primary transition-colors" href="#hero" onClick={() => setIsMenuOpen(false)}>
              Inicio
            </Link>
            <Link className="text-color-primary text-base font-medium hover:text-primary transition-colors" href="#services" onClick={() => setIsMenuOpen(false)}>
              Servicios
            </Link>
            <Link className="text-color-primary text-base font-medium hover:text-primary transition-colors" href="#about" onClick={() => setIsMenuOpen(false)}>
              Nosotros
            </Link>
            <Link className="text-color-primary text-base font-medium hover:text-primary transition-colors" href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contacto
            </Link>
            <Link 
              href="#contact"
              className="flex items-center justify-center rounded-md h-12 px-6 bg-primary text-black text-base font-bold leading-normal tracking-wide shadow-lg hover:opacity-90 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Cotizar
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
