'use client'

import Footer from '@/components/Footer'
import PageContainer from '@/components/PageContainer'

export default function ContactPage() {
  return (
    <PageContainer
      title="Contacto"
      paddingTop="pt-[100px]"
      paddingBottom="pt-8"
    >
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors"
        >
          Enviar Mensaje
        </button>
      </form>
      <Footer />
    </PageContainer>
  )
} 