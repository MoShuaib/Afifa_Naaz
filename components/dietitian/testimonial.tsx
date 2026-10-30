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

