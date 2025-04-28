'use client'

import Footer from '@/components/Footer'
import Image from 'next/image'
import PageContainer from '@/components/PageContainer'

export default function AcercaDePage() {
  return (
    <main className="min-h-screen">
      <PageContainer
        title="Acerca de"
        paddingTop="pt-[100px]"
        paddingBottom="pt-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px] w-full">
            <Image
              src="/gallery/about/IMG_8725.webp"
              alt="Chiara"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-6 text-white">
            <h1 className="text-4xl font-bold">Soy Chiara</h1>
            <p className="text-lg">
              Nací en 1998 en Córdoba, Argentina. Desde pequeña, el arte ha sido mi forma de expresarme y conectar con el mundo que me rodea.
            </p>
            <p className="text-lg">
              Me formé en la Universidad Nacional de las Artes (UNA) en Artes Dramáticas, donde descubrí mi pasión por la interpretación y el teatro. Esta experiencia me permitió desarrollar una sensibilidad especial para contar historias a través del movimiento y la expresión corporal.
            </p>
            <p className="text-lg">
              La danza ha sido parte de mi vida desde que tengo memoria. A lo largo de los años, he explorado diferentes estilos y técnicas, encontrando en cada uno una nueva forma de expresarme. Mi práctica en acrobacias y partner me ha enseñado la importancia de la confianza, tanto en mí misma como en mis compañeros, y me ha permitido desarrollar una fuerza y gracia que aplico en cada una de mis performances.
            </p>
            <p className="text-lg">
              Hoy, mi trabajo es una fusión de todas estas experiencias: teatro, danza y acrobacia se entrelazan para crear algo único. Cada movimiento, cada gesto, cada performance es una oportunidad para explorar nuevos límites y compartir mi visión del arte con el mundo.
            </p>
          </div>
        </div>
        <Footer />
      </PageContainer>
    </main>
  )
} 