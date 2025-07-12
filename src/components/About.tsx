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
    description: 'Personal certificado con más de 15 años de experiencia en el sector.'
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
    <section className="py-20 bg-secondary" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter text-center text-color-primary mb-6 uppercase">
            ¿Por Qué Elegir FUMIPLAG?
          </h2>
          <p className="text-lg text-color-secondary max-w-3xl mx-auto">
            Con más de 15 años de experiencia en control de plagas, somos la empresa líder en República Dominicana. 
            Utilizamos tecnología de vanguardia y productos certificados para garantizar resultados efectivos y duraderos.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              {feature.icon}
              <h3 className="text-xl font-bold text-color-primary mb-2">{feature.title}</h3>
              <p className="text-base text-color-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
