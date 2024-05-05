import 'server-only'
import { prisma } from '@/prisma'
import { cache } from 'react'
import { Locale, PageName } from '@prisma/client'
import { CompleteCategory, CompleteProduct } from '@/prisma/zod'

/**
 * @description Server Action - asynchronous function that is executed on the server. It can be used in Server and Client Components to handle form submissions and data mutations
 * @see https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
 */
export const getProduct = cache(
  async ({
    locale,
    page,
    slug,
    categorySlug
  }: {
    locale: Locale
    page: PageName
    slug: CompleteProduct['slug']
    categorySlug: CompleteCategory['slug']
  }) => {
    return await prisma.sectionProduct.findFirst({
      select: {
        product: {
          select: {
            id: true,
            name: true,
            slug: true,
            description: true,
            image: {
              select: {
                src: true,
                alt: true
              }
            },
            category: {
              select: {
                name: true,
                slug: true
              }
            }
          }
        }
      },
      where: {
        locale,
        isPublished: true,
        pages: {
          some: {
            name: page
          }
        },
        product: {
          slug,
          category: {
            slug: categorySlug
          }
        }
      }
    })
  }
)
