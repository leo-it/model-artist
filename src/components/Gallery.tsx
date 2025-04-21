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

/* Para usar imágenes locales:
const images = [
  { id: 1, src: '/gallery/1.jpg', alt: 'Foto 1' },
  { id: 2, src: '/gallery/2.jpg', alt: 'Foto 2' },
  { id: 3, src: '/gallery/3.jpg', alt: 'Foto 3' },
  { id: 4, src: '/gallery/4.jpg', alt: 'Foto 4' },
  { id: 5, src: '/gallery/5.jpg', alt: 'Foto 5' },
  { id: 6, src: '/gallery/6.jpg', alt: 'Foto 6' },
]
*/

export default function Gallery() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
  )
} 