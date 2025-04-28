'use client'

import Image from 'next/image'
import ImageModal from '@/components/ImageModal'
import { useState } from 'react'

const images = [
  {
    id: 1,
    src: '/gallery/moda/IMG_8725.webp',
    alt: 'Moda 1',
    className: ''
  },
  {
    id: 2,
    src: '/gallery/moda/IMG_8727.webp',
    alt: 'Moda 2',
    className: 'vertical'
  },
  {
    id: 3,
    src: '/gallery/moda/IMG_8728.webp',
    alt: 'Moda 3',
    className: ''
  }
]

export default function ModaPage() {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null)

  return (
    <div className="min-h-screen pt-24 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[400px] max-w-[1200px] mx-auto grid-flow-dense">
        {images.map((image) => (
          <div
            key={image.id}
            className={`relative group overflow-hidden cursor-pointer ${
              image.className === 'vertical' ? 'md:row-span-2' :
              image.className === 'horizontal' ? 'md:col-span-2' :
              image.className === 'big' ? 'md:col-span-2 md:row-span-2' : ''
            }`}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          src={selectedImage.src}
          alt={selectedImage.alt}
        />
      )}
    </div>
  )
} 