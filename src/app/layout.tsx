import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LayoutProvider from './layoutProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Components',
  description: 'A collection of interactive UI modules built with Next.js.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutProvider>
          
        {children}
        
        </LayoutProvider>
        </body>
    </html>
  )
}
