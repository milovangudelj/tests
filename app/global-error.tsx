'use client'

import localFont from 'next/font/local'
import { useEffect } from 'react'

import { Outline } from '~/components'

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
  useEffect(() => {
    console.log('GlobalError mounted')
    return () => {
      console.log('GlobalError unmounted')
    }
  }, [])

  const resetHandler = () => {
    console.log('Attempting to recover from error')
    reset()
  }

  const handleRefresh = () => {
    console.log('Refreshing the page')
    window.location.reload()
  }

  return (
    <html lang="en">
      <body
        className={`${inter.variable} text-white bg-black min-h-screen flex flex-col p-4 pt-0`}
      >
        <Outline type="error" title="app/global-error.tsx">
          <div>
            <h2 className="mb-8">{'Something went wrong!'}</h2>
            <div className="flex items-center gap-4">
              <button
                onClick={
                  // Attempt to recover by trying to re-render the segment
                  resetHandler
                }
                className="bg-zinc-50 w-fit text-black font-semibold rounded px-4 py-2 hover:bg-zinc-100 focus-within:bg-zinc-300 transition"
              >
                Try again
              </button>
              <div className="flex items-center gap-1">
                <span className="bg-white/20 block h-px w-2"></span>
                <span className="text-sm text-white/70">or</span>
                <span className="bg-white/20 block h-px w-2"></span>
              </div>
              <button
                onClick={
                  // Reload the page
                  handleRefresh
                }
                className="bg-transparent shadow-[inset_0_0_0_2px] shadow-white w-fit text-white font-semibold rounded px-4 py-2 hover:bg-white/10 focus-within:bg-white/20 transition"
              >
                Reload the page
              </button>
            </div>
          </div>
        </Outline>
      </body>
    </html>
  )
}
