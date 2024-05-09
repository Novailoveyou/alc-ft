import 'server-only'
import { prisma } from '@/prisma'
import { cache } from 'react'
import { Locale, PageName } from '@prisma/client'

/**
 * @description Server Action - asynchronous function that is executed on the server. It can be used in Server and Client Components to handle form submissions and data mutations
 * @see https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
 */
export const getFooter = cache(
  async ({ locale, page }: { locale: Locale; page: PageName }) => {
    return await prisma.footer.findFirst({
      select: {
        form: {
          select: {
            title: true,
            description: true,
            isName: true,
            isPhoneNumber: true,
            isEmail: true,
            isAgreement: true,
            button: {
              select: {
                text: true
              }
            }
          }
        },
        buttons: {
          select: {
            text: true,
            phoneNumber: { select: { label: true, value: true } }
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
