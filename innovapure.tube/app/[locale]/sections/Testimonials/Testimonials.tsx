import 'server-only'
import { getTestimonials } from './actions'
import { Section } from '@/components/shared/layout'
import { cn } from '@/utils'
import { ResponsiveImage } from '@/components/shared/images'

type Testimonials = Exclude<Awaited<ReturnType<typeof getTestimonials>>, null>

export const Testimonials = ({ title, testimonials }: Testimonials) => {
  return (
    <Section
      className={cn([
        '[&_h2]:text-h4',
        '[&_h2]:md:text-h2',
        '[&_h2]:mb-8',
        '[&_h2]:md:mb-12',
        '[&_h3]:text-h6',
        '[&_h3]:md:text-h4',
        '[&_h3]:md:max-w-[16ch]'
      ])}>
      <h2>{title}</h2>
      <ul className='grid md:grid-cols-3 gap-4 m-0 p-0'>
        {testimonials.map(({ id, title, description, image }) => (
          <li className='flex flex-col m-0 p-0' key={id}>
            <ResponsiveImage
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
            />
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
