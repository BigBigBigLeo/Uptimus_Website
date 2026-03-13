import type { Metadata } from 'next'
import { Outfit, Syne } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-inter' })
const syne = Syne({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'Uptimus - The Operating Layer for EV Charging',
  description: 'Uptimus helps EV charging operators achieve >99% uptime through AI-assisted maintenance and an on-demand technician network.',
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${outfit.variable} ${syne.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
