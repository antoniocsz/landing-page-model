import { Hero } from '@/components/custom/hero'
import { FAQ } from '@/components/custom/faq'
import { Services } from '@/components/custom/services'
import { Subscriptions } from '@/components/custom/subscriptions'
import { ContactUs } from '@/components/custom/contact-us'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Subscriptions />
      <FAQ />
      <ContactUs />
    </>
  )
}
