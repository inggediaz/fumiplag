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
              src="/apec.png" 
              alt="UNAPEC" 
              className="h-12" 
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="/banreservas.png" 
              alt="Banreservas" 
              className="h-10" 
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="/caribbean-cinemas.png" 
              alt="Caribbean Cinemas" 
              className="h-16" 
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="/superintendencia-de-bancos.png" 
              alt="Superintendencia de Bancos" 
              className="h-16" 
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="/alorica.png" 
              alt="Alorica" 
              className="h-10" 
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="/mescyt.png" 
              alt="MESCYT" 
              className="h-16" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}
