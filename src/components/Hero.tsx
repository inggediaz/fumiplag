import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="hero"
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
        <h1 className="text-4xl font-black leading-tight tracking-tighter md:text-6xl uppercase mb-6">
          Control Profesional de Plagas
        </h1>
        <div className="text-xl md:text-2xl font-bold text-primary mb-4 uppercase tracking-wide">
          FUMIPLAG PEST CONTROL
        </div>
        <p className="mt-4 text-lg font-normal md:text-xl max-w-3xl mx-auto leading-relaxed">
          Especialistas en manejo integrado de plagas urbanas con más de 15 años de experiencia. 
          Ofrecemos soluciones efectivas para control de termitas, desratización, desinsectación y desinfección 
          para hogares, empresas e industrias en República Dominicana.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
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
