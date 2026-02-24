"use client"

import { useEffect, useState, useRef } from "react"

export function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)
  const hoverCursorRef = useRef<HTMLDivElement>(null)
  
  // For smooth following with delay
  const smoothedPosition = useRef({ x: 0, y: 0 })
  const animationFrameId = useRef<number | null>(null)

  useEffect(() => {
    // Hide default cursor and show custom cursor
    document.body.style.cursor = "none"
    
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    // Check if element under cursor is interactive - only buttons and nav links
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      // Only show ring cursor on buttons and header navigation links
      const isButton = 
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.getAttribute("role") === "button"
      
      // Check if it's a header navigation link (not project card links)
      const isNavLink = 
        target.tagName === "A" && 
        target.closest("nav") &&
        !target.closest("article")
      
      const isInteractive = isButton || isNavLink
      
      setIsHovering(Boolean(isInteractive))
    }

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      document.body.style.cursor = "auto"
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  // Smooth animation loop for the cursor following effect
  useEffect(() => {
    const animate = () => {
      // Smooth interpolation (lerp) for delayed following effect
      const ease = 0.3
      smoothedPosition.current.x += (position.x - smoothedPosition.current.x) * ease
      smoothedPosition.current.y += (position.y - smoothedPosition.current.y) * ease

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${smoothedPosition.current.x}px, ${smoothedPosition.current.y}px)`
      }
      if (hoverCursorRef.current) {
        hoverCursorRef.current.style.transform = `translate(${smoothedPosition.current.x}px, ${smoothedPosition.current.y}px)`
      }

      animationFrameId.current = requestAnimationFrame(animate)
    }

    animationFrameId.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [position])

  if (!isVisible) return null

  return (
    <>
      {/* Main glowing dot cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <div 
          className={`h-2 w-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8),0_0_20px_rgba(255,255,255,0.5)] transition-transform duration-200 ease-out ${isHovering ? 'scale-0' : 'scale-100'}`}
        />
      </div>

      {/* Ring cursor for hover state */}
      <div
        ref={hoverCursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] mix-blend-difference"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <div 
          className={`rounded-full border-2 border-white bg-transparent transition-all duration-300 ease-out ${isHovering ? 'scale-[2.5] opacity-80' : 'scale-0 opacity-0'}`}
          style={{
            width: '24px',
            height: '24px',
          }}
        />
      </div>
    </>
  )
}
