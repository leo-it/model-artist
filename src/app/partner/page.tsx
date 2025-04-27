'use client'

import Image from 'next/image'
import ImageModal from '@/components/ImageModal'
import { useState } from 'react'

const images = [
  {
    id: 1,
    src: '/gallery/partner/IMG_7091.JPG',
    alt: 'Partner 1',
    className: ''
  },
  {
    id: 2,
    src: '/gallery/partner/IMG_7089.JPG',
    alt: 'Partner 2',
    className: 'vertical'
  },
  {
    id: 3,
    src: '/gallery/partner/IMG_7084.JPG',
    alt: 'Partner 3',
    className: ''
  }
]

export default function PartnerPage() {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null)

  return (
    <main className="h-full pt-24 p-4">
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
    </main>
  )
} 