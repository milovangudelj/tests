import localFont from 'next/font/local'

import '~/styles/globals.css'
import { Navbar, Outline } from '~/components'
import { Metadata } from 'next'

const inter = localFont({
  src: '../public/fonts/Inter-Variable.ttf',
  weight: '100 900',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Test',
  description: 'Testing error boundaries and 404 pages',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} text-white bg-black min-h-screen flex flex-col p-4 pt-0`}
      >
        <Outline type="layout" title="app/layout.tsx">
          {children}
        </Outline>
      </body>
    </html>
  )
}
