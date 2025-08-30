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
  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Misión, Visión y Valores */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter text-color-primary mb-12 uppercase">
            Sobre <span className="text-primary">FUMIPLAG</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Misión */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 uppercase">Misión</h3>
              <p className="text-color-secondary leading-relaxed">
                Brindar soluciones innovadoras de primera calidad en control y erradicación de plagas, 
                garantizando la eficiencia y resultados de nuestros servicios.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 uppercase">Visión</h3>
              <p className="text-color-secondary leading-relaxed">
                Ser la empresa número 1 en el control de plagas en República Dominicana y el Caribe 
                en el sector empresarial, industrial y residencial.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 uppercase">Nuestros Valores</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-color-secondary">
                <div className="text-center py-2">Compromiso</div>
                <div className="text-center py-2">Innovación</div>
                <div className="text-center py-2">Respeto</div>
                <div className="text-center py-2">Honestidad</div>
                <div className="text-center py-2">Puntualidad</div>
                <div className="text-center py-2">Trabajo en Equipo</div>
              </div>
            </div>
          </div>
        </div>

        {/* ¿Por Qué Elegir FUMIPLAG? */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold leading-tight tracking-tighter text-color-primary mb-4 uppercase">
            ¿Por Qué Elegir <span className="text-primary">FUMIPLAG</span>?
          </h3>
          <p className="text-lg text-color-secondary max-w-3xl mx-auto">
            Con más de 16 años de experiencia, somos líderes en control de plagas en República Dominicana. 
            Utilizamos tecnología de vanguardia y productos certificados para garantizar resultados efectivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-color-primary mb-2">Servicio Garantizado</h3>
            <p className="text-color-secondary">Respaldamos nuestro trabajo con garantía completa de satisfacción.</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-color-primary mb-2">Productos Seguros</h3>
            <p className="text-color-secondary">Utilizamos productos certificados y seguros para su familia y mascotas.</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-color-primary mb-2">Técnicos Expertos</h3>
            <p className="text-color-secondary">Personal altamente capacitado y certificado en control de plagas.</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-color-primary mb-2">Cobertura Nacional</h3>
            <p className="text-color-secondary">Servicio disponible en todo el territorio dominicano.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
