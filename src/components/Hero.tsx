import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      <div className="absolute inset-0">
        {/* Para usar una imagen local:
        <Image
          src="/hero-bg.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        /> */}
        <Image
          src="https://s0.smartresize.com/wallpaper/740/728/HD-wallpaper-cute-girl-art-girls-model-cute.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">
          Model Art
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-2xl">
          Capturando momentos únicos a través de la lente
        </p>
      </div>
    </section>
  )
} 