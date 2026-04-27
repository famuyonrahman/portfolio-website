"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function About() {
  const { ref, isVisible } = useScrollAnimation(0.15)

  return (
    <section id="about" className="py-28 px-6">
      <div
        ref={ref}
        className={`mx-auto grid max-w-6xl items-center gap-12 sm:grid-cols-2 lg:grid-cols-2 transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            About Me
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            About Me
          </h2>
        </div>

        <div className="space-y-5">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {"I'm Abdulrahman Famuyon, a website developer who builds websites that suit your needs. Whether you're a growing brand, a small business or an entrepreneur with a vision, I create clean, fast and functional websites tailored specifically to you. Every project I take on is built with purpose, designed to look great, perform well and deliver real results for your business."}
          </p>
        </div>
      </div>
    </section>
  )
}
