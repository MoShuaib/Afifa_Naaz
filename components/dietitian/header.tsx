'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-foreground/10 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
        <Link href="#home" className="font-serif text-xl font-semibold tracking-tight text-foreground">
          Afifa Naaz<span className="text-primary">.</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <Link href="#about" className="transition-colors hover:text-foreground">About</Link>
          <Link href="#services" className="transition-colors hover:text-foreground">Services</Link>
          <Link href="#client-success" className="transition-colors hover:text-foreground">Stories</Link>
          {/* <Link href="#journal" className="transition-colors hover:text-foreground">Journal</Link> */}
          <Link href="#contact" className="transition-colors hover:text-foreground">Contact</Link>
        </nav>

        <Link
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 md:flex"
        >
          Book a consultation <ArrowUpRight className="size-4" />
        </Link>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
          className="rounded-full p-2 md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-5 border-t border-border bg-background px-5 py-6 text-sm md:hidden">
          <Link onClick={() => setOpen(false)} href="#about">About</Link>
          <Link onClick={() => setOpen(false)} href="#services">Services</Link>
          {/* <Link onClick={() => setOpen(false)} href="#journal">Journal</Link> */}
          <Link onClick={() => setOpen(false)} href="#contact">Contact</Link>
        </nav>
      )}
    </header>
  )
}

