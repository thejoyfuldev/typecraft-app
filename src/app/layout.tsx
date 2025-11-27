import { Providers } from '@/app/providers'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const interFont = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Typecraft',
    template: '%s | Typecraft',
  },
  description:
    'Typecraft empowers Air Force professionals with fast, accurate writing assistance. Generate and refine performance briefs, awards, and decorations with AI built for the mission.',
  authors: [
    { name: 'Typecraft AI Team', url: 'https://typecraft.app' },
  ],
  keywords: [
    'military writing assistant',
    'air force grammar checker',
    'military writing standards',
    'usaf writing style guide',
    'enlisted performance brief',
    'EPB',
    'officer performance brief',
    'OPB',
    'air and space achievement medal',
    'air and space commendation medal',
    'meritorious service medal',
    'military grammar',
    'writing compliance',
    'tone checker',
    'air force correspondence',
    'official memorandum',
    'usaf major performance area',
    'usaf airman leadership qualities',
    'typecraft',
    'ai writing assistant',
  ],
  metadataBase: new URL('https://typecraft.app'),
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://typecraft.app',
  },
  creator: 'Typecraft',
  publisher: 'Typecraft',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${interFont.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
