import 'server-only'
import { getCategory } from './actions'
import { cn } from '@/utils'
import { ComponentProps } from 'react'
import { Section } from '@/components/shared/layout'
import { Filters, ProductCard } from './components'

export type Category = Pick<ComponentProps<'section'>, 'className'> &
  Exclude<Awaited<ReturnType<typeof getCategory>>, null>

export const Category = ({
  className,
  category: { name, description, products }
}: Category) => {
  return (
    <Section
      className={cn(
        '[&_h1]:mb-3',
        '[&_h1]:md:mb-5',
        '[&_h1]:text-center',
        '[&_h1~p]:mx-auto',
        '[&_h1~p]:text-center',
        className
      )}>
      <h1>{name}</h1>
      <p>{description}</p>
      <Filters />
      <ul className='m-0 grid gap-8 p-0 md:grid-cols-2 xl:grid-cols-3'>
        {products.map(product => (
          <li key={product.id} className='m-0 grid p-0'>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
