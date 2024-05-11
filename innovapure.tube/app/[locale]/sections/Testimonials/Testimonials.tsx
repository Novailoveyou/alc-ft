import 'server-only'
import { getTestimonials } from './actions'

type Testimonials = Exclude<Awaited<ReturnType<typeof getTestimonials>>, null>

export const Testimonials = ({ title, testimonials }: Testimonials) => {
  return (
    <section>
      <p>Testimonials</p>
    </section>
  )
}
