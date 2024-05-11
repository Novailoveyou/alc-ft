import 'server-only'
import { getProduct } from './actions'

type Product = Exclude<Awaited<ReturnType<typeof getProduct>>, null>

export const Product = ({ product }: Product) => {
  return (
    <div>
      Product
      <h1>{product.name}</h1>
    </div>
  )
}
