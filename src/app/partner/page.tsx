'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'
import ImageModal from '@/components/ImageModal'
import Papa from 'papaparse'

interface ParsedResult {
  data: Array<{
    ID: string;
    Nombre: string;
    URL: string;
    Clase: string;
  }>;
}

const images = [
  {
    id: 1,
    src: 'https://s0.smartresize.com/wallpaper/740/728/HD-wallpaper-cute-girl-art-girls-model-cute.jpg',
    alt: 'Partner 1',
    className: ''
  },
  {
    id: 2,
    src: 'https://s0.smartresize.com/wallpaper/740/728/HD-wallpaper-cute-girl-art-girls-model-cute.jpg',
    alt: 'Partner 2',
    className: 'vertical'
  },
  {
    id: 3,
    src: 'https://s0.smartresize.com/wallpaper/740/728/HD-wallpaper-cute-girl-art-girls-model-cute.jpg',
    alt: 'Partner 3',
    className: 'horizontal'
  },
  {
    id: 4,
    src: 'https://s0.smartresize.com/wallpaper/740/728/HD-wallpaper-cute-girl-art-girls-model-cute.jpg',
    alt: 'Partner 4',
    className: ''
  },
  {
    id: 5,
    src: 'https://s0.smartresize.com/wallpaper/740/728/HD-wallpaper-cute-girl-art-girls-model-cute.jpg',
    alt: 'Partner 5',
    className: 'big'
  },
  {
    id: 6,
    src: 'https://s0.smartresize.com/wallpaper/740/728/HD-wallpaper-cute-girl-art-girls-model-cute.jpg',
    alt: 'Partner 6',
    className: ''
  },
  {
    id: 7,
    src: 'https://s0.smartresize.com/wallpaper/740/728/HD-wallpaper-cute-girl-art-girls-model-cute.jpg',
    alt: 'Partner 7',
    className: 'vertical'
  },
  {
    id: 8,
    src: 'https://s0.smartresize.com/wallpaper/740/728/HD-wallpaper-cute-girl-art-girls-model-cute.jpg',
    alt: 'Partner 8',
    className: ''
  }
]

export default function PartnerPage() {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null)

   /*  async function getLinks() {
      const response = await fetch('https://docs.google.com/spreadsheets/d/1agWuGKkpmyz-Jr6rqgjV1tr6rT4FOPqZBuuEbcqa0Qs/export?format=csv')
      const data = await response.text()
      const parsedData = await new Promise<ParsedResult>((resolve, reject) => {
        Papa.parse(data, {
          header: true,
          complete: resolve,
          error: reject
        })
      })
      return parsedData
    }
    getLinks()
 */
  return (
    <main className="min-h-screen p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[300px] max-w-[1200px] mx-auto grid-flow-dense">
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