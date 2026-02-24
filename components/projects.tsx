"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const projects = [
  {
    title: "MOFE",
    category: "E-COMMERCE",
    description: "A body-inclusive fashion e-commerce store built to showcase and sell MOFE's clothing collections with a seamless shopping experience.",
    image: "/mofe.png",
    link: "https://mofe151.bumpa.shop/",
  },
  {
    title: "ONIYO",
    category: "WORDPRESS / LIFESTYLE BRAND",
    description: "A WordPress website for a creative agency that dreams, develops, and manages lifestyle and fashion brands across Nigeria.",
    image: "/oniyo.png",
    link: "https://oniyo.agency/",
  },
  {
    title: "TUBO WOMAN",
    category: "E-COMMERCE",
    description: "A clean fashion e-commerce store designed to display and sell Tubo Woman's curated collection of women's clothing and accessories.",
    image: "/tubo.png",
    link: "https://tubowoman.com/",
  },
]

export function Projects() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.15)
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1)

  return (
    <section id="work" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div
          ref={headerRef}
          className={`mb-16 text-center transition-all duration-700 ${
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            MY WORK
          </p>
          <h2 className="font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Brands I've Worked With
          </h2>
        </div>

        <div ref={gridRef} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 ${
                gridVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: gridVisible ? `${i * 150}ms` : "0ms" }}
            >
              {/* Large image area with hover overlay */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={i === 0 ? "/mofe.png" : i === 1 ? "/oniyo.png" : "/tubo.png"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  style={{ objectFit: "cover" }}
                />
                {/* Hover overlay */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-background/0 transition-all duration-500 group-hover:bg-background/70"
                >
                  <span className="group/btn relative flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground opacity-0 transition-all duration-500 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                    View Project
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </span>
                </a>
              </div>

              {/* Card content */}
              <div className="p-6">
                <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                  {project.category}
                </span>
                <h3 className="mb-2 font-mono text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
