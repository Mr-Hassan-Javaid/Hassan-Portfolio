import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Muhammad Hassan - Creative Technologist & Product Designer',
  description: 'I transform complex challenges into clear, intelligent, and impactful digital experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

