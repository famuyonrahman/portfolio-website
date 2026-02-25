"use client"

import { ShoppingCart, Globe, LayoutTemplate } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    icon: ShoppingCart,
    title: "E-Commerce Store Design",
    description:
      "Your products deserve more than a template. I build custom Shopify and WooCommerce stores with beautiful product pages, streamlined checkout flows, and a shopping experience that keeps customers coming back. Every detail is designed to reduce friction and increase average order value.",
  },
  {
    icon: Globe,
    title: "WordPress Sites for Brands",
    description:
      "A website that looks incredible and is actually easy for your team to update. I build WordPress sites with clean, intuitive dashboards, lightning-fast page speeds, and SEO baked in from day one, so your brand shows up where it matters and stays current effortlessly.",
  },
  {
    icon: LayoutTemplate,
    title: "Landing Pages That Convert",
    description:
      "Launching a new product, running a campaign, or building a waitlist? I design single-purpose landing pages that guide visitors toward one clear action, whether that is signing up, pre-ordering, or booking a call. No distractions, just results.",
  },
]

export function Services() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.15)
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1)

  return (
    <section id="services" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div
          ref={headerRef}
          className={`mb-16 text-center transition-all duration-700 ${
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            How I Can Help
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Design That Works as Hard as You Do
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Every project starts with understanding your brand, your customers,
            and what success looks like for you. Here{"'"}s what I bring to the table.
          </p>
        </div>

        <div ref={cardsRef} className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <article
              key={service.title}
              className={`group rounded-xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 ${
                cardsVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: cardsVisible ? `${i * 150}ms` : "0ms" }}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
