'use client' // Error components must be Client Components

import { useEffect } from 'react'

import { ErrorBoundary, Outline } from '~/components'

export default function ProductsError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <Outline type="error" title="app/(dashboard)/error.tsx">
      <ErrorBoundary
        title="Something went wrong while loading your dashboard!"
        error={error}
        reset={reset}
      />
    </Outline>
  )
}
