import 'server-only'
import { getTestimonials } from './actions'
import { Section } from '@/components/shared/layout'

type Testimonials = Exclude<Awaited<ReturnType<typeof getTestimonials>>, null>

export const Testimonials = ({ title, testimonials }: Testimonials) => {
  return (
    <Section>
      <p>Testimonials</p>
    </Section>
  )
}
