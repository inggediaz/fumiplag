import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FUMIPLAG - Expertos en Control de Plagas',
  description: 'Soluciones innovadoras para el manejo integrado de plagas urbanas. Protegemos su hogar, negocio e industria con más de 15 años de experiencia.',
  keywords: 'control de plagas, fumigación, desinfección, República Dominicana, Santo Domingo',
  openGraph: {
    title: 'FUMIPLAG - Expertos en Control de Plagas',
    description: 'Soluciones innovadoras para el manejo integrado de plagas urbanas.',
    type: 'website',
    locale: 'es_DO',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-DO">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="bg-white font-sans">
        {children}
      </body>
    </html>
  )
}
