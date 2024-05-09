import 'server-only'
import { prisma } from '@/prisma'
import { cache } from 'react'
import { Locale, PageName } from '@prisma/client'

/**
 * @description Server Action - asynchronous function that is executed on the server. It can be used in Server and Client Components to handle form submissions and data mutations
 * @see https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
 */
export const getTestimonials = cache(
  async ({ locale, page }: { locale: Locale; page: PageName }) => {
    return await prisma.sectionTestimonials.findFirst({
      select: {
        title: true,
        testimonials: {
          select: {
            image: {
              select: {
                src: true,
                alt: true,
                width: true,
                height: true
              }
            },
            title: true,
            description: true
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
        }
      }
    })
  }
)
