import 'server-only'
import { prisma } from '@/prisma'
import { cache } from 'react'

/**
 * @description Server Action - asynchronous function that is executed on the server. It can be used in Server and Client Components to handle form submissions and data mutations
 * @see https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
 */
export const getProductStaticParams = cache(async () => {
  return await prisma.product
    .findMany({
      select: {
        locale: true,
        slug: true,
        category: {
          select: {
            slug: true
          }
        }
      },
      where: {
        isPublished: true
      }
    })
    .then(res =>
      res.map(param => ({
        locale: param.locale,
        categorySlug: param.category.slug,
        productSlug: param.slug
      }))
    )
})
