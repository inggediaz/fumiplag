'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
  }

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
            <div className="text-center">
              <button
                className="flex min-w-[150px] mx-auto max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-primary text-black text-base font-bold leading-normal tracking-wide shadow-lg hover:opacity-90 transition-all"
                type="submit"
              >
                <span className="truncate">Enviar</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
