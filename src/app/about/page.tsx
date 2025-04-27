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
          <div className="relative aspect-square">
            <Image
              src="https://s0.smartresize.com/wallpaper/740/728/HD-wallpaper-cute-girl-art-girls-model-cute.jpg"
              alt="Sobre mí"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <p className="text-lg mb-4">
              Soy Chiara, una modelo apasionada por el arte y la moda. Con más de 5 años de experiencia
              en el mundo del modelaje, he trabajado con diversos fotógrafos y marcas, desarrollando
              un estilo único y versátil.
            </p>
            <p className="text-lg mb-4">
              Mi objetivo es transmitir emociones y contar historias a través de cada sesión fotográfica,
              trabajando siempre con profesionalismo y dedicación.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Especialidades</h3>
              <ul className="space-y-2">
                <li>• Modelaje editorial</li>
                <li>• Modelaje de moda</li>
                <li>• Modelaje artístico</li>
                <li>• Modelaje comercial</li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </PageContainer>
    </main>
  )
} 