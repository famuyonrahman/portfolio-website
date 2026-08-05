import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from '@vercel/analytics/next'
import { Cursor } from '@/components/cursor'
import { Loader } from '@/components/loader'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: '--font-plus-jakarta-sans',
})

export const metadata: Metadata = {
  title: 'Abdulrahman Famuyon | Website Developer',
  description:
    'I build fast, clean websites and e-commerce stores for your brand or businness',
  openGraph: {
    title: 'Abdulrahman Famuyon — Developer',
    description:
      'I build fast, clean websites and e-commerce stores for your brand or businness.',
    url: 'https://abdulrahmanfamuyon.vercel.app',
    siteName: 'Abdulrahman Famuyon',
    images: [
      {
        url: '/spiceclubs.png',
        width: 1200,
        height: 630,
        alt: 'Abdulrahman Famuyon — Website Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdulrahman Famuyon — Website Developer',
    description:
      'I build fast, clean websites and e-commerce stores for your brand or businness.',
    images: ['/spiceclubs.png'],
  },
  icons: {
    icon: '/favicon-af.svg',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a2e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable} suppressHydrationWarning>
      <body className={plusJakartaSans.className} suppressHydrationWarning>
        <Loader />
        <Cursor />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
