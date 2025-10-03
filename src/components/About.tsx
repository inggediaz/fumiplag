'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { usePercentageAnimation, usePlusCountAnimation } from '@/hooks/useCountAnimation';

const features = [
  {
    icon: (
      <svg className="h-12 w-12 text-primary mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 0118-8.944c0 1.343-.203 2.633-.586 3.844z" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    ),
    title: 'Servicio Garantizado',
    description: 'Nuestros servicios están 100% garantizados para su satisfacción.'
  },
  {
    icon: (
      <svg className="h-12 w-12 text-primary mb-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.83 12a8.83 8.83 0 11-17.66 0c0-4.87 3.96-8.83 8.83-8.83s8.83 3.96 8.83 8.83z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2m8-10h-2M4 12H2"></path>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41m-11.32 0l1.41-1.41m0-11.32l-1.41 1.41"></path>
      </svg>
    ),
    title: 'Productos Seguros',
    description: 'Usamos productos seguros para su familia, mascotas y el medio ambiente.'
  },
  {
    icon: (
      <svg className="h-12 w-12 text-primary mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    ),
    title: 'Técnicos Expertos',
    description: 'Personal certificado con más de 16 años de experiencia en el sector.'
  },
  {
    icon: (
      <svg className="h-12 w-12 text-primary mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M12 2v2m0 16v2m8-10h-2M4 12H2" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    ),
    title: 'Cobertura Nacional',
    description: 'Atendemos su emergencia en Santo Domingo y todo el país.'
  }
]

export default function About() {
  // Hooks de animación para las secciones principales
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.2 });
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.3 });
  const { elementRef: missionRef, isVisible: missionVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });
  const { elementRef: visionRef, isVisible: visionVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });
  const { elementRef: valuesRef, isVisible: valuesVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });
  const { elementRef: policyRef, isVisible: policyVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });
  const { elementRef: whyChooseRef, isVisible: whyChooseVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });
  const { elementRef: featuresRef, isVisible: featuresVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  
  // Hooks de conteo para estadísticas
  const [satisfactionRef, satisfactionValue, satisfactionVisible] = usePercentageAnimation<HTMLDivElement>(98, { threshold: 0.3 });
  const [clientsRef, clientsValue, clientsVisible] = usePlusCountAnimation<HTMLDivElement>(2500, { threshold: 0.3 });
  const [hoursRef, hoursValue, hoursVisible] = usePlusCountAnimation<HTMLDivElement>(3000, { threshold: 0.3 });

  return (
    <section 
      ref={sectionRef}
      className={`py-12 sm:py-16 lg:py-20 bg-gray-50 animate-fade-in ${sectionVisible ? 'visible' : ''}`} 
      id="about"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Misión, Visión y Valores */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            ref={titleRef}
            className={`text-2xl sm:text-3xl font-bold leading-tight tracking-tighter text-color-primary mb-8 sm:mb-12 uppercase animate-slide-up animate-delay-100 ${titleVisible ? 'visible' : ''}`}
          >
            Sobre <span className="text-primary">FUMIPLAG</span>
          </h2>
          
          {/* Misión y Visión */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Misión */}
            <div 
              ref={missionRef}
              className={`bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-slide-up animate-delay-200 ${missionVisible ? 'visible' : ''}`}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 uppercase">Misión</h3>
              <p className="text-sm sm:text-base text-color-secondary leading-relaxed">
                Brindar soluciones profesionales, innovadoras y de primera calidad en el control de plagas, garantizando la 
                eficiencia y los resultados de nuestros servicios para la satisfacción de nuestros clientes.
              </p>
            </div>

            {/* Visión */}
            <div 
              ref={visionRef}
              className={`bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-slide-up animate-delay-300 ${visionVisible ? 'visible' : ''}`}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 uppercase">Visión</h3>
              <p className="text-sm sm:text-base text-color-secondary leading-relaxed">
                Ser la empresa líder en el control integral de plagas con nuestros clientes empresarial, gubernamental, industrial y 
                residencial a nivel nacional, destacándonos por la excelencia operativa, el cumplimiento normativo y la 
                mejora continua de nuestros procesos.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div 
            ref={valuesRef}
            className={`bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow mb-12 sm:mb-16 animate-fade-in animate-delay-400 ${valuesVisible ? 'visible' : ''}`}
          >
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6 uppercase text-center">Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">1. Responsabilidad:</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Actuamos con integridad y seriedad cumpliendo con las normativas vigentes aplicables y los principios éticos en todos nuestros procesos.</p>
              </div>
              <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">2. Compromiso:</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Nos enfocamos en entregar un servicio eficiente, puntual y bien ejecutado, garantizando resultados mediante la excelencia operativa.</p>
              </div>
              <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">3. Sostenibilidad:</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Uso de métodos y productos que cuidan el entorno y reducen el impacto ambiental.</p>
              </div>
              <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">4. Innovación:</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Utilizamos tecnologías y métodos modernos para ofrecer soluciones más efectivas y menos invasivas.</p>
              </div>
              <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">5. Orientación al cliente:</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Trabajamos con enfoque en la satisfacción del cliente, brindando atención personalizada que generen confianza y fidelidad.</p>
              </div>
              <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">6. Trabajo en equipo:</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Fomentamos la colaboración y proactividad, el respeto mutuo y la comunicación efectiva entre todos los miembros de la organización.</p>
              </div>
            </div>
          </div>
          
          {/* Política de Calidad */}
          <div 
            ref={policyRef}
            className={`bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow max-w-4xl mx-auto animate-scale animate-delay-500 ${policyVisible ? 'visible' : ''}`}
          >
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 uppercase text-center">Política de la Calidad</h3>
            <p className="text-sm sm:text-base text-color-secondary leading-relaxed text-center">
              En Fumiplag nos comprometemos a brindar servicios de control de plagas con altos estándares de calidad, utilizando métodos innovadores y seguros que minimicen el impacto medioambiental, cumpliendo con las normativas legales aplicables que garanticen la salud de las personas y promuevan la sostenibilidad, respaldado por un equipo profesional altamente capacitado que mantiene un compromiso con la mejora continua de los procesos.
            </p>
          </div>
        </div>

        {/* ¿Por Qué Elegir FUMIPLAG? */}
        <div 
          ref={whyChooseRef}
          className={`text-center mb-12 sm:mb-16 animate-fade-in animate-delay-600 ${whyChooseVisible ? 'visible' : ''}`}
        >
          <h3 className="text-xl sm:text-2xl font-bold leading-tight tracking-tighter text-color-primary mb-4 uppercase">
            ¿Por Qué Elegir <span className="text-primary">FUMIPLAG</span>?
          </h3>
          <p className="text-base sm:text-lg text-color-secondary max-w-3xl mx-auto px-4">
            Con más de 16 años de experiencia, somos líderes en control de plagas en República Dominicana. 
            Utilizamos tecnología de vanguardia y productos certificados para garantizar resultados efectivos.
          </p>
        </div>

        <div 
          ref={featuresRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 animate-slide-up animate-delay-700 ${featuresVisible ? 'visible' : ''}`}
        >
          <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-color-primary mb-2">Servicio Garantizado</h3>
            <p className="text-sm sm:text-base text-color-secondary">Respaldamos nuestro trabajo con garantía completa de satisfacción.</p>
          </div>

          <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-color-primary mb-2">Productos Seguros</h3>
            <p className="text-sm sm:text-base text-color-secondary">Utilizamos productos certificados y seguros para la salud y el medio ambiente.</p>
          </div>

          <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-color-primary mb-2">Profesionales Expertos</h3>
            <p className="text-sm sm:text-base text-color-secondary">Personal altamente capacitado y certificado en control de plagas.</p>
          </div>

          <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-color-primary mb-2">Cobertura Nacional</h3>
            <p className="text-sm sm:text-base text-color-secondary">Servicio disponible en todo el territorio dominicano.</p>
          </div>
        </div>

        {/* Sección de Estadísticas */}
        <div className="bg-primary py-12 sm:py-16 rounded-lg mt-12 sm:mt-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div 
                ref={satisfactionRef}
                className={`text-black animate-counter animate-delay-800 ${satisfactionVisible ? 'visible' : ''}`}
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">{satisfactionValue}</div>
                <div className="text-base sm:text-lg font-medium">Satisfacción</div>
              </div>
              <div 
                ref={clientsRef}
                className={`text-black animate-counter animate-delay-900 ${clientsVisible ? 'visible' : ''}`}
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">{clientsValue}</div>
                <div className="text-base sm:text-lg font-medium">Clientes a nivel nacional</div>
              </div>
              <div 
                ref={hoursRef}
                className={`text-black animate-counter animate-delay-1000 ${hoursVisible ? 'visible' : ''}`}
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">{hoursValue}</div>
                <div className="text-base sm:text-lg font-medium">Horas de entrenamiento</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
