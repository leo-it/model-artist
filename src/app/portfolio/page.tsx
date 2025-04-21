import Image from 'next/image'
import Link from 'next/link'

const categories = [
  {
    id: 1,
    title: 'Arte',
    href: '/arte',
    src: 'https://s0.smartresize.com/wallpaper/740/728/HD-wallpaper-cute-girl-art-girls-model-cute.jpg',
  },
  {
    id: 2,
    title: 'Partner',
    href: '/partner',
    src: 'https://s0.smartresize.com/wallpaper/740/728/HD-wallpaper-cute-girl-art-girls-model-cute.jpg',
  },
  {
    id: 3,
    title: 'Moda',
    href: '/moda',
    src: 'https://s0.smartresize.com/wallpaper/740/728/HD-wallpaper-cute-girl-art-girls-model-cute.jpg',
  },
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Portfolio</h1>
          <div className="grid grid-cols-3-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={category.href}
                className="group relative aspect-square overflow-hidden"
              >
                <Image
                  src={category.src}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h3 className="text-white text-3xl font-bold group-hover:scale-110 transition-transform">
                    {category.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 