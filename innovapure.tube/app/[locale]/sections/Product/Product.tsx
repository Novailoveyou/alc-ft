import { getProduct } from './actions'

type Product = Exclude<Awaited<ReturnType<typeof getProduct>>, null>

export const Product = <_Product extends Product>({ product }: _Product) => {
  return (
    <div>
      Product
      <h1>{product.name}</h1>
    </div>
  )
}
