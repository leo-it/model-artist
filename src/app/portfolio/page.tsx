import Image from 'next/image'
import Link from 'next/link'
import PageContainer from '@/components/PageContainer'

const sections = [
  {
    id: 1,
    title: 'Arte',
    href: '/arte',
    image: '/gallery/portfolio/art.JPG'
  },
  {
    id: 2,
    title: 'Moda',
    href: '/moda',
    image: '/gallery/portfolio/mod.JPG'
  },
  {
    id: 3,
    title: 'Partner',
    href: '/partner',
    image: '/gallery/portfolio/partner.JPG'
  }
]

const PortfolioSection = ({ section }: { section: typeof sections[0] }) => (
  <Link 
    href={section.href}
    className="relative w-full h-[300px] md:h-[calc(100vh-200px)] group overflow-hidden"
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
)

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <PageContainer
        title="Trabajo reciente"
        paddingTop="pt-[100px]"
        paddingBottom="pt-8"
      >
        <div className="flex flex-col md:flex-row gap-2.5">
          {sections.map((section) => (
            <PortfolioSection key={section.id} section={section} />
          ))}
        </div>
      </PageContainer>
    </main>
  )
} 