import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-screen overflow-hidden bg-black">
      <div className="relative h-full">
        <Image
          src="https://s0.smartresize.com/wallpaper/740/728/HD-wallpaper-cute-girl-art-girls-model-cute.jpg"
          alt="Chiara"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0">
          <div className="absolute top-[100px] left-[200px] -translate-x-1/2 ">
            <h1 className="text-[60px] md:text-[50px] font-bold mb-4">Chiara</h1>
            <p className="text-[30px] md:text-[20px]">Modelo</p>
          </div>
        </div>
      </div>
    </main>
  )
}
