'use client'

import { useState } from 'react'
import { ArrowUpRight, Mail, MapPin, MessageCircle, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { InstagramIcon } from './instagram-icon'
import { SectionLabel } from './section-label'
import { services } from './data/services'
import { supabase } from '@/lib/supabase'

// TODO: Replace with Afifa's Instagram profile URL
const INSTAGRAM_URL = 'https://www.instagram.com/dtafifa?srtk=MXNtcmI4MTIxbmNwNw=='

type FormState = 'idle' | 'loading' | 'success' | 'error'

export function Contact() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    const { error } = await supabase.from('enquiries').insert([data])

    if (error) {
      setFormState('error')
      setErrorMsg(error.message)
    } else {
      setFormState('success')
      form.reset()
    }
  }

  return (
    <section id="contact" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.8fr_1fr] lg:gap-28 lg:px-10">
        {/* Left — contact info */}
        <div>
          <SectionLabel>Let&apos;s talk</SectionLabel>
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
            Your next chapter<br />
            <em className="text-primary">starts here.</em>
          </h2>
          <p className="mt-6 max-w-sm leading-7 text-muted-foreground">
            Tell me a little about what you&apos;re looking for. I&apos;ll be in touch within 1-2 working days.
          </p>

          <div className="mt-10 space-y-5 text-sm">
            <a href="mailto:dtafifa81@gmail.com" className="flex items-center gap-4 text-foreground transition-colors hover:text-primary">
              <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="size-5" />
              </span>
              <span className="font-medium">dtafifa81@gmail.com</span>
            </a>

            <button
              onClick={() => { window.location.href = '/api/whatsapp' }}
              className="flex items-center gap-4 text-foreground transition-colors hover:text-primary text-left"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MessageCircle className="size-5" />
              </span>
              <span className="font-medium">Chat on WhatsApp</span>
            </button>


            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-foreground transition-colors hover:text-primary"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <InstagramIcon className="size-5" />
              </span>
              <span className="font-medium">Follow on Instagram</span>
            </a>
            <div className="flex items-center gap-4 text-foreground">
              <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="size-5" />
              </span>
              <span className="font-medium">Online consultations, worldwide</span>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="relative rounded-[2rem] border border-border bg-card p-8 shadow-[0_12px_40px_-20px_hsl(var(--foreground))] sm:p-12">

          {/* Success state */}
          {formState === 'success' ? (
            <div className="flex flex-col items-center justify-center gap-5 py-10 text-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle className="size-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl">Message received!</h3>
              <p className="max-w-xs text-sm leading-7 text-muted-foreground">
                Thank you for reaching out. Afifa will be in touch within 1-2 working days.
              </p>
              <button
                onClick={() => setFormState('idle')}
                className="mt-2 text-sm font-semibold text-primary underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block text-sm font-medium text-foreground">
                  Your name
                  <input
                    required
                    name="name"
                    className="mt-2.5 w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
                    placeholder="Jane Smith"
                  />
                </label>
                <label className="block text-sm font-medium text-foreground">
                  Email address
                  <input
                    required
                    name="email"
                    type="email"
                    className="mt-2.5 w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="block text-sm font-medium text-foreground">
                What can I help with?
                <div className="relative mt-2.5">
                  <select
                    name="service"
                    className="w-full appearance-none rounded-xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
                  >
                    <option value="">Choose an area</option>
                    {services.map(s => <option key={s.title}>{s.title}</option>)}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-muted-foreground">
                    <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </label>

              <label className="block text-sm font-medium text-foreground">
                Tell me a little more
                <textarea
                  name="message"
                  rows={4}
                  className="mt-2.5 w-full resize-none rounded-xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
                  placeholder="Share what brought you here..."
                />
              </label>

              {/* Error banner */}
              {formState === 'error' && (
                <div className="flex items-center gap-3 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                  <AlertCircle className="size-4 shrink-0" />
                  {errorMsg || 'Something went wrong. Please try again.'}
                </div>
              )}

              <button
                type="submit"
                disabled={formState === 'loading'}
                className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formState === 'loading' ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send enquiry
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
