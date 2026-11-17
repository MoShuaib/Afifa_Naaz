'use client'

import { useEffect, useRef, useState } from 'react'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Mariam Al-Rashidi',
    location: 'Dubai, UAE',
    avatar: 'MA',
    condition: 'Disease-Specific Therapeutic Diet',
    rating: 5,
    text: "Afifa completely changed how I see food. I was terrified of eating after my Type 2 diagnosis, but she made everything feel manageable and even joyful. My HbA1c dropped from 9.1 to 6.4 in just four months — my doctor was amazed.",
  },
  {
    name: 'Priya Nair',
    location: 'Bangalore, India',
    avatar: 'PN',
    condition: 'Gut Health & Digestive Wellness',
    rating: 5,
    text: "I had been dealing with IBS for six years and had given up hope. Within eight weeks of working with Afifa, the bloating I had lived with every single day was almost completely gone. She never made me feel like my symptoms were dramatic — she just listened and acted.",
  },
  {
    name: 'Sarah O\'Brien',
    location: 'London, UK',
    avatar: 'SO',
    condition: 'Pre & Post Pregnancy Diet',
    rating: 5,
    text: "Afifa supported me through my entire second trimester and postpartum journey. She was so patient, so warm, and so knowledgeable. I finally understood what my body needed instead of just following generic advice. I felt strong even during the hardest weeks.",
  },
  {
    name: 'Fatima Zaheer',
    location: 'Karachi, Pakistan',
    avatar: 'FZ',
    condition: 'Metabolic Health & Hormone Balance',
    rating: 5,
    text: "Managing Hashimoto's always felt like fighting an uphill battle. Afifa put together a plan that actually worked with my thyroid — not against it. My energy levels have improved so much, and I've finally stopped gaining weight without understanding why.",
  },
  {
    name: 'Leila Moradi',
    location: 'Toronto, Canada',
    avatar: 'LM',
    condition: 'Weight Management Programs',
    rating: 5,
    text: "I had tried every diet imaginable. Afifa's approach was nothing like what I expected — no calorie counting, no forbidden foods, no guilt. Just honest, practical guidance that fit my life. I lost 11 kg over five months and I've kept it off. More importantly, I actually enjoy eating now.",
  },
  {
    name: 'Aarav Mehta',
    location: 'Mumbai, India',
    avatar: 'AM',
    condition: 'Disease-Specific Therapeutic Diet',
    rating: 5,
    text: "After my father's heart attack, I wanted to be proactive about my own heart health. Afifa educated me without overwhelming me. She explained exactly why certain foods matter and helped me build habits that fit my busy schedule. My cholesterol results three months later were the best of my life.",
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-4 fill-primary text-primary" />
      ))}
    </div>
  )
}

function AvatarCircle({ initials }: { initials: string }) {
  return (
    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary ring-2 ring-primary/20">
      {initials}
    </div>
  )
}

export function Testimonial() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const total = testimonials.length

  const goTo = (index: number) => {
    setCurrent((index + total) % total)
  }

  // Auto-advance
  useEffect(() => {
    if (paused) return
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % total)
    }, 4500)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [current, paused, total])

  return (
    <section
      id="client-success"
      className="relative overflow-hidden bg-secondary py-24 lg:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Soft background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute -right-20 top-1/3 h-64 w-64 rounded-full bg-accent/60 blur-2xl" />
      </div>

      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Real transformations from the journey so far.</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
            Client Feedback <em className="text-primary">for Afifa.</em>
          </h2>
        </div>

        {/* Card */}
        <div className="relative mt-14">
          <div className="overflow-hidden rounded-[2rem]">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="w-full shrink-0 px-2"
                >
                  <div className="relative rounded-[2rem] border border-border bg-background p-8 shadow-[0_24px_70px_-35px_hsl(var(--foreground))] sm:p-12">
                    {/* Large decorative quote */}
                    <Quote className="absolute right-10 top-8 size-16 rotate-180 text-primary/8 sm:size-24" />

                    <div className="relative grid gap-10 lg:grid-cols-[1fr_auto]">
                      {/* Text block */}
                      <div className="flex flex-col justify-between gap-8">
                        <div>
                          <StarRating count={t.rating} />
                          <p className="mt-6 text-lg leading-8 text-foreground/80 sm:text-xl sm:leading-9">
                            &ldquo;{t.text}&rdquo;
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <AvatarCircle initials={t.avatar} />
                          <div>
                            <p className="font-semibold text-foreground">{t.name}</p>
                            <p className="text-sm text-muted-foreground">{t.location}</p>
                          </div>
                          <span className="ml-auto hidden rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-xs font-semibold text-primary sm:block">
                            {t.condition}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next arrows */}
          <button
            onClick={() => goTo(current - 1)}
            aria-label="Previous testimonial"
            className="absolute -left-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background shadow-md transition-all hover:-translate-y-1/2 hover:border-primary/40 hover:text-primary sm:-left-6"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={() => goTo(current + 1)}
            aria-label="Next testimonial"
            className="absolute -right-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background shadow-md transition-all hover:-translate-y-1/2 hover:border-primary/40 hover:text-primary sm:-right-6"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-8 h-2.5 bg-primary'
                  : 'w-2.5 h-2.5 bg-primary/25 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        {/* Auto-play progress bar */}
        <div className="mx-auto mt-6 h-px max-w-xs overflow-hidden rounded-full bg-border">
          <div
            key={current}
            className="h-full rounded-full bg-primary"
            style={{
              animation: paused ? 'none' : 'progress 4.5s linear forwards',
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </section>
  )
}
