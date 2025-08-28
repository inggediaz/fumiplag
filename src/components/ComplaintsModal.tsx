'use client'

import { useState, ChangeEvent, FormEvent, useEffect } from 'react'

interface ComplaintsModalProps {
  isOpen: boolean
  onClose: () => void
}

interface ComplaintFormData {
  name: string
  email: string
  phone: string
  serviceDate: string
  complaintType: string
  description: string
}

export default function ComplaintsModal({ isOpen, onClose }: ComplaintsModalProps) {
  const [formData, setFormData] = useState<ComplaintFormData>({
    name: '',
    email: '',
    phone: '',
    serviceDate: '',
    complaintType: '',
    description: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

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
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Ejecutar reCAPTCHA v3
      if (!(window as any).grecaptcha) {
        throw new Error('reCAPTCHA no está cargado')
      }
      
      const token = await (window as any).grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {action: 'submit_complaint'})
      setRecaptchaToken(token)
      
      // Continuar con el envío del formulario
      const response = await fetch('/api/complaints', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        }),
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        // Resetear el formulario
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceDate: '',
          complaintType: '',
          description: ''
        })
        
        // Resetear token
        setRecaptchaToken(null)
        
        // Cerrar modal después de un breve delay para mostrar el mensaje de éxito
        setTimeout(() => {
          onClose()
          setSubmitStatus('idle')
        }, 2000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error enviando queja:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-color-primary uppercase">
              Presentar Queja
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Cerrar modal"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-color-primary pb-2" htmlFor="complaint-name">
                Nombre Completo *
              </label>
              <input
                className="form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary h-12 p-3 bg-secondary"
                id="complaint-name"
                name="name"
                placeholder="Su nombre completo"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-color-primary pb-2" htmlFor="complaint-email">
                Correo Electrónico *
              </label>
              <input
                className="form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary h-12 p-3 bg-secondary"
                id="complaint-email"
                name="email"
                placeholder="su@email.com"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-color-primary pb-2" htmlFor="complaint-phone">
                Teléfono *
              </label>
              <input
                className="form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary h-12 p-3 bg-secondary"
                id="complaint-phone"
                name="phone"
                placeholder="(809) 000-0000"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-color-primary pb-2" htmlFor="service-date">
                Fecha del Servicio
              </label>
              <input
                className="form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary h-12 p-3 bg-secondary text-gray-900"
                id="service-date"
                name="serviceDate"
                type="date"
                value={formData.serviceDate}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-color-primary pb-2" htmlFor="complaint-type">
                Tipo de Queja *
              </label>
              <select
                className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary h-12 p-3 bg-secondary text-gray-900"
                id="complaint-type"
                name="complaintType"
                value={formData.complaintType}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione el tipo de queja</option>
                <option value="servicio-inefectivo">Servicio Inefectivo</option>
                <option value="personal-tecnico">Personal Técnico</option>
                <option value="facturacion">Facturación</option>
                <option value="puntualidad">Puntualidad</option>
                <option value="atencion-cliente">Atención al Cliente</option>
                <option value="otros">Otros</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-color-primary pb-2" htmlFor="complaint-description">
                Descripción de la Queja *
              </label>
              <textarea
                className="form-textarea block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary p-3 bg-secondary text-gray-900"
                id="complaint-description"
                name="description"
                placeholder="Describa detalladamente su queja o reclamo..."
                rows={4}
                value={formData.description}
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
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                ¡Queja enviada exitosamente! Nos pondremos en contacto contigo pronto.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {!recaptchaToken ? 'Por favor, completa el reCAPTCHA.' : 'Error al enviar la queja. Por favor, inténtalo de nuevo.'}
              </div>
            )}
            
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium"
                disabled={isSubmitting}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-3 bg-primary text-black rounded-md hover:opacity-90 transition-all font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Queja'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}