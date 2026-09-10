import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Mono, DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const dmSerif = DM_Serif_Display({ subsets: ['latin'], weight: '400', variable: '--font-dm-serif' })
const dmMono = DM_Mono({ subsets: ['latin'], weight: '400', variable: '--font-dm-mono' })

export const metadata: Metadata = {
  title: 'Afifa Naaz | Dietitian & Nutritionist',
  description: 'Personalised, evidence-led nutrition care for a healthier, happier you.',
  keywords: ['dietitian', 'nutritionist', 'gut health', 'diabetes educator', 'Afifa Naaz'],
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f7f6ef' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className={`${dmSans.variable} ${dmSerif.variable} ${dmMono.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
