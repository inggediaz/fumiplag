'use client';

import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Cargar el script de reCAPTCHA v3 (invisible)
  useEffect(() => {
    // Cargar el script de Google reCAPTCHA v3
    const loadRecaptchaScript = () => {
      // Eliminar cualquier script previo de reCAPTCHA para evitar duplicados
      const existingScript = document.querySelector('script[src*="recaptcha/api.js"]');
      if (existingScript) {
        existingScript.remove();
      }
      
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      
      // Ocultar el badge de reCAPTCHA v3
      const style = document.createElement('style');
      style.innerHTML = '.grecaptcha-badge { visibility: hidden !important; }';
      document.head.appendChild(style);
    };

    loadRecaptchaScript();
    
    // Limpiar al desmontar
    return () => {
      const existingScript = document.querySelector('script[src*="recaptcha/api.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Ejecutar reCAPTCHA v3
      if (!(window as any).grecaptcha) {
        throw new Error('reCAPTCHA no está cargado');
      }
      
      const token = await (window as any).grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {action: 'submit_contact'});
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: token
        }),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        // Resetear el formulario
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceType: '',
          message: ''
        });
        
        // No es necesario resetear el token ya que ahora usamos directamente el valor
        
        // Cerrar mensaje de éxito después de un breve delay
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error enviando formulario:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.2 })
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.3 })
  const { elementRef: formRef, isVisible: formVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section 
      ref={sectionRef}
      className={`py-20 bg-white animate-fade-in ${sectionVisible ? 'visible' : ''}`} 
      id="contact"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 
            ref={titleRef}
            className={`text-3xl font-bold leading-tight tracking-tighter text-center text-color-primary mb-12 uppercase animate-slide-up animate-delay-100 ${titleVisible ? 'visible' : ''}`}
          >
            Contáctenos
          </h2>
          <form 
            ref={formRef}
            onSubmit={handleSubmit} 
            className={`space-y-6 animate-fade-in animate-delay-200 ${formVisible ? 'visible' : ''}`}
          >
            <div className={`animate-slide-up animate-delay-300 ${formVisible ? 'visible' : ''}`}>
              <label className="block text-base font-medium text-color-primary pb-2" htmlFor="name">
                Nombre
              </label>
              <input
                className="form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary h-14 p-4 bg-secondary transition-all duration-300 hover:shadow-md focus:shadow-lg"
                id="name"
                name="name"
                placeholder="Su Nombre"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={`animate-slide-up animate-delay-400 ${formVisible ? 'visible' : ''}`}>
              <label className="block text-base font-medium text-color-primary pb-2" htmlFor="email">
                Correo Electrónico
              </label>
              <input
                className="form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary h-14 p-4 bg-secondary transition-all duration-300 hover:shadow-md focus:shadow-lg"
                id="email"
                name="email"
                placeholder="Su Correo Electrónico"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={`animate-slide-up animate-delay-500 ${formVisible ? 'visible' : ''}`}>
              <label className="block text-base font-medium text-color-primary pb-2" htmlFor="phone">
                Teléfono
              </label>
              <input
                className="form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary h-14 p-4 bg-secondary transition-all duration-300 hover:shadow-md focus:shadow-lg"
                id="phone"
                name="phone"
                placeholder="Su Teléfono"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className={`animate-slide-up animate-delay-600 ${formVisible ? 'visible' : ''}`}>
              <label className="block text-base font-medium text-color-primary pb-2" htmlFor="serviceType">
                Tipo de Servicio
              </label>
              <select
                className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary h-14 p-4 bg-secondary transition-all duration-300 hover:shadow-md focus:shadow-lg"
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione el tipo de servicio</option>
                <option value="Residencial">Residencial</option>
                <option value="Empresarial">Empresarial</option>
              </select>
            </div>
            <div className={`animate-slide-up animate-delay-700 ${formVisible ? 'visible' : ''}`}>
              <label className="block text-base font-medium text-color-primary pb-2" htmlFor="message">
                Mensaje
              </label>
              <textarea
                className="form-textarea block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary p-4 bg-secondary transition-all duration-300 hover:shadow-md focus:shadow-lg"
                id="message"
                name="message"
                placeholder="Su Mensaje"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6 text-xs text-gray-500 text-center">
              Este sitio está protegido por reCAPTCHA v3 (invisible) y aplican las 
              <a href="https://policies.google.com/privacy" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer"> Políticas de Privacidad</a> y los
              <a href="https://policies.google.com/terms" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer"> Términos de Servicio</a> de Google.
            </div>
            
            {submitStatus === 'success' && (
              <div className="text-center p-4 bg-green-100 text-green-700 rounded-md animate-scale">
                ¡Gracias por contactarnos! Te responderemos pronto.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="text-center p-4 bg-red-100 text-red-700 rounded-md animate-scale">
                Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
              </div>
            )}
            <div className={`text-center animate-scale animate-delay-800 ${formVisible ? 'visible' : ''}`}>
              <button
                className="flex min-w-[150px] mx-auto max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-primary text-black text-base font-bold leading-normal tracking-wide shadow-lg hover:opacity-90 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                type="submit"
                disabled={isSubmitting}
              >
                <span className="truncate">
                  {isSubmitting ? 'Enviando...' : 'Enviar'}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
