import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-screen overflow-hidden">
      <div className="relative h-full">
        <Image
          src="https://s0.smartresize.com/wallpaper/740/728/HD-wallpaper-cute-girl-art-girls-model-cute.jpg"
          alt="Chiara"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-7xl md:text-9xl font-bold mb-4">Chiara</h1>
            <p className="text-2xl md:text-3xl">Modelo</p>
          </div>
        </div>
      </div>
    </main>
  )
}
