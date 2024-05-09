import 'server-only'
import { prisma } from '@/prisma'
import { cache } from 'react'
import { Locale, PageName } from '@prisma/client'
import { CompleteCategory } from '@/prisma/zod'

/**
 * @description Server Action - asynchronous function that is executed on the server. It can be used in Server and Client Components to handle form submissions and data mutations
 * @see https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
 */
export const getCategory = cache(
  async ({
    locale,
    page,
    categorySlug
  }: {
    locale: Locale
    page: PageName
    categorySlug: CompleteCategory['slug']
  }) => {
    return await prisma.sectionCategory.findFirst({
      select: {
        category: {
          select: {
            name: true,
            slug: true,
            description: true,
            products: {
              select: {
                category: {
                  select: {
                    slug: true
                  }
                },
                name: true,
                slug: true,
                description: true,
                image: {
                  select: {
                    src: true,
                    alt: true,
                    width: true,
                    height: true
                  }
                }
              }
            },
            image: {
              select: {
                src: true,
                alt: true,
                width: true,
                height: true
              }
            },
            button: {
              select: {
                text: true
              }
            }
          }
        }
      },
      where: {
        locale,
        isPublished: true,
        category: {
          slug: categorySlug
        },
        pages: {
          some: {
            name: page
          }
        }
      }
    })
  }
)
