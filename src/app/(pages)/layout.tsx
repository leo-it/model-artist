export default function PagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-[800px] mx-auto px-4">
      {children}
    </div>
  )
} 