import Link from 'next/link'
import { ArrowUpRight, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background pt-28 lg:pt-32">
      {/* Decorative background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-accent/60 blur-2xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.35]" aria-hidden="true">
          <defs>
            <pattern id="hero-dots" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.4" className="fill-primary/15" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 lg:grid-cols-[1fr_0.9fr] lg:px-10 lg:pb-32">
        {/* Left column */}
        <div className="max-w-xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-accent/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm backdrop-blur-sm">
            <Sparkles className="size-3.5" />
            Nutrition, made personal
          </p>

          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Feel at home
            <br />
            <em className="relative text-primary not-italic">
              in your body.
              {/* <svg
                className="absolute -bottom-2 left-0 h-3 w-full text-primary/40"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0,5 Q50,-2 100,5 T200,5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg> */}
            </em>
          </h1>

          <p className="mt-7 max-w-md text-base leading-7 text-muted-foreground">
            A kinder, more practical approach to nutrition. Together, we'll
            build habits that nourish your health and fit beautifully into
            your life.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
            >
              Book a consultation
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-foreground underline decoration-primary/50 underline-offset-8 transition-colors hover:text-primary"
            >
              Meet Afifa
            </Link>
          </div>

          <div className="mt-14 flex gap-8 border-t border-border pt-6 text-sm">
            <div>
              <p className="font-serif text-2xl text-foreground">10+</p>
              <p className="mt-1 text-muted-foreground">Areas we cover</p>
            </div>
            <div>
              <p className="font-serif text-2xl text-foreground">1:1</p>
              <p className="mt-1 text-muted-foreground">Personalised care</p>
            </div>
            <div>
              <p className="font-serif text-2xl text-foreground">100%</p>
              <p className="mt-1 text-muted-foreground">Evidence-led</p>
            </div>
          </div>
        </div>

        {/* Right column — portrait card */}
        <div className="relative mx-auto w-full max-w-md lg:ml-auto">
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-primary/20" />
          <div className="absolute -bottom-7 -left-7 h-32 w-32 rounded-full bg-accent" />
          <div className="absolute -right-4 bottom-10 h-16 w-16 rounded-full bg-primary/15 blur-md" />

          <div className="relative flex aspect-[4/5] flex-col items-center justify-center overflow-hidden rounded-[10rem_10rem_1.5rem_1.5rem] bg-gradient-to-br from-secondary via-secondary to-accent/40 p-10 text-center shadow-2xl shadow-primary/10 ring-1 ring-border/50">
            {/* subtle inner glow */}
            <div className="pointer-events-none absolute -top-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

            <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Your Dietitian
            </p>
            <h2 className="relative mt-8 font-serif text-[4.5rem] leading-[1.05] text-foreground sm:text-[5.5rem]">
              Afifa
              <br />
              <em className="text-primary">Naaz</em>
            </h2>

            {/* floating badge */}
            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-background/90 px-4 py-2 text-xs font-medium text-muted-foreground shadow-md backdrop-blur-sm">
              <span className="size-2 rounded-full bg-primary" />
              Available for new clients
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

