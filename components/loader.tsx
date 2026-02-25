"use client"

import { useState, useEffect } from "react"

export function Loader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-background">
      <div className="animate-pulse text-5xl font-bold tracking-widest text-white">
        AF
      </div>
    </div>
  )
}
