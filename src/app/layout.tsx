import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Find Businesses Near You on Local Search Engine - Justdial',
  description: `Justdial, local search, travel, order food, grocery, medicines, online shopping, book tickets, movies, bus, flights, hotels, events, search plus services, local businesses, online yellow pages, India trade directory, city yellow pages, indian search engine, justdial customer care, customer support"`
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
