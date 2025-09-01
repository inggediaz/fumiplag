import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'

import Clients from '@/components/Clients'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTopButton from '@/components/ScrollToTopButton'

export default function Home() {
  return (
    <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
      <Clients />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  )
}
