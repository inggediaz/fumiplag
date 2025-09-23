'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const servicePhotos = [
  {
    id: 1,
    image: '/servicios-realizados/IMG_4172.jpg',
    title: 'Desinfección Especializada',
    description: 'Tratamientos de desinfección avanzados'
  },
  {
    id: 2,
    image: '/servicios-realizados/IMG_4185.jpg',
    title: 'Control de Roedores',
    description: 'Eliminación efectiva de roedores'
  },
  {
    id: 3,
    image: '/servicios-realizados/IMG_4208.jpg',
    title: 'Tratamiento contra Termitas',
    description: 'Protección estructural especializada'
  },
  {
    id: 4,
    image: '/servicios-realizados/IMG_4232.jpg',
    title: 'Fumigación Residencial',
    description: 'Servicio profesional en hogares'
  },
  {
    id: 5,
    image: '/servicios-realizados/IMG_4267.jpg',
    title: 'Control de Plagas Comercial',
    description: 'Soluciones para empresas'
  },
  {
    id: 6,
    image: '/servicios-realizados/IMG_4253.jpg',
    title: 'Desinfección Industrial',
    description: 'Tratamientos para industrias'
  },
  {
    id: 7,
    image: '/servicios-realizados/IMG_4378.jpg',
    title: 'Control de Vectores',
    description: 'Eliminación de insectos vectores'
  },
  {
    id: 8,
    image: '/servicios-realizados/IMG_4391.jpg',
    title: 'Fumigación Preventiva',
    description: 'Tratamientos preventivos especializados'
  },
  {
    id: 9,
    image: '/servicios-realizados/IMG_4392.jpg',
    title: 'Control de Aves',
    description: 'Manejo especializado de aves'
  },
  {
    id: 10,
    image: '/servicios-realizados/IMG_4412.jpg',
    title: 'Desinfección Hospitalaria',
    description: 'Protocolos para sector salud'
  },
  {
    id: 11,
    image: '/servicios-realizados/IMG_4558.jpg',
    title: 'Control Integral',
    description: 'Soluciones completas de control'
  },
  {
    id: 12,
    image: '/servicios-realizados/IMG_4592.jpg',
    title: 'Fumigación Especializada',
    description: 'Tratamientos técnicos avanzados'
  }
];

export default function Services() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.3 });
  const { elementRef: servicesRef, isVisible: servicesVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const { elementRef: catalogRef, isVisible: catalogVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const { elementRef: carouselRef, isVisible: carouselVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          ref={titleRef}
          className={`text-3xl font-bold leading-tight tracking-tighter text-center text-color-primary mb-12 uppercase animate-fade-in ${
            titleVisible ? 'visible' : ''
          }`}
        >
          Nuestros Servicios
        </h2>
        <div 
          ref={servicesRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in animate-delay-200 ${
            servicesVisible ? 'visible' : ''
          }`}
        >
          <div className="group flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2">
            <div className="relative h-56 w-full">
              <img 
                src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Servicios Comerciales - Edificio Corporativo" 
                className="absolute h-full w-full object-cover" 
              />
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold text-color-primary mb-2">Comercial</h3>
              <p className="text-base text-color-secondary">
                Protegemos la reputación y operatividad de su empresa, restaurante o centro de salud.
              </p>
            </div>
          </div>
          
          <div className="group flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2">
            <div className="relative h-56 w-full">
              <img 
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Servicios Residenciales - Sala Familiar" 
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
                src="https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Servicios Industriales - Nave Industrial" 
                className="absolute h-full w-full object-cover" 
              />
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold text-color-primary mb-2">Industrial</h3>
              <p className="text-base text-color-secondary">
                Soluciones integrales de alta calidad para zonas francas, sector hotelero y alimenticio apoyados en una gestión por procesos con estándares internacionales.
              </p>
            </div>
          </div>
        </div>
        

        
        <div 
          ref={catalogRef}
          className={`mt-12 bg-secondary p-8 rounded-lg animate-slide-up animate-delay-400 ${
            catalogVisible ? 'visible' : ''
          }`}
        >
          <h3 className="text-2xl font-bold text-center text-color-primary mb-6 uppercase">
            Catálogo de Servicios
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-color-secondary list-disc list-inside">
            <li>Control de Insectos Rastreros y Voladores</li>
            <li>Control de Roedores</li>
            <li>Tratamientos Especializados en Almacenes de Alimento</li>
            <li>Tratamientos Preventivos y Correctivos contra Termitas</li>
            <li>Control de Aves</li>
            <li>Desinfección Ambiental</li>
            <li>Programas especializados para Hospitales y Hotelería</li>
            <li>Control de Vectores en el Sector Salud</li>
          </ul>
        </div>

                {/* Carrusel de Fotos de Servicios Realizados */}
        <div 
          ref={carouselRef}
          className={`mt-16 mb-12 animate-fade-in animate-delay-600 ${
            carouselVisible ? 'visible' : ''
          }`}
        >
          <h3 className="text-2xl font-bold text-center text-color-primary mb-8 uppercase">
            Servicios Realizados
          </h3>
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              className="pb-12"
            >
              {servicePhotos.map((photo) => (
                <SwiperSlide key={photo.id}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-80 flex flex-col">
                    <div className="relative h-48 overflow-hidden flex-shrink-0">
                      <img 
                        src={photo.image} 
                        alt={photo.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 flex-grow flex flex-col justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-color-primary mb-2 line-clamp-2">
                          {photo.title}
                        </h4>
                        <p className="text-sm text-color-secondary line-clamp-3">
                          {photo.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev-custom absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full shadow-lg p-2 cursor-pointer hover:bg-gray-50 transition-colors duration-200">
              <svg className="w-5 h-5 text-color-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="swiper-button-next-custom absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full shadow-lg p-2 cursor-pointer hover:bg-gray-50 transition-colors duration-200">
              <svg className="w-5 h-5 text-color-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
