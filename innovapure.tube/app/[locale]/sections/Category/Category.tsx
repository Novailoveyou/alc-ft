import 'server-only'
import { getCategory } from './actions'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/utils'

type Category = Exclude<Awaited<ReturnType<typeof getCategory>>, null>

export const Category = <_Category extends Category>({
  category
}: _Category) => {
  return (
    <section
      className={cn(
        'prose',
        'dark:prose-invert',
        'max-w-none',
        'prose-p:m-0',
        'prose-h1:m-0',
        'prose-headings:text-text-accent',
        'prose-headings:font-semibold',
        'prose-headings:leading-tight',
        'prose-p:text-text-dim',
        'prose-p:max-w-prose',
        'prose-p:font-normal',
        'prose-p:leading-snug',
        'md:mt-8',
        'md:prose-2xl',
        'md:prose-p:prose-xl'
      )}>
      <div className='container'>
        <div className='text-center flex flex-col flex-nowrap justify-center items-center gap-5'>
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
      </div>
    </section>
  )
}
