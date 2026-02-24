"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function About() {
  const { ref, isVisible } = useScrollAnimation(0.15)

  return (
    <section id="about" className="py-28 px-6">
      <div
        ref={ref}
        className={`mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            About Me
          </p>
          <h2 className="font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            About Me
          </h2>
        </div>

        <div className="space-y-5">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {"I'm Abdulrahman Famuyon, a website designer with hands-on experience building e-commerce stores and managing WordPress sites for lifestyle brands. I care about the details that matter, clean layouts, intuitive navigation, and designs that make people trust your brand the moment they land on the page. Whether you need an online store that converts or a brand website that tells your story, I bring the vision, the strategy, and the execution to make it happen."}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {["Shopify", "WordPress"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-foreground"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
