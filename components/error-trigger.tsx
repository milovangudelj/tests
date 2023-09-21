'use client'

import { Bug } from '@phosphor-icons/react'
import { useState } from 'react'

export const ErrorTrigger = ({
  message = 'An error occurred',
}: {
  message?: string
}) => {
  const [error, setError] = useState(false)

  if (error) throw new Error(message)

  return (
    <button
      title="Trigger an error"
      className="bg-red-950 text-red-500 rounded p-1 leading-none font-semibold text-sm hover:bg-red-900 transition"
      onClick={() => setError(true)}
    >
      <Bug size={16} />
    </button>
  )
}
