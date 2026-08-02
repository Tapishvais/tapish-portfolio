import './globals.css'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://tapishvais.dev'),
  title: {
    default: 'Tapish Vais — React Native & Full Stack Developer',
    template: '%s · Tapish Vais',
  },
  description:
    'Tapish Vais — React Native & Full Stack Developer building high-performance mobile applications, modern web platforms and AI-powered solutions.',
  keywords: [
    'Tapish Vais',
    'React Native Developer',
    'Full Stack Developer',
    'Next.js',
    'TypeScript',
    'Fintech',
    'AI',
    'Stripe',
    'Plaid',
    'iOS Developer',
    'Gurugram',
  ],
  authors: [{ name: 'Tapish Vais' }],
  creator: 'Tapish Vais',
  openGraph: {
    title: 'Tapish Vais — React Native & Full Stack Developer',
    description:
      'Building high-performance mobile applications, modern web platforms and scalable backend solutions.',
    url: 'https://tapishvais.dev',
    siteName: 'Tapish Vais',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tapish Vais — React Native & Full Stack Developer',
    description:
      'Building high-performance mobile applications, modern web platforms and scalable backend solutions.',
    creator: '@tapishvais',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
}

export const viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${display.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%237c3aed'/%3E%3Cstop offset='1' stop-color='%2306b6d4'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' rx='22' fill='url(%23g)'/%3E%3Ctext x='50' y='66' font-family='ui-sans-serif,system-ui' font-size='54' font-weight='800' text-anchor='middle' fill='white'%3ETV%3C/text%3E%3C/svg%3E"
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);',
          }}
        />
      </head>
      <body className="bg-background text-foreground font-sans antialiased selection:bg-violet-500/30 selection:text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
