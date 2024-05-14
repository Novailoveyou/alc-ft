import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Category } from '../../Category'

type ProductCard = {
  product: Category['category']['products'][number]
}

export const ProductCard = ({
  product: { name, slug, categorySlug, image, parameters }
}: ProductCard) => {
  return (
    <Button asChild variant='ghost'>
      <Link href={`/${categorySlug}/${slug}`}>{name}</Link>
    </Button>
  )
}
