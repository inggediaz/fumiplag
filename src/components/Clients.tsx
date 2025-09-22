'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Clients() {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.2 })
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.3 })
  const { elementRef: logosRef, isVisible: logosVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section 
      ref={sectionRef}
      className={`py-20 bg-white animate-fade-in ${sectionVisible ? 'visible' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          ref={titleRef}
          className={`text-3xl font-bold leading-tight tracking-tighter text-center text-color-primary mb-12 uppercase animate-slide-up animate-delay-100 ${titleVisible ? 'visible' : ''}`}
        >
          Algunos de nuestros clientes
        </h2>
        <div 
          ref={logosRef}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center animate-fade-in animate-delay-200 ${logosVisible ? 'visible' : ''}`}
        >
          <div className="flex justify-center group">
            <img 
              src="/clientes-logo/rodos.png" 
              alt="Rodos" 
              className="h-12 hover:grayscale-0 hover:opacity-100 transition-all duration-500 transform hover:scale-110" 
            />
          </div>
          <div className="flex justify-center group">
            <img 
              src="/clientes-logo/logo-constructora-ldv.png" 
              alt="Constructora LDV" 
              className="h-12 hover:grayscale-0 hover:opacity-100 transition-all duration-500 transform hover:scale-110" 
            />
          </div>
          <div className="flex justify-center group">
            <img 
              src="/clientes-logo/caribbean-cinemas.png"
              alt="Caribbean Cinemas" 
              className="h-16 hover:grayscale-0 hover:opacity-100 transition-all duration-500 transform hover:scale-110" 
            />
          </div>
          <div className="flex justify-center group">
            <img 
              src="/clientes-logo/apec.png" 
              alt="UNPEC" 
              className="h-12 hover:grayscale-0 hover:opacity-100 transition-all duration-500 transform hover:scale-110" 
            />
          </div>
          <div className="flex justify-center group">
            <img 
              src="/clientes-logo/dominicana-de-seguros.png" 
              alt="Dominicana de Seguros" 
              className="h-12 hover:grayscale-0 hover:opacity-100 transition-all duration-500 transform hover:scale-110" 
            />
          </div>
          <div className="flex justify-center group">
            <img 
              src="/clientes-logo/erc.png" 
              alt="ERC" 
              className="h-12 hover:grayscale-0 hover:opacity-100 transition-all duration-500 transform hover:scale-110" 
            />
          </div>
          <div className="flex justify-center group">
            <img 
              src="/clientes-logo/alorica.png" 
              alt="Alorica" 
              className="h-10 hover:grayscale-0 hover:opacity-100 transition-all duration-500 transform hover:scale-110" 
            />
          </div>
          <div className="flex justify-center group">
            <img 
              src="/clientes-logo/banreservas.png" 
              alt="Banreservas" 
              className="h-10 hover:grayscale-0 hover:opacity-100 transition-all duration-500 transform hover:scale-110" 
            />
          </div>
          <div className="flex justify-center group">
            <img 
              src="/clientes-logo/bandex.png" 
              alt="Bandex" 
              className="h-12 hover:grayscale-0 hover:opacity-100 transition-all duration-500 transform hover:scale-110" 
            />
          </div>
          <div className="flex justify-center group">
            <img 
              src="/clientes-logo/europiel.png" 
              alt="Europiel" 
              className="h-10 hover:grayscale-0 hover:opacity-100 transition-all duration-500 transform hover:scale-110" 
            />
          </div>
          <div className="flex justify-center group">
            <img 
              src="/clientes-logo/moviti.png" 
              alt="Moviti" 
              className="h-10 hover:grayscale-0 hover:opacity-100 transition-all duration-500 transform hover:scale-110" 
            />
          </div>
          <div className="flex justify-center group">
            <img 
              src="/clientes-logo/alma-iglesias.png" 
              alt="Alma Iglesias" 
              className="h-22 hover:grayscale-0 hover:opacity-100 transition-all duration-500 transform hover:scale-110" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}
