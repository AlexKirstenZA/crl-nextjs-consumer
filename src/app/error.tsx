'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'

export default function Error({
  error
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="mx-auto min-h-screen max-w-screen-md">
      <div className="px-6 sm:px-0 min-h-screen flex flex-col items-center justify-center">
        <div className="text-center relative px-12 py-8 font-sans border rounded-xl border-solid border-tertiary">
          <h1 className="text-4xl md:text-5xl font-bold">
            An error has occurred.
          </h1>
          <p className="mt-4">Please reload the page and try again.</p>
        </div>
      </div>
    </div>
  )
}
