import { ReactNode } from 'react'

interface PageContainerProps {
  children: ReactNode
  className?: string
}

export default function PageContainer({ children, className = '' }: PageContainerProps) {
  return (
    <div className="relative w-full">
      <div className={`max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 relative ${className}`}>
        {children}
      </div>
    </div>
  )
} 