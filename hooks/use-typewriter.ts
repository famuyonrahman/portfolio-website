"use client"

import { useEffect, useState } from "react"

export function useTypewriter(text: string, speed = 50, startDelay = 300) {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    setDisplayedText("")
    setIsComplete(false)

    const startTimeout = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        i++
        setDisplayedText(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setIsComplete(true)
        }
      }, speed)

      return () => clearInterval(interval)
    }, startDelay)

    return () => clearTimeout(startTimeout)
  }, [text, speed, startDelay])

  return { displayedText, isComplete }
}
