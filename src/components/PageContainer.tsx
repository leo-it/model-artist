import { ReactNode } from 'react'

interface PageContainerProps {
  children: ReactNode
  className?: string
  title?: string
  titleClassName?: string
  containerClassName?: string
  paddingTop?: string
  paddingBottom?: string
  maxWidth?: string
}

export default function PageContainer({ 
  children, 
  className = '',
  title,
  titleClassName = 'text-4xl md:text-5xl font-bold text-left',
  containerClassName = '',
  paddingTop = 'pt-[100px]',
  paddingBottom = '',
  maxWidth = 'max-w-[1200px]'
}: PageContainerProps) {
  return (
    <div className={`relative w-full ${containerClassName}`}>
      <div className={`${maxWidth} mx-auto px-4 sm:px-6 md:px-8 relative ${className}`}>
        {title && (
          <div className={paddingTop}>
            <h1 className={titleClassName}>{title}</h1>
          </div>
        )}
        <div className={paddingBottom}>
          {children}
        </div>
      </div>
    </div>
  )
} 