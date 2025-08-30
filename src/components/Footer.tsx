'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ComplaintsModal from "./ComplaintsModal";

export default function Footer() {
  const [isComplaintsModalOpen, setIsComplaintsModalOpen] = useState(false)
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 text-white mb-4">
              <Image
                src="/logo.png"
                alt="FUMIPLAG Pest Control"
                width={200}
                height={50}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-base text-gray-400 max-w-sm">
              Especialistas en control profesional de plagas con más de 16 años
              de experiencia en República Dominicana.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-primary uppercase">
              Enlaces Rápidos
            </h3>
            <nav className="flex flex-col gap-3">
              <Link
                className="text-base text-gray-300 hover:text-primary transition-colors"
                href="#hero"
              >
                Inicio
              </Link>
              <Link
                className="text-base text-gray-300 hover:text-primary transition-colors"
                href="#services"
              >
                Servicios
              </Link>
              <Link
                className="text-base text-gray-300 hover:text-primary transition-colors"
                href="#about"
              >
                Sobre Nosotros
              </Link>
              <Link
                className="text-base text-gray-300 hover:text-primary transition-colors"
                href="#contact"
              >
                Contacto
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-primary uppercase">
              Contacto
            </h3>
            <div className="flex flex-col gap-3 text-base text-gray-300">
              <div className="flex items-center gap-2">
                <span>📞</span>
                <div>
                  <p>829-294-0311</p>
                  <p>809-876-1370</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <p>contacto@fumiplagrd.do</p>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <p>República Dominicana</p>
              </div>
              <div className="flex items-center gap-2">
                <span>🕐</span>
                <p>
                  Lun-Vie: 8:00 AM - 6:00 PM
                  <br />
                  Sab: 8:00 AM - 2:00 PM
                </p>
              </div>
            </div>
            <div className="mt-6">
              <button
                onClick={() => setIsComplaintsModalOpen(true)}
                className="w-full mb-4 px-4 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-black transition-all font-medium text-center"
              >
                📝 Presentar Queja
              </button>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  className="text-gray-300 hover:text-primary transition-colors"
                  href="https://www.instagram.com/fumiplagrd"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p className="text-base">
            © 2025 FUMIPLAG. Todos los derechos reservados.
          </p>
        </div>
      </div>
      
      <ComplaintsModal 
        isOpen={isComplaintsModalOpen} 
        onClose={() => setIsComplaintsModalOpen(false)} 
      />
    </footer>
  );
}
