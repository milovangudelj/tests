'use client'

import localFont from 'next/font/local'
import { ErrorBoundary, Outline } from '~/components'

import '~/styles/globals.css'

const inter = localFont({
  src: '../public/fonts/Inter-Variable.ttf',
  weight: '100 900',
  variable: '--font-inter',
})

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} text-white bg-black min-h-screen flex flex-col p-4 pt-0`}
      >
        <Outline type="error" title="app/global-error.tsx">
          <ErrorBoundary error={error} reset={reset} />
        </Outline>
      </body>
    </html>
  )
}
