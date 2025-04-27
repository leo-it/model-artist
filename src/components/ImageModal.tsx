'use client'

import Image from 'next/image'
import { useEffect } from 'react'

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  src: string
  alt: string
}

export default function ImageModal({ isOpen, onClose, src, alt }: ImageModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <div className="relative w-full h-full max-w-7xl max-h-[90vh] p-4">
        <button 
          className="absolute top-4 right-4 text-white text-4xl z-10"
          onClick={onClose}
        >
          
        </button>
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  )
} 