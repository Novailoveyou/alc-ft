import 'server-only'
import { getTestimonials } from './actions'
import { Section } from '@/components/shared/layout'
import { cn } from '@/utils'
import { ResponsiveImage } from '@/components/shared/images'

type Testimonials = Exclude<Awaited<ReturnType<typeof getTestimonials>>, null>

export const Testimonials = ({ title, testimonials }: Testimonials) => {
  return (
    <Section
      className={
        'mt-16 pt-0 md:mt-28 md:pt-0 [&_h2]:mb-8 [&_h2]:text-h4 [&_h2]:md:mb-12 [&_h2]:md:text-h2 [&_h3]:text-h6 [&_h3]:md:text-h4 [&_h3]:lg:max-w-[16ch]'
      }>
      <h2>{title}</h2>
      <ul className='m-0 grid gap-8 p-0 md:gap-10 lg:grid-cols-3'>
        {testimonials.map(({ id, title, description, image }) => (
          <li className='m-0 flex gap-6 p-0 md:gap-8' key={id}>
            <div className='min-w-8 md:min-w-14'>
              <ResponsiveImage
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
              />
            </div>
            <div className='flex flex-col gap-3 md:gap-4'>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
