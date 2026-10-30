'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { InstagramIcon } from './instagram-icon'

// TODO: Replace with Afifa's Instagram profile URL
const INSTAGRAM_URL = '#'

export function Footer() {
  return (
    <footer className="overflow-hidden bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-16 lg:px-10 lg:pt-24">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr] lg:gap-10">
          {/* Brand */}
          <div className="lg:pr-10">
            <p className="font-serif text-3xl tracking-tight">
              Afifa Naaz<span className="text-accent">.</span>
            </p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-background/60">
              Personalised nutrition for a healthier, happier you — rooted in evidence, empathy, and real life.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Start your journey <ArrowUpRight className="size-4" />
            </a>
          </div>

          {/* Explore */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Explore</p>
            <nav className="mt-5 flex flex-col gap-3 text-sm text-background/65">
              <Link href="#about" className="transition-colors hover:text-background">About Afifa</Link>
              <Link href="#services" className="transition-colors hover:text-background">What we cover</Link>
              <Link href="#client-success" className="transition-colors hover:text-background">Client Feedback</Link>
              {/* <Link href="#journal" className="transition-colors hover:text-background">Journal</Link> */}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Connect</p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-background/65">
              <a href="mailto:dtafifa81@gmail.com" className="transition-colors hover:text-background">
                dtafifa81@gmail.com
              </a>
              <button
                onClick={() => window.location.href = '/api/whatsapp'}
                className="transition-colors hover:text-background text-left"
              >
                Chat on WhatsApp
              </button>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-background"
              >
                <InstagramIcon className="size-4" />
                Follow on Instagram
              </a>
            </div>
          </div>

          {/* Quote card */}
          <div className="rounded-3xl border border-background/15 bg-background/[0.06] p-6">
            <p className="font-serif text-2xl leading-tight">
              Small steps.<br /><em className="text-accent">Lasting change.</em>
            </p>
            <p className="mt-4 text-sm leading-6 text-background/55">
              Your body is listening. Let&apos;s make the next choice a kind one.
            </p>
          </div>
        </div>

        <div className="relative mt-20 border-t border-background/10 pt-8">
          <p className="pointer-events-none absolute -top-16 left-0 select-none whitespace-nowrap font-serif text-[clamp(5rem,17vw,15rem)] leading-none text-background/[0.035]">
            nourish
          </p>
          <div className="relative flex flex-col justify-between gap-4 text-xs text-background/45 sm:flex-row">
            <p>© 2026 Afifa Naaz. All rights reserved.</p>
            <p>Nutrition advice rooted in evidence and empathy.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

