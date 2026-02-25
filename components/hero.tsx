"use client"

import { ArrowDown } from "lucide-react"
import { useTypewriter } from "@/hooks/use-typewriter"

export function Hero() {
  const subheading = "I design websites that sell, inspire, and grow your brand."
  const { displayedText, isComplete } = useTypewriter(subheading, 35, 600)

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{ backgroundColor: "#3b82f6" }}
        aria-hidden="true"
      />

      <h1 
        className="hero-fade-slide-up mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        style={{ animationDelay: "0s" }}
      >
        Abdulrahman Famuyon
      </h1>

      <p 
        className="hero-fade-slide-up mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl lg:text-3xl" 
        style={{ animationDelay: "0.3s" }}
      >
        {displayedText}
        {!isComplete && (
          <span
            className="ml-0.5 inline-block w-[3px] animate-blink bg-primary align-middle"
            style={{ height: "1em" }}
          />
        )}
      </p>

      <p
        className="hero-fade-slide-up mt-5 text-sm tracking-wide text-muted-foreground/70"
        style={{ animationDelay: "0.5s" }}
      >
        Website Designer &middot; E-Commerce &middot; WordPress &middot; Lifestyle Brands
      </p>

      <div
        className="hero-fade-slide-up mt-10"
        style={{ animationDelay: "0.7s" }}
      >
        <a
          href="#work"
          className="rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
        >
          See My Work
        </a>
      </div>

      <a
        href="#about"
        className="hero-fade-slide-up mt-20 animate-bounce text-muted-foreground transition-colors hover:text-primary"
        style={{ animationDelay: "1s" }}
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  )
}
