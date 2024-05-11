import 'server-only'
import { getProduct } from './actions'
import { Section } from '@/components/shared/layout'

type Product = Exclude<Awaited<ReturnType<typeof getProduct>>, null>

export const Product = ({ product }: Product) => {
  return (
    <Section>
      Product
      <h1>{product.name}</h1>
    </Section>
  )
}
