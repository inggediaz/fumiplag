'use client';

import { useState, ChangeEvent, FormEvent, useEffect } from 'react';

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
      // Continuar con el envío del formulario
      // Ejecutar reCAPTCHA v3
      if (!(window as any).grecaptcha) {
        throw new Error('reCAPTCHA no está cargado');
      }
      
      const token = await (window as any).grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {action: 'submit_contact'});
      setRecaptchaToken(token);
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
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
        
        // Resetear token
        setRecaptchaToken(null);
        
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

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter text-center text-color-primary mb-12 uppercase">
            Contáctenos
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-base font-medium text-color-primary pb-2" htmlFor="name">
                Nombre
              </label>
              <input
                className="form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary h-14 p-4 bg-secondary"
                id="name"
                name="name"
                placeholder="Su Nombre"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-base font-medium text-color-primary pb-2" htmlFor="email">
                Correo Electrónico
              </label>
              <input
                className="form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary h-14 p-4 bg-secondary"
                id="email"
                name="email"
                placeholder="Su Correo Electrónico"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-base font-medium text-color-primary pb-2" htmlFor="phone">
                Teléfono
              </label>
              <input
                className="form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary h-14 p-4 bg-secondary"
                id="phone"
                name="phone"
                placeholder="Su Teléfono"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-base font-medium text-color-primary pb-2" htmlFor="serviceType">
                Tipo de Servicio
              </label>
              <select
                className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary h-14 p-4 bg-secondary"
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
            <div>
              <label className="block text-base font-medium text-color-primary pb-2" htmlFor="message">
                Mensaje
              </label>
              <textarea
                className="form-textarea block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary p-4 bg-secondary"
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
              <div className="text-center p-4 bg-green-100 text-green-700 rounded-md">
                ¡Gracias por contactarnos! Te responderemos pronto.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="text-center p-4 bg-red-100 text-red-700 rounded-md">
                Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
              </div>
            )}
            <div className="text-center">
              <button
                className="flex min-w-[150px] mx-auto max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-primary text-black text-base font-bold leading-normal tracking-wide shadow-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
