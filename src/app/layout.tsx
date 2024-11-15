import './globals.css'
import type { Metadata } from 'next'
import { Poppins as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vemplanejar.com.br'),
  title: {
    default: 'VemPlanejar',
    template: '%s | VemPlanejar',
    absolute: 'Planeje a sua vida financeira. | VemPlanejar',
  },
  description:
    'Vem Planejar a sua vida financeira, e tenha controle do seu dinheiro.',
  robots: {
    follow: true,
    index: true,
  },
  icons: {
    icon: './favicon.ico',
  },
  twitter: {
    card: 'summary_large_image',
  },
  openGraph: {
    title: 'Planeje a sua vida financeira. | VemPlanejar',
    description:
      'Vem Planejar a sua vida financeira, e tenha controle do seu dinheiro.',
    type: 'website',
    locale: 'pt-BR',
    url: 'https://vemplanejar.com.br/',
    siteName: 'VemPlanejar',
  },
}

type LayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html className={fontSans.variable} lang="pt" suppressHydrationWarning>
      <body>
        <div
          className={cn(
            'min-h-screen min-w-full bg-current font-sans antialiased',
          )}
        >
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  )
}
