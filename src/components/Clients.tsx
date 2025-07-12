export default function Clients() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter text-center text-color-primary mb-12 uppercase">
          Nuestros Clientes
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center grayscale opacity-60">
          <div className="flex justify-center">
            <img 
              src="https://www.unapec.edu.do/wp-content/uploads/2022/10/logo-unapec-azul-300x112.png" 
              alt="UNAPEC" 
              className="h-12" 
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="https://www.banreservas.com/_catalogs/masterpage/reservas/img/logo-banreservas.png" 
              alt="Banreservas" 
              className="h-10" 
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="https://www.caribbeancinemas.com/globalassets/caribbean_cinemas_logo_blue.png" 
              alt="Caribbean Cinemas" 
              className="h-16" 
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="https://www.sb.gob.do/assets/img/logo-main.svg" 
              alt="Superintendencia de Bancos" 
              className="h-16" 
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="https://www.alorica.com/wp-content/uploads/2021/03/Alorica-logo-purple.svg" 
              alt="Alorica" 
              className="h-10" 
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="https://www.mescyt.gob.do/images/logo-footer.png" 
              alt="MESCYT" 
              className="h-16" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}
