import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Notification from '@/components/navigation/Notification'
import Navbar from '@/components/navigation/Navbar'
import Footer from '@/components/navigation/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Confident Speakers Academy | Perth WA',
  description: 'Helping you monetize your public speaking skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Notification />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
