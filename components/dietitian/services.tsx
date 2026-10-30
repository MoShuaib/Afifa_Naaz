import { ArrowUpRight } from 'lucide-react'
import { SectionLabel } from './section-label'
import { services } from './data/services'

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionLabel>What we cover</SectionLabel>
            <h2 className="max-w-2xl font-serif text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              A more personal way to<br />
              <em className="text-primary">feel well.</em>
            </h2>
          </div>
          <p className="max-w-sm leading-7 text-muted-foreground">
            From everyday goals to complex health concerns, your plan is tailored with clarity, empathy, and evidence.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-[0_12px_35px_-28px_hsl(var(--foreground))] transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-accent lg:p-8"
            >
              <div className="flex items-start justify-between">
                <p className="font-mono text-xs tracking-widest text-primary">{service.icon}</p>
                <span className="rounded-full border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {index < 3 ? 'Goals' : index < 6 ? 'Wellbeing' : 'Specialist'}
                </span>
              </div>
              <h3 className="mt-12 max-w-[14rem] font-serif text-2xl leading-tight">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.text}</p>
              <div className="mt-8 flex items-center justify-between">
                <span className="h-px w-12 bg-primary/40 transition-all group-hover:w-20" />
                <ArrowUpRight className="size-5 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

