import 'server-only'
import { getTestimonials } from './actions'

type Testimonials = Exclude<Awaited<ReturnType<typeof getTestimonials>>, null>

export const Testimonials = <_Testimonials extends Testimonials>({
  title,
  testimonials
}: _Testimonials) => {
  return (
    <section>
      <p>Testimonials</p>
    </section>
  )
}
