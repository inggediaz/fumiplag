'use client'

import { useState, useEffect } from 'react'

export default function ScrollToTopButton() {
  const [isAtFooter, setIsAtFooter] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Detectar si estamos cerca del footer (últimos 200px)
      const distanceFromBottom = documentHeight - (scrollPosition + windowHeight)
      setIsAtFooter(distanceFromBottom < 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed cursor-pointer bottom-24 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-black shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl ${
        isAtFooter 
          ? 'transform translate-y-0 opacity-100' 
          : 'transform translate-y-16 opacity-0 pointer-events-none'
      }`}
      aria-label="Volver arriba"
    >
      <svg 
        className="h-6 w-6" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  )
}
