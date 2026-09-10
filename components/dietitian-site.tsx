'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Mail, MapPin, Menu, MessageCircle, Phone, Quote, Sparkles, X } from 'lucide-react'

const services = [
  { title: 'Fat Loss', text: 'Sustainable nutrition that works with your body, habits, and real life.', icon: '01' },
  { title: 'Muscle Gain', text: 'Strategic nourishment to help you build strength with confidence.', icon: '02' },
  { title: 'Diabetes Management', text: 'Personalised support for Type 1, Type 2, and gestational diabetes.', icon: '03' },
  { title: 'Cardiovascular Health', text: 'Heart-smart eating without giving up the joy of food.', icon: '04' },
  { title: 'Fatty Liver', text: 'Practical, compassionate guidance to support liver health.', icon: '05' },
  { title: 'Thyroid Management', text: 'Clear nutrition support for thyroid health and everyday energy.', icon: '06' },
  { title: 'Pre & Post Pregnancy Diet', text: 'Nourishment through preconception, pregnancy, and postpartum.', icon: '07' },
  { title: 'Gut Health', text: 'Gentle, evidence-led care for IBS, IBD, ulcers, H. pylori, Crohn’s, and SIBO.', icon: '08' },
  { title: 'Hyperuricemia', text: 'Food-first support for healthier uric acid levels and wellbeing.', icon: '09' },
]

const articles = [
  { category: 'Gut health', title: 'The gentle way to start supporting your gut', date: '6 min read', image: '/article-gut-health.png' },
  { category: 'Everyday nutrition', title: 'Why your healthy diet should still feel like you', date: '4 min read', image: '/article-everyday-nutrition.png' },
  { category: 'Mother & baby', title: 'Nourishing yourself through the fourth trimester', date: '7 min read', image: '/article-mother-baby.png' },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary"><span className="h-px w-8 bg-primary" />{children}</p>
}

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-foreground/10 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
        <Link href="#home" className="font-serif text-xl font-semibold tracking-tight text-foreground">Afifa Naaz<span className="text-primary">.</span></Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <Link href="#about" className="transition-colors hover:text-foreground">About</Link>
          <Link href="#services" className="transition-colors hover:text-foreground">Services</Link><Link href="#client-success" className="transition-colors hover:text-foreground">Stories</Link>
          <Link href="#journal" className="transition-colors hover:text-foreground">Journal</Link>
          <Link href="#contact" className="transition-colors hover:text-foreground">Contact</Link>
        </nav>
        <Link href="#contact" className="hidden items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 md:flex">Book a consultation <ArrowUpRight className="size-4" /></Link>
        <button aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)} className="rounded-full p-2 md:hidden">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="flex flex-col gap-5 border-t border-border bg-background px-5 py-6 text-sm md:hidden"><Link onClick={() => setOpen(false)} href="#about">About</Link><Link onClick={() => setOpen(false)} href="#services">Services</Link><Link onClick={() => setOpen(false)} href="#journal">Journal</Link><Link onClick={() => setOpen(false)} href="#contact">Contact</Link></nav>}
    </header>
  )
}

export function Hero() {
  return <section id="home" className="overflow-hidden bg-background pt-28 lg:pt-32"><div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 lg:grid-cols-[1fr_0.9fr] lg:px-10 lg:pb-28">
    <div className="max-w-xl"><p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary"><Sparkles className="size-3.5" /> Nutrition, made personal</p><h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">Feel at home<br /><em className="text-primary">in your body.</em></h1><p className="mt-7 max-w-md text-base leading-7 text-muted-foreground">A kinder, more practical approach to nutrition. Together, we’ll build habits that nourish your health and fit beautifully into your life.</p><div className="mt-9 flex flex-wrap items-center gap-4"><Link href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">Book a consultation <ArrowUpRight className="size-4" /></Link><Link href="#about" className="inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-foreground underline decoration-primary/50 underline-offset-8">Meet Afifa</Link></div><div className="mt-14 flex gap-8 border-t border-border pt-6 text-sm"><div><p className="font-serif text-2xl text-foreground">9+</p><p className="mt-1 text-muted-foreground">Areas we cover</p></div><div><p className="font-serif text-2xl text-foreground">1:1</p><p className="mt-1 text-muted-foreground">Personalised care</p></div><div><p className="font-serif text-2xl text-foreground">100%</p><p className="mt-1 text-muted-foreground">Evidence-led</p></div></div></div>
    <div className="relative mx-auto w-full max-w-md lg:ml-auto"><div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-primary/20" /><div className="absolute -bottom-7 -left-7 h-32 w-32 rounded-full bg-accent" /><div className="relative aspect-[4/5] overflow-hidden rounded-[10rem_10rem_1.5rem_1.5rem] bg-secondary"><Image src="/afifa-portrait.png" alt="Afifa Naaz, dietitian" fill priority className="object-cover" sizes="(max-width: 1024px) 90vw, 40vw" /><div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-background/90 p-4 backdrop-blur"><div><p className="text-xs uppercase tracking-widest text-muted-foreground">Your dietitian</p><p className="mt-1 font-serif text-lg">Afifa Naaz</p></div><div className="rounded-full bg-accent p-3 text-primary"><ArrowUpRight className="size-4" /></div></div></div></div>
  </div></section>
}

export function About() { return <section id="about" className="bg-secondary py-24 lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.75fr_1fr] lg:gap-28 lg:px-10"><div><SectionLabel>About Afifa</SectionLabel><h2 className="max-w-md font-serif text-4xl leading-tight sm:text-5xl">Nutrition that meets you where you are.</h2></div><div><p className="text-lg leading-8 text-foreground/80">I believe healthy eating should add to your life, not take it over. My work is rooted in science, shaped around you, and always free from guilt or quick fixes.</p><p className="mt-6 leading-7 text-muted-foreground">With a Masters in Nutrition and Dietetics and specialised training in diabetes, gut health, mother health, and nutrigenetics, I create clear, compassionate plans for people ready to feel better for good.</p><div className="mt-10 grid gap-3 sm:grid-cols-2">{['Masters in Nutrition & Dietetics', 'Certified Diabetes Educator', 'Certified Gut Health Expert', 'Nutrigenomics & Nutrigenetics'].map((item) => <div key={item} className="flex items-start gap-3 border-t border-border py-4 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{item}</div>)}</div><Link href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">Work with me <ArrowUpRight className="size-4" /></Link></div></div></section> }

export function Services() { return <section id="services" className="relative overflow-hidden bg-background py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-10"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><SectionLabel>What we cover</SectionLabel><h2 className="max-w-2xl font-serif text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">A more personal way to<br /><em className="text-primary">feel well.</em></h2></div><p className="max-w-sm leading-7 text-muted-foreground">From everyday goals to complex health concerns, your plan is tailored with clarity, empathy, and evidence.</p></div><div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{services.map((service, index) => <article key={service.title} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-[0_12px_35px_-28px_hsl(var(--foreground))] transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-accent lg:p-8"><div className="flex items-start justify-between"><p className="font-mono text-xs tracking-widest text-primary">{service.icon}</p><span className="rounded-full border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{index < 3 ? 'Goals' : index < 6 ? 'Wellbeing' : 'Specialist'}</span></div><h3 className="mt-12 max-w-[14rem] font-serif text-2xl leading-tight">{service.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{service.text}</p><div className="mt-8 flex items-center justify-between"><span className="h-px w-12 bg-primary/40 transition-all group-hover:w-20" /><ArrowUpRight className="size-5 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div></article>)}</div></div></section> }

const clientReviews = [
  { quote: 'For the first time, my health plan feels like something I can actually live with.', name: 'Ayesha', detail: '1:1 nutrition client' },
  { quote: 'The guidance was simple, kind, and genuinely changed how I feel around food.', name: 'Meera', detail: 'Gut health client' },
  { quote: 'I finally understand what my body needs, and I have the confidence to keep going.', name: 'Rohan', detail: 'Metabolic health client' },
]

export function Testimonial() {
  const [activeReview, setActiveReview] = useState(0)
  const review = clientReviews[activeReview]
  const showPrevious = () => setActiveReview((current) => (current - 1 + clientReviews.length) % clientReviews.length)
  const showNext = () => setActiveReview((current) => (current + 1) % clientReviews.length)

  return <section id="client-success" className="bg-secondary py-24 lg:py-32"><div className="mx-auto max-w-6xl px-5 lg:px-10"><div className="text-center"><p className="text-sm text-muted-foreground">Real transformations from the journey so far.</p><h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">Client success <em className="text-primary">stories.</em></h2></div><div className="relative mx-auto mt-12 max-w-5xl"><button type="button" onClick={showPrevious} aria-label="Previous review" className="absolute left-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-background p-4 text-foreground shadow-lg transition-transform hover:scale-105"><ArrowLeft className="size-4" /></button><button type="button" onClick={showNext} aria-label="Next review" className="absolute right-0 top-1/2 z-10 translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-background p-4 text-foreground shadow-lg transition-transform hover:scale-105"><ArrowRight className="size-4" /></button><div className="min-h-[28rem] rounded-[2rem] border border-border bg-background px-8 py-12 text-center shadow-[0_24px_70px_-35px_hsl(var(--foreground))] sm:px-16 sm:py-16" aria-live="polite"><Quote className="mx-auto size-9 text-primary/15" /><p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{activeReview === 0 ? 'Fat-to-fit journey' : activeReview === 1 ? 'Gut health journey' : 'Metabolic health journey'}</p><blockquote className="mx-auto mt-8 max-w-3xl font-serif text-2xl italic leading-[1.45] text-foreground sm:text-4xl">&quot;{review.quote}&quot;</blockquote><div className="mt-10 flex items-center justify-center gap-4"><div className="flex size-14 items-center justify-center rounded-full border border-primary bg-secondary font-serif text-xl text-primary">{review.name.charAt(0)}</div><div className="text-left"><p className="font-semibold text-foreground">{review.name}</p><p className="mt-1 text-sm text-muted-foreground">{review.detail}</p></div></div></div><div className="mt-8 flex justify-center gap-2" aria-label={`Review ${activeReview + 1} of ${clientReviews.length}`}>{clientReviews.map((item, index) => <button key={item.name} type="button" onClick={() => setActiveReview(index)} aria-label={`Show review from ${item.name}`} className={`h-2 rounded-full transition-all ${index === activeReview ? 'w-10 bg-primary' : 'w-2 bg-primary/25'}`} />)}</div></div></div></section>
}

export function Journal() { return <section id="journal" className="bg-secondary py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-10"><div className="flex items-end justify-between"><div><SectionLabel>From the journal</SectionLabel><h2 className="font-serif text-4xl sm:text-5xl">Small notes,<br /><em className="text-primary">big shifts.</em></h2></div><Link href="#contact" className="hidden items-center gap-2 text-sm font-semibold text-primary sm:flex">View all articles <ArrowUpRight className="size-4" /></Link></div><div className="mt-14 grid gap-5 md:grid-cols-3">{articles.map((article, i) => <article key={article.title} className="group border-t border-border pt-5"><div className="relative mb-6 aspect-[1.35] overflow-hidden rounded-2xl bg-secondary"><Image src={article.image} alt={article.title} fill sizes="(max-width: 768px) 90vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-transparent to-transparent" /><div className="absolute inset-x-5 bottom-5 flex items-end justify-between"><span className="rounded-full bg-background/90 px-3 py-1 text-xs text-foreground backdrop-blur">{article.category}</span><span className="flex size-9 items-center justify-center rounded-full bg-background/90 text-primary backdrop-blur"><ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span></div></div><h3 className="max-w-sm font-serif text-2xl leading-tight">{article.title}</h3><p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{article.date}</p></article>)}</div></div></section> }

export function Contact() {
  return (
    <section id="contact" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.8fr_1fr] lg:gap-28 lg:px-10">
        <div>
          <SectionLabel>Let's talk</SectionLabel>
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
            Your next chapter<br />
            <em className="text-primary">starts here.</em>
          </h2>
          <p className="mt-6 max-w-sm leading-7 text-muted-foreground">
            Tell me a little about what you’re looking for. I’ll be in touch within 1-2 working days.
          </p>
          <div className="mt-10 space-y-5 text-sm">
            <a href="mailto:dtafifa81@gmail.com" className="flex items-center gap-4 text-foreground transition-colors hover:text-primary">
              <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="size-5" />
              </span>
              <span className="font-medium">dtafifa81@gmail.com</span>
            </a>
            <a href="tel:+918272026135" className="flex items-center gap-4 text-foreground transition-colors hover:text-primary">
              <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="size-5" />
              </span>
              <span className="font-medium">+91 98765 43210</span>
            </a>
            <div className="flex items-center gap-4 text-foreground">
              <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="size-5" />
              </span>
              <span className="font-medium">Online consultations, worldwide</span>
            </div>
          </div>
        </div>
        <div className="relative rounded-[2rem] border border-border bg-card p-8 shadow-[0_12px_40px_-20px_hsl(var(--foreground))] sm:p-12">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block text-sm font-medium text-foreground">
                Your name
                <input required className="mt-2.5 w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10" placeholder="Jane Smith" />
              </label>
              <label className="block text-sm font-medium text-foreground">
                Email address
                <input required type="email" className="mt-2.5 w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10" placeholder="you@example.com" />
              </label>
            </div>
            <label className="block text-sm font-medium text-foreground">
              What can I help with?
              <div className="relative mt-2.5">
                <select className="w-full appearance-none rounded-xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10">
                  <option>Choose an area</option>
                  {services.map(s => <option key={s.title}>{s.title}</option>)}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-muted-foreground">
                  <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </label>
            <label className="block text-sm font-medium text-foreground">
              Tell me a little more
              <textarea rows={4} className="mt-2.5 w-full resize-none rounded-xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10" placeholder="Share what brought you here..." />
            </label>
            <button type="submit" className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]">
              Send enquiry 
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export function Footer() { return <footer className="overflow-hidden bg-foreground text-background"><div className="mx-auto max-w-7xl px-5 pb-8 pt-16 lg:px-10 lg:pt-24"><div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr] lg:gap-10"><div className="lg:pr-10"><p className="font-serif text-3xl tracking-tight">Afifa Naaz<span className="text-accent">.</span></p><p className="mt-5 max-w-sm text-sm leading-7 text-background/60">Personalised nutrition for a healthier, happier you — rooted in evidence, empathy, and real life.</p><a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">Start your journey <ArrowUpRight className="size-4" /></a></div><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Explore</p><nav className="mt-5 flex flex-col gap-3 text-sm text-background/65"><Link href="#about" className="transition-colors hover:text-background">About Afifa</Link><Link href="#services" className="transition-colors hover:text-background">What we cover</Link><Link href="#client-success" className="transition-colors hover:text-background">Success stories</Link><Link href="#journal" className="transition-colors hover:text-background">Journal</Link></nav></div><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Connect</p><div className="mt-5 flex flex-col gap-3 text-sm text-background/65"><a href="mailto:dtafifa81@gmail.com" className="transition-colors hover:text-background">dtafifa81@gmail.com</a><a href="tel:+918272026135" className="transition-colors hover:text-background">+91 98765 43210</a><a href="https://wa.me/918272026135" target="_blank" rel="noreferrer" className="transition-colors hover:text-background">Chat on WhatsApp</a></div></div><div className="rounded-3xl border border-background/15 bg-background/[0.06] p-6"><p className="font-serif text-2xl leading-tight">Small steps.<br /><em className="text-accent">Lasting change.</em></p><p className="mt-4 text-sm leading-6 text-background/55">Your body is listening. Let’s make the next choice a kind one.</p></div></div><div className="relative mt-20 border-t border-background/10 pt-8"><p className="pointer-events-none absolute -top-16 left-0 select-none whitespace-nowrap font-serif text-[clamp(5rem,17vw,15rem)] leading-none text-background/[0.035]">nourish</p><div className="relative flex flex-col justify-between gap-4 text-xs text-background/45 sm:flex-row"><p>© 2026 Afifa Naaz. All rights reserved.</p><p>Nutrition advice rooted in evidence and empathy.</p></div></div></div></footer> }

export function DietitianSite() { return <><Header /><main><Hero /><About /><Services /><Testimonial /><Journal /><Contact /></main><Footer /><a href="https://wa.me/918272026135" target="_blank" rel="noreferrer" aria-label="Chat with Afifa on WhatsApp" className="group fixed bottom-5 right-5 z-40 flex size-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.8)] transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 sm:bottom-7 sm:right-7"><span className="absolute inset-0 rounded-full border-2 border-[#25D366]/60 motion-safe:animate-ping motion-safe:opacity-60" /><span className="relative flex size-12 items-center justify-center rounded-full bg-[#25D366] transition-transform group-hover:rotate-6"><MessageCircle className="size-7" strokeWidth={2.25} /></span><span className="pointer-events-none absolute bottom-full right-0 mb-3 w-max translate-y-1 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background opacity-0 shadow-lg transition-all group-hover:translate-y-0 group-hover:opacity-100">Chat on WhatsApp</span></a></> }
