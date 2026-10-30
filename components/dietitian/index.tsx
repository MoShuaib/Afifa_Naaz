import { Header } from './header'
import { Hero } from './hero'
import { About } from './about'
import { Services } from './services'
import { Testimonial } from './testimonial'
// import { Journal } from './journal'
import { Contact } from './contact'
import { Footer } from './footer'
import { WhatsAppButton } from './whatsapp-button'

export function DietitianSite() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonial />
        {/* <Journal /> */}
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

// Named re-exports for individual use
export { Header } from './header'
export { Hero } from './hero'
export { About } from './about'
export { Services } from './services'
export { Testimonial } from './testimonial'
export { Journal } from './journal'
export { Contact } from './contact'
export { Footer } from './footer'
export { WhatsAppButton } from './whatsapp-button'

