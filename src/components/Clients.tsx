export default function Clients() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter text-center text-color-primary mb-12 uppercase">
          Algunos de nuestros clientes
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center grayscale opacity-60">
          <div className="flex justify-center">
            <img 
              src="/clientes-logo/rodos.png" 
              alt="Rodos" 
              className="h-12" 
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="/clientes-logo/logo-constructora-ldv.png" 
              alt="Constructora LDV" 
              className="h-12" 
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="/clientes-logo/caribbean-cinemas.png"
              alt="Caribbean Cinemas" 
              className="h-16" 
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="/clientes-logo/apec.png" 
              alt="UNPEC" 
              className="h-12" 
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="/clientes-logo/dominicana-de-seguros.png" 
              alt="Dominicana de Seguros" 
              className="h-12" 
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="/clientes-logo/erc.png" 
              alt="ERC" 
              className="h-12" 
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="/clientes-logo/alorica.png" 
              alt="Alorica" 
              className="h-10" 
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="/clientes-logo/banreservas.png" 
              alt="Banreservas" 
              className="h-10" 
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="/clientes-logo/bandex.png" 
              alt="Bandex" 
              className="h-12" 
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="/clientes-logo/europiel.png" 
              alt="Europiel" 
              className="h-10" 
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="/clientes-logo/moviti.png" 
              alt="Moviti (Volvo, Fiat)" 
              className="h-12" 
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="/clientes-logo/alma-iglesias.png" 
              alt="Alma Iglesias" 
              className="h-12" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}
