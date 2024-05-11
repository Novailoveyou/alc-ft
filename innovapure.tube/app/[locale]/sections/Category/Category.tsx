import 'server-only'
import { getCategory } from './actions'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/utils'
import { ComponentProps } from 'react'
import { Section } from '@/components/shared/layout'
import { Filters } from './components'

type Category = Pick<ComponentProps<'section'>, 'className'> &
  Exclude<Awaited<ReturnType<typeof getCategory>>, null>

export const Category = ({ className, category }: Category) => {
  console.log('category: ', category.products[0].parameters)
  return (
    <Section
      className={cn(
        '[&_h1]:mb-3',
        '[&_h1]:md:mb-5',
        '[&_h1]:text-center',
        '[&_p]:text-center',
        className
      )}>
      <h1>{category.name}</h1>
      <p className='mx-auto'>{category.description}</p>
      <Filters />
      {category.products.map(({ id, slug, name }) => (
        <div key={id}>
          <Button asChild variant='ghost'>
            <Link href={`/${category.slug}/${slug}`}>{name}</Link>
          </Button>
        </div>
      ))}
    </Section>
  )
}
