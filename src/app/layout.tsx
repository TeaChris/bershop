import { Providers } from '@/context/provider'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bermuda Store',
  description: 'Your Number One Shopping Site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden ${inter.className}`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
