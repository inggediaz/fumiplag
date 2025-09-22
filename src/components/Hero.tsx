'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Hero() {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation()
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.3 })
  const { elementRef: descRef, isVisible: descVisible } = useScrollAnimation({ threshold: 0.3 })
  const { elementRef: buttonsRef, isVisible: buttonsVisible } = useScrollAnimation({ threshold: 0.3 })

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat px-4 pt-20 pb-20 text-white"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.png"
          alt="Control de plagas profesional"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl text-center">
        <h1 
          ref={titleRef}
          className={`text-4xl font-black leading-tight tracking-tighter md:text-6xl uppercase mb-6 animate-fade-in ${titleVisible ? 'visible' : ''}`}
        >
          Control Profesional de Plagas
        </h1>
        <p 
          ref={descRef}
          className={`mt-4 text-lg font-normal md:text-xl max-w-3xl mx-auto leading-relaxed animate-slide-up animate-delay-200 ${descVisible ? 'visible' : ''}`}
        >
          Especialistas en manejo integrado de plagas urbanas con más de 16 años de experiencia. Ofrecemos soluciones efectivas para el control de insectos rastreros y voladores, roedores, termitas, desinfección contra virus y bacterias en empresas, industrias y residencias, cubriendo toda la geografía de la República Dominicana.
        </p>
        <div 
          ref={buttonsRef}
          className={`flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-scale animate-delay-400 ${buttonsVisible ? 'visible' : ''}`}
        >
          <Link
            href="#contact"
            className="flex min-w-[200px] items-center justify-center overflow-hidden rounded-md h-14 px-8 bg-primary text-black text-lg font-bold leading-normal tracking-wide shadow-lg hover:opacity-90 transition-all"
          >
            <span className="truncate">Solicitar Cotización</span>
          </Link>
          <Link
            href="#services"
            className="flex min-w-[200px] items-center justify-center overflow-hidden rounded-md h-14 px-8 border-2 border-primary text-primary bg-transparent text-lg font-bold leading-normal tracking-wide hover:bg-primary hover:text-black transition-all"
          >
            <span className="truncate">Ver Servicios</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
