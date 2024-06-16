import 'server-only'
import { NextPage } from 'next'
import { ONE_HOUR_IN_SECONDS } from '@/constants'
import { Fragment } from 'react'
import { Revalidate } from 'next/dist/server/lib/revalidate'
import { Header, getHeader } from '@/components/sections/Header'
import { Footer, getFooter } from '@/components/sections/Footer'
import { Product, getProduct } from '@/components/sections/Product'
import { PageName } from '@prisma/client'
import { getProductStaticParams } from './actions'

type ProductPage = {
  params: Awaited<ReturnType<typeof getProductStaticParams>>[number]
}

/**
 * @description The `generateStaticParams` function can be used in combination with **dynamic route segments** to **statically generate** routes at build time instead of on-demand at request time
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-static-params */
// export const generateStaticParams = async () => await getCategoryStaticParams()

/**
 * @description To revalidate data at a timed interval, you can use the `next.revalidate` option of fetch to set the cache lifetime of a resource (in seconds)
 *
 * @see https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#revalidating-data */
export const revalidate: Revalidate = ONE_HOUR_IN_SECONDS

const ProductPage: NextPage<ProductPage> = async ({
  params: { locale, categorySlug, productSlug }
}) => {
  const page = 'product' satisfies PageName

  const header = await getHeader({ locale, page })
  const product = await getProduct({
    locale,
    page,
    slug: productSlug,
    categorySlug
  })
  const footer = await getFooter({ locale, page })

  return (
    <Fragment>
      <Header buttons={header?.buttons || []} />
      <main>{product?.product && <Product product={product.product} />}</main>
      <Footer form={footer?.form || null} buttons={footer?.buttons || []} />
    </Fragment>
  )
}

export default ProductPage
