import 'server-only'
import { prisma } from '@/prisma'
import { cache } from 'react'
import { Locale, PageName } from '@prisma/client'

/**
 * @description Server Action - asynchronous function that is executed on the server. It can be used in Server and Client Components to handle form submissions and data mutations
 * @see https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
 */
export const getHeader = cache(
  async ({ locale, page }: { locale: Locale; page: PageName }) => {
    return await prisma.header.findFirst({
      select: {
        buttons: {
          select: {
            text: true,
            linkTo: true,
            localeTo: true,
            phoneNumberTo: true,
            emailTo: true
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
