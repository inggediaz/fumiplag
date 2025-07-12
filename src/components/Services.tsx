export default function Services() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter text-center text-color-primary mb-12 uppercase">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2">
            <div className="relative h-56 w-full">
              <img 
                src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Servicios Corporativos y Empresariales" 
                className="absolute h-full w-full object-cover" 
              />
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold text-color-primary mb-2">Corporativo</h3>
              <p className="text-base text-color-secondary">
                Protegemos la reputación y operatividad de su empresa, restaurante o centro de salud.
              </p>
            </div>
          </div>
          
          <div className="group flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2">
            <div className="relative h-56 w-full">
              <img 
                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Servicios Residenciales" 
                className="absolute h-full w-full object-cover" 
              />
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold text-color-primary mb-2">Residencial</h3>
              <p className="text-base text-color-secondary">
                Mantenemos su hogar, apartamento o condominio seguro y libre de plagas.
              </p>
            </div>
          </div>
          
          <div className="group flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2">
            <div className="relative h-56 w-full">
              <img 
                src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Servicios Industriales" 
                className="absolute h-full w-full object-cover" 
              />
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold text-color-primary mb-2">Industrial</h3>
              <p className="text-base text-color-secondary">
                Soluciones a gran escala para zonas francas, sector hotelero y alimenticio.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-secondary p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-center text-color-primary mb-6 uppercase">
            Catálogo de Servicios
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-color-secondary list-disc list-inside">
            <li>Control de Insectos Rastreros y Voladores</li>
            <li>Control de Roedores</li>
            <li>Tratamientos Especializados en Almacenes de Alimento</li>
            <li>Tratamientos Preventivos y Correctivos contra Termitas</li>
            <li>Control de Palomas</li>
            <li>Desinfección Ambiental</li>
            <li>Programas especializados para Hospitales y Hotelería</li>
            <li>Control de Vectores en el Sector Salud</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
