import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { ThemeProvider } from '../components/theme-provider'

export const metadata: Metadata = {
  title: 'Adventurers Guild',
  description: 'Created with Adventure',
  generator: 'Adventurers',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans`} > 
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
