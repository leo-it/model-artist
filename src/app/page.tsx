'use client'

import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-screen overflow-hidden bg-black">
      <div className="relative h-full">
        <Image
          src="/gallery/home/IMG_8730.webp"
          alt="Chiara Modelo"
          fill
          className="object-cover object-[50%_20%] opacity-50"
          priority
        />
        <div className="absolute inset-0">
          <div className="absolute top-[150px] md:left-[240px] left-[140px] -translate-x-1/2">
            <h1 className="text-[60px] md:text-[80px] font-bold mb-4">Chiara</h1>
            <p className="text-[40px] md:text-[50px]">Modelo</p>
          </div>
        </div>
      </div>
    </main>
  )
}
