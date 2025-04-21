import Image from 'next/image'

const images = [
  {
    id: 1,
    src: 'https://s0.smartresize.com/wallpaper/740/728/HD-wallpaper-cute-girl-art-girls-model-cute.jpg',
    alt: 'Arte 1'
  },
  {
    id: 2,
    src: 'https://s0.smartresize.com/wallpaper/740/728/HD-wallpaper-cute-girl-art-girls-model-cute.jpg',
    alt: 'Arte 2'
  },
  {
    id: 3,
    src: 'https://s0.smartresize.com/wallpaper/740/728/HD-wallpaper-cute-girl-art-girls-model-cute.jpg',
    alt: 'Arte 3'
  },
  {
    id: 4,
    src: 'https://s0.smartresize.com/wallpaper/740/728/HD-wallpaper-cute-girl-art-girls-model-cute.jpg',
    alt: 'Arte 4'
  },
  {
    id: 5,
    src: 'https://s0.smartresize.com/wallpaper/740/728/HD-wallpaper-cute-girl-art-girls-model-cute.jpg',
    alt: 'Arte 5'
  },
  {
    id: 6,
    src: 'https://s0.smartresize.com/wallpaper/740/728/HD-wallpaper-cute-girl-art-girls-model-cute.jpg',
    alt: 'Arte 6'
  },
  {
    id: 7,
    src: 'https://s0.smartresize.com/wallpaper/740/728/HD-wallpaper-cute-girl-art-girls-model-cute.jpg',
    alt: 'Arte 7'
  },
  {
    id: 8,
    src: 'https://s0.smartresize.com/wallpaper/740/728/HD-wallpaper-cute-girl-art-girls-model-cute.jpg',
    alt: 'Arte 8'
  },
  {
    id: 9,
    src: 'https://s0.smartresize.com/wallpaper/740/728/HD-wallpaper-cute-girl-art-girls-model-cute.jpg',
    alt: 'Arte 9'
  },
  {
    id: 10,
    src: 'https://s0.smartresize.com/wallpaper/740/728/HD-wallpaper-cute-girl-art-girls-model-cute.jpg',
    alt: 'Arte 10'
  },
  {
    id: 11,
    src: 'https://s0.smartresize.com/wallpaper/740/728/HD-wallpaper-cute-girl-art-girls-model-cute.jpg',
    alt: 'Arte 11'
  },
  {
    id: 12,
    src: 'https://s0.smartresize.com/wallpaper/740/728/HD-wallpaper-cute-girl-art-girls-model-cute.jpg',
    alt: 'Arte 12'
  }
]

export default function ArtePage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Arte</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {images.map((image) => (
              <div key={image.id} className="relative aspect-square overflow-hidden group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 