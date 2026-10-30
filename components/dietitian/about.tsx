import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { SectionLabel } from './section-label'

const credentials = [
  'Masters in Nutrition & Dietetics',
  'Certified Diabetes Educator',
  'Certified Gut Health Expert',
  'Nutrigenomics & Nutrigenetics',
]

export function About() {
  return (
    <section id="about" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.75fr_1fr] lg:gap-28 lg:px-10">
        <div>
          <SectionLabel>About Afifa</SectionLabel>
          <h2 className="max-w-md font-serif text-4xl leading-tight sm:text-5xl">
            Nutrition that meets you where you are.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-foreground/80">
            I believe healthy eating should add to your life, not take it over. My work is rooted in science,
            shaped around you, and always free from guilt or quick fixes.
          </p>
          <p className="mt-6 leading-7 text-muted-foreground">
            With a Masters in Nutrition and Dietetics and specialised training in diabetes, gut health, mother
            health, and nutrigenetics, I create clear, compassionate plans for people ready to feel better for good.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {credentials.map((item) => (
              <div key={item} className="flex items-start gap-3 border-t border-border py-4 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                {item}
              </div>
            ))}
          </div>

          <Link href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            Work with me <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

