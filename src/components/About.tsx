import Image from 'next/image'

export default function About() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square">
            {/* Para usar una imagen local:
            <Image
              src="/about.jpg"
              alt="Sobre mí"
              fill
              className="object-cover rounded-lg"
            /> */}
            <Image
              src="https://s0.smartresize.com/wallpaper/740/728/HD-wallpaper-cute-girl-art-girls-model-cute.jpg"
              alt="Sobre mí"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">Sobre Mí</h2>
            <p className="text-lg mb-4">
              Soy un fotógrafo apasionado por capturar la esencia y la belleza en cada momento.
              Con más de 10 años de experiencia en el mundo de la fotografía, he desarrollado
              un estilo único que combina la técnica con la creatividad.
            </p>
            <p className="text-lg mb-4">
              Mi objetivo es crear imágenes que cuenten historias y evoquen emociones,
              trabajando siempre con la mejor calidad y atención al detalle.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2">
                <li>• Fotografía de retrato</li>
                <li>• Fotografía de moda</li>
                <li>• Fotografía de producto</li>
                <li>• Fotografía de eventos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 