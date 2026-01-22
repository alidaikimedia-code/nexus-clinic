import type { Metadata } from 'next'
import { Oswald, Chivo } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700'],
})

const chivo = Chivo({
  subsets: ['latin'],
  variable: '--font-chivo',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Nexus Clinic - Advanced Aesthetic & Medical Weight Loss',
  description: 'Ministry of Health (MOH) registered and compliant. Doctor-led. Non-surgical, results-focused care for face, skin, hair, and body in Kuala Lumpur.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${chivo.variable} scroll-smooth`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
