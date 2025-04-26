import Image from 'next/image'
import Link from 'next/link'

const sections = [
  {
    id: 1,
    title: 'Arte',
    href: '/arte',
    image: 'https://s0.smartresize.com/wallpaper/740/728/HD-wallpaper-cute-girl-art-girls-model-cute.jpg'
  },
  {
    id: 2,
    title: 'Moda',
    href: '/moda',
    image: 'https://s0.smartresize.com/wallpaper/740/728/HD-wallpaper-cute-girl-art-girls-model-cute.jpg'
  },
  {
    id: 3,
    title: 'Partner',
    href: '/partner',
    image: 'https://s0.smartresize.com/wallpaper/740/728/HD-wallpaper-cute-girl-art-girls-model-cute.jpg'
  }
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-row md:flex-row h-screen">
        {sections.map((section) => (
          <Link 
            key={section.id} 
            href={section.href}
            className="relative w-full md:w-1/3 h-1/3 md:h-full group overflow-hidden"
          >
            <Image
              src={section.image}
              alt={section.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/30 transition-colors">
              <h2 className="text-white text-4xl font-bold">{section.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
} 