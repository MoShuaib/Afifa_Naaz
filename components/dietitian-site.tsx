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
  { title: 'Cancer Care', text: 'Supportive nutritional therapy during and after treatment to manage symptoms and build strength.', icon: '10' },
]

const articles = [
  {
    category: 'Gut health',
    title: 'The gentle way to start supporting your gut',
    date: '6 min read',
    image: '/article-gut-health.png',
    content: (
      <div className="space-y-10 text-foreground/80">
        <div className="space-y-3">
          <h4 className="font-serif text-2xl text-foreground">1. Start with Your Teeth (Chew Your Food!)</h4>
          <p className="leading-7">Digestion doesn't begin in your stomach; it begins in your mouth. When we eat in a rush, we often swallow large pieces of food, which makes our stomach and intestines work overtime.</p>
          <p className="leading-7"><span className="font-semibold text-primary">The gentle step:</span> Try to chew your food until it is the consistency of applesauce before swallowing. This simple habit breaks down your food, mixes it with digestive enzymes in your saliva, and significantly reduces bloating.</p>
        </div>
        <div className="space-y-3">
          <h4 className="font-serif text-2xl text-foreground">2. Sip Water Steadily Throughout the Day</h4>
          <p className="leading-7">Think of your digestive tract like a gentle river. Without enough water, things slow down and get stuck. Fiber (which your gut loves) needs water to move smoothly through your system.</p>
          <p className="leading-7"><span className="font-semibold text-primary">The gentle step:</span> Instead of trying to chug a massive bottle of water all at once, focus on sipping water consistently throughout the day. Keeping a glass of water on your desk or carrying a reusable bottle can be a great visual reminder.</p>
        </div>
        <div className="space-y-3">
          <h4 className="font-serif text-2xl text-foreground">3. Add Fiber Slowly</h4>
          <p className="leading-7">Fiber is the favorite food of the good bacteria in your gut. However, if you suddenly start eating massive amounts of beans, broccoli, and whole grains, you will likely end up feeling bloated and gassy. Your gut needs time to adapt.</p>
          <p className="leading-7"><span className="font-semibold text-primary">The gentle step:</span> Add just one extra serving of a plant-based food to your day. Toss a handful of spinach into your morning smoothie, add half a cup of berries to your oatmeal, or sprinkle some chia seeds on your yogurt. Go slow and steady.</p>
        </div>
        <div className="space-y-3">
          <h4 className="font-serif text-2xl text-foreground">4. Introduce Fermented Foods in "Bite-Sized" Amounts</h4>
          <p className="leading-7">Fermented foods contain probiotics, which are live beneficial bacteria that help balance your gut. You don't need to eat a whole jar of kimchi to get the benefits.</p>
          <p className="leading-7"><span className="font-semibold text-primary">The gentle step:</span> Treat fermented foods like a condiment. Add a single spoonful of sauerkraut to your sandwich, drink a small glass of kefir, or enjoy a serving of yogurt with active cultures. A little bit every day goes a long way.</p>
        </div>
        <div className="space-y-3">
          <h4 className="font-serif text-2xl text-foreground">5. Take Three Deep Breaths Before You Eat</h4>
          <p className="leading-7">Your brain and your gut are connected by a massive network of nerves. When you are stressed, your body enters "fight or flight" mode, which actually shuts down digestion. To digest food properly, your body needs to be in "rest and digest" mode.</p>
          <p className="leading-7"><span className="font-semibold text-primary">The gentle step:</span> Before you take your first bite of a meal, pause. Drop your shoulders and take three slow, deep breaths. This sends a signal to your nervous system that you are safe, allowing your body to focus its energy on digesting your food comfortably.</p>
        </div>
        <div className="rounded-2xl bg-secondary p-8 text-center mt-12 border border-border">
          <h4 className="font-serif text-2xl text-foreground">Be Kind to Your Gut</h4>
          <p className="mt-4 leading-7">Remember, your gut is unique to you. Supporting it is not about being perfect or following a rigid set of rules. It is about tuning in, slowing down, and making gentle choices that help your body function at its best.</p>
          <p className="mt-4 font-semibold text-primary">Pick just one of the tips above to focus on this week. Your gut—and your overall health—will thank you!</p>
        </div>
      </div>
    )
  },
  {
    category: 'Everyday nutrition',
    title: 'Why your healthy diet should still feel like you',
    date: '4 min read',
    image: '/article-everyday-nutrition.png',
    content: (
      <div className="space-y-10 text-foreground/80">
        <div className="space-y-3">
          <h4 className="font-serif text-2xl text-foreground">1. Willpower Fades, but Enjoyment Lasts</h4>
          <p className="leading-7">If you are forcing yourself to eat meals you don't actually enjoy, you are relying entirely on willpower. And willpower is like a battery—eventually, it runs out. When your meals include flavors, textures, and ingredients you genuinely look forward to, eating well stops feeling like a chore. You don't have to "try" to stick to a diet when your diet is simply a nourishing version of the foods you already love.</p>
        </div>
        <div className="space-y-3">
          <h4 className="font-serif text-2xl text-foreground">2. Your Culture and Traditions Matter</h4>
          <p className="leading-7">There is a huge misconception that "healthy eating" only looks like grilled chicken breast, brown rice, and steamed broccoli. This simply isn't true! Your cultural foods, family recipes, and holiday traditions are incredibly important. Food is connection, history, and comfort. A truly healthy lifestyle makes room for your favorite curries, pastas, tacos, and stews. You never have to leave your heritage at the door to be healthy.</p>
        </div>
        <div className="space-y-3">
          <h4 className="font-serif text-2xl text-foreground">3. Food is More Than Just "Fuel"</h4>
          <p className="leading-7">You will often hear the phrase "food is fuel." While it is fuel for our cells, it is also so much more. Food is a birthday cake with your child. It is popcorn at the movies with your partner. It is a warm bowl of soup when you are feeling down. If a diet is so strict that it strips away the joy and social connection of eating, it is actively harming your emotional and mental well-being—which are just as important as your physical health.</p>
        </div>
        <div className="space-y-3">
          <h4 className="font-serif text-2xl text-foreground">How to Make Nutrition Feel Like You</h4>
          <p className="leading-7">So, how do we bridge the gap between eating well and staying true to ourselves? Try shifting your mindset from subtraction to addition.</p>
          <p className="leading-7">Instead of asking: <span className="italic">"What do I have to cut out of my favorite meal?"</span> Ask yourself: <span className="font-semibold text-primary">"What can I add to my favorite meal to make it more nourishing?"</span></p>
          <ul className="list-disc pl-5 space-y-2 leading-7">
            <li><span className="font-medium text-foreground">Love a bowl of pasta?</span> Keep the pasta, but add a handful of spinach and some grilled protein to keep you fuller for longer.</li>
            <li><span className="font-medium text-foreground">Love having a sandwich for lunch?</span> Keep the bread, but add some extra crunchy veggies and a side of fruit.</li>
            <li><span className="font-medium text-foreground">Love your family's traditional rice dish?</span> Keep the rice, but add an extra scoop of beans or lentils for fiber.</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-secondary p-8 text-center mt-12 border border-border">
          <h4 className="font-serif text-2xl text-foreground">The Bottom Line</h4>
          <p className="mt-4 leading-7">A healthy lifestyle should fit into your life; you shouldn't have to shrink your life to fit into a diet. By honoring your personal tastes, your culture, and your joy, you create a foundation for lifelong health that you actually want to maintain.</p>
        </div>
      </div>
    )
  },
  {
    category: 'Mother & baby',
    title: 'Nourishing yourself through the fourth trimester',
    date: '7 min read',
    image: '/article-mother-baby.png',
    content: (
      <div className="space-y-10 text-foreground/80">
        <div className="space-y-3">
          <h4 className="font-serif text-2xl text-foreground">1. Focus on Warm, Comforting Foods</h4>
          <p className="leading-7">Across many different cultures around the world, traditional postpartum care emphasizes warm, cooked foods. There is a great reason for this: after birth, your digestion can be a little sluggish. Warm foods like soups, stews, bone broths, and oatmeal are not only incredibly comforting, but they are also much easier for your body to break down and absorb. They give you maximum nutrients with minimal digestive effort.</p>
        </div>
        <div className="space-y-3">
          <h4 className="font-serif text-2xl text-foreground">2. Master the "One-Handed Snack"</h4>
          <p className="leading-7">In the fourth trimester, you will likely spend a lot of time holding, rocking, or feeding your baby. Sitting down for a traditional plated meal with a knife and fork can feel impossible. Take the pressure off by stocking up on nutrient-dense, one-handed snacks. Keep things like trail mix, bananas, cheese sticks, energy bites, and hard-boiled eggs in the fridge or pantry. Grazing on these throughout the day is a perfectly valid way to meet your energy needs.</p>
        </div>
        <div className="space-y-3">
          <h4 className="font-serif text-2xl text-foreground">3. Build a "Hydration Station"</h4>
          <p className="leading-7">Whether you are recovering from birth, running on very little sleep, or producing breast milk, your body requires a lot of fluids. In fact, if you are nursing, you might experience a sudden, intense thirst every time the baby latches! To make hydration easy, create a "hydration station" in the spot where you feed or rock the baby most often. Keep a large reusable water bottle, a few easy snacks, and maybe even a lip balm right within arm's reach.</p>
        </div>
        <div className="space-y-3">
          <h4 className="font-serif text-2xl text-foreground">4. Prioritize Protein and Iron</h4>
          <p className="leading-7">Your body just grew a human being and went through the marathon of birth. To heal tissues, balance hormones, and recover from blood loss, your body is craving protein and iron. Keep it simple. Slow-cooked meats, lentils, eggs, and beans are fantastic sources. To help your body absorb that iron, pair it with a little Vitamin C—like a squeeze of lemon juice over your lentils, or a side of strawberries with your eggs.</p>
        </div>
        <div className="space-y-3">
          <h4 className="font-serif text-2xl text-foreground">5. Say "Yes" to Help (and Let Others Feed You)</h4>
          <p className="leading-7">In the fourth trimester, the most important dietary advice I can give you has nothing to do with food itself: let your village feed you. If a friend asks how they can help, tell them they can drop off a hot meal. If a family member visits, let them wash the dishes or chop up some fresh fruit for you. You are doing the hard work of caring for a newborn; allow the people who love you to care for you.</p>
        </div>
        <div className="rounded-2xl bg-secondary p-8 text-center mt-12 border border-border">
          <h4 className="font-serif text-2xl text-foreground">Give Yourself Grace</h4>
          <p className="mt-4 leading-7">The fourth trimester is about survival, healing, and bonding. Some days, nourishing yourself might look like a beautiful, nutrient-dense bowl of soup. Other days, it might look like eating toast over the kitchen sink at 3:00 AM. Both are okay.</p>
          <p className="mt-4 font-semibold text-primary">Your body has just done something miraculous. Treat it with the deep kindness and nourishment it deserves.</p>
        </div>
      </div>
    )
  },
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
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background pt-28 lg:pt-32"
    >
      {/* Decorative background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-accent/60 blur-2xl" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.35]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="hero-dots"
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
            >
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
              <svg
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
              </svg>
            </em>
          </h1>

          <p className="mt-7 max-w-md text-base leading-7 text-muted-foreground">
            A kinder, more practical approach to nutrition. Together, we’ll
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
  );
}


export function About() { return <section id="about" className="bg-secondary py-24 lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.75fr_1fr] lg:gap-28 lg:px-10"><div><SectionLabel>About Afifa</SectionLabel><h2 className="max-w-md font-serif text-4xl leading-tight sm:text-5xl">Nutrition that meets you where you are.</h2></div><div><p className="text-lg leading-8 text-foreground/80">I believe healthy eating should add to your life, not take it over. My work is rooted in science, shaped around you, and always free from guilt or quick fixes.</p><p className="mt-6 leading-7 text-muted-foreground">With a Masters in Nutrition and Dietetics and specialised training in diabetes, gut health, mother health, and nutrigenetics, I create clear, compassionate plans for people ready to feel better for good.</p><div className="mt-10 grid gap-3 sm:grid-cols-2">{['Masters in Nutrition & Dietetics', 'Certified Diabetes Educator', 'Certified Gut Health Expert', 'Nutrigenomics & Nutrigenetics'].map((item) => <div key={item} className="flex items-start gap-3 border-t border-border py-4 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{item}</div>)}</div><Link href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">Work with me <ArrowUpRight className="size-4" /></Link></div></div></section> }

export function Services() { return <section id="services" className="relative overflow-hidden bg-background py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-10"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><SectionLabel>What we cover</SectionLabel><h2 className="max-w-2xl font-serif text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">A more personal way to<br /><em className="text-primary">feel well.</em></h2></div><p className="max-w-sm leading-7 text-muted-foreground">From everyday goals to complex health concerns, your plan is tailored with clarity, empathy, and evidence.</p></div><div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{services.map((service, index) => <article key={service.title} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-[0_12px_35px_-28px_hsl(var(--foreground))] transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-accent lg:p-8"><div className="flex items-start justify-between"><p className="font-mono text-xs tracking-widest text-primary">{service.icon}</p><span className="rounded-full border border-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{index < 3 ? 'Goals' : index < 6 ? 'Wellbeing' : 'Specialist'}</span></div><h3 className="mt-12 max-w-[14rem] font-serif text-2xl leading-tight">{service.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{service.text}</p><div className="mt-8 flex items-center justify-between"><span className="h-px w-12 bg-primary/40 transition-all group-hover:w-20" /><ArrowUpRight className="size-5 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div></article>)}</div></div></section> }

export function Testimonial() {
  return (
    <section id="client-success" className="bg-secondary py-12 lg:py-12">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Real transformations from the journey so far.</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
            Client Feedback <em className="text-primary">for Afifa.</em>
          </h2>
        </div>
        <div className="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2rem] border border-border bg-background shadow-[0_24px_70px_-35px_hsl(var(--foreground))]">
          <img src="/client-reviews.png" alt="Client Feedback for Afifa" className="h-auto w-full" />
        </div>
      </div>
    </section>
  )
}

export function Journal() {
  const [selectedArticle, setSelectedArticle] = useState<any>(null)

  return (
    <>
      <section id="journal" className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex items-end justify-between">
            <div>
              <SectionLabel>From the journal</SectionLabel>
              <h2 className="font-serif text-4xl sm:text-5xl">
                Small notes,<br /><em className="text-primary">big shifts.</em>
              </h2>
            </div>
            <Link href="#contact" className="hidden items-center gap-2 text-sm font-semibold text-primary sm:flex">
              View all articles <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {articles.map((article, i) => (
              <article key={article.title} className="group border-t border-border pt-5">
                <button
                  onClick={() => article.content && setSelectedArticle(article)}
                  className={`w-full text-left ${article.content ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <div className="relative mb-6 aspect-[1.35] overflow-hidden rounded-2xl bg-secondary">
                    <Image src={article.image} alt={article.title} fill sizes="(max-width: 768px) 90vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-transparent to-transparent" />
                    <div className="absolute inset-x-5 bottom-5 flex items-end justify-between">
                      <span className="rounded-full bg-background/90 px-3 py-1 text-xs text-foreground backdrop-blur">{article.category}</span>
                      {article.content && (
                        <span className="flex size-9 items-center justify-center rounded-full bg-background/90 text-primary backdrop-blur">
                          <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className={`max-w-sm font-serif text-2xl leading-tight ${article.content ? 'group-hover:text-primary transition-colors' : ''}`}>{article.title}</h3>
                  <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{article.date}</p>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-5 sm:p-10">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedArticle(null)}
          />
          <div className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-[2rem] border border-border bg-background shadow-2xl">
            <div className="flex items-center justify-between border-b border-border p-6 sm:px-10 sm:py-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{selectedArticle.category}</span>
                <h3 className="mt-2 font-serif text-2xl sm:text-3xl">{selectedArticle.title}</h3>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="rounded-full bg-secondary p-3 text-foreground transition-transform hover:scale-105"
                aria-label="Close modal"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="overflow-y-auto p-6 sm:p-10">
              {selectedArticle.content}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

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
            <button onClick={() => { window.location.href = '/api/whatsapp' }} className="flex items-center gap-4 text-foreground transition-colors hover:text-primary text-left">
              <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MessageCircle className="size-5" />
              </span>
              <span className="font-medium">Chat on WhatsApp</span>
            </button>
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

export function Footer() { return <footer className="overflow-hidden bg-foreground text-background"><div className="mx-auto max-w-7xl px-5 pb-8 pt-16 lg:px-10 lg:pt-24"><div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr] lg:gap-10"><div className="lg:pr-10"><p className="font-serif text-3xl tracking-tight">Afifa Naaz<span className="text-accent">.</span></p><p className="mt-5 max-w-sm text-sm leading-7 text-background/60">Personalised nutrition for a healthier, happier you — rooted in evidence, empathy, and real life.</p><a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">Start your journey <ArrowUpRight className="size-4" /></a></div><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Explore</p><nav className="mt-5 flex flex-col gap-3 text-sm text-background/65"><Link href="#about" className="transition-colors hover:text-background">About Afifa</Link><Link href="#services" className="transition-colors hover:text-background">What we cover</Link><Link href="#client-success" className="transition-colors hover:text-background">Client Feedback</Link><Link href="#journal" className="transition-colors hover:text-background">Journal</Link></nav></div><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Connect</p><div className="mt-5 flex flex-col gap-3 text-sm text-background/65"><a href="mailto:dtafifa81@gmail.com" className="transition-colors hover:text-background">dtafifa81@gmail.com</a><button onClick={() => window.location.href = '/api/whatsapp'} className="transition-colors hover:text-background text-left">Chat on WhatsApp</button></div></div><div className="rounded-3xl border border-background/15 bg-background/[0.06] p-6"><p className="font-serif text-2xl leading-tight">Small steps.<br /><em className="text-accent">Lasting change.</em></p><p className="mt-4 text-sm leading-6 text-background/55">Your body is listening. Let’s make the next choice a kind one.</p></div></div><div className="relative mt-20 border-t border-background/10 pt-8"><p className="pointer-events-none absolute -top-16 left-0 select-none whitespace-nowrap font-serif text-[clamp(5rem,17vw,15rem)] leading-none text-background/[0.035]">nourish</p><div className="relative flex flex-col justify-between gap-4 text-xs text-background/45 sm:flex-row"><p>© 2026 Afifa Naaz. All rights reserved.</p><p>Nutrition advice rooted in evidence and empathy.</p></div></div></div></footer> }

export function DietitianSite() { return <><Header /><main><Hero /><About /><Services /><Testimonial /><Journal /><Contact /></main><Footer /><button onClick={() => window.location.href = '/api/whatsapp'} aria-label="Chat with Afifa on WhatsApp" className="group fixed bottom-5 right-5 z-40 flex size-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.8)] transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 sm:bottom-7 sm:right-7"><span className="absolute inset-0 rounded-full border-2 border-[#25D366]/60 motion-safe:animate-ping motion-safe:opacity-60" /><span className="relative flex size-12 items-center justify-center rounded-full bg-[#25D366] transition-transform group-hover:rotate-6"><MessageCircle className="size-7" strokeWidth={2.25} /></span><span className="pointer-events-none absolute bottom-full right-0 mb-3 w-max translate-y-1 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background opacity-0 shadow-lg transition-all group-hover:translate-y-0 group-hover:opacity-100">Chat on WhatsApp</span></button></> }
