import 'server-only'
import { getCategory } from './actions'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

type Category = Exclude<Awaited<ReturnType<typeof getCategory>>, null>

export const Category = <_Category extends Category>({
  category
}: _Category) => {
  return (
    <section>
      <div>
        <h1>{category.name}</h1>

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
