import 'server-only'
import { getCategory } from './actions'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/utils'
import { ComponentProps } from 'react'
import { Section } from '@/components/shared/layout'

type Category = Pick<ComponentProps<'section'>, 'className'> &
  Exclude<Awaited<ReturnType<typeof getCategory>>, null>

export const Category = ({ className, category }: Category) => {
  return (
    <Section>
      <div className='text-center flex flex-col flex-nowrap justify-center items-center gap-3 md:gap-5'>
        <h1>{category.name}</h1>
        <p>{category.description}</p>
      </div>
      {category.products.map((product, idx) => (
        <div key={`Category__product--${idx + 1}`}>
          <Button asChild variant='ghost'>
            <Link href={`/${product.category.slug}/${product.slug}`}>
              {product.name}
            </Link>
          </Button>
        </div>
      ))}
    </Section>
  )
}
