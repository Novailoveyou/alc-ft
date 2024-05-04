import 'server-only'
import { NextPage } from 'next'
import { setStaticParamsLocale } from 'next-international/server'
import { Props } from '@/types'
import { getStaticParams } from '@/locales/server'
import { ONE_HOUR_IN_SECONDS } from '@/constants'
import { Fragment } from 'react'
import { Revalidate } from 'next/dist/server/lib/revalidate'
import { Gallery } from './sections/Gallery/Gallery'
import { Catalog } from './sections/Catalog/Catalog'
import { Header, getHeader } from './sections/Header'
import { Footer, getFooter } from './sections/Footer'
import { getGallery } from './sections/Gallery'
import { getCatalog } from './sections/Catalog'
import { PageName } from '@prisma/client'

/**
 * @description The `generateStaticParams` function can be used in combination with **dynamic route segments** to **statically generate** routes at build time instead of on-demand at request time
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-static-params */
export const generateStaticParams = () => getStaticParams()

/**
 * @description To revalidate data at a timed interval, you can use the `next.revalidate` option of fetch to set the cache lifetime of a resource (in seconds)
 *
 * @see https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#revalidating-data */
export const revalidate: Revalidate = ONE_HOUR_IN_SECONDS

const HomePage: NextPage<Props.NextLocaleParams> = async ({
  params: { locale }
}) => {
  /** @see https://next-international.vercel.app/docs/app-static-rendering */
  setStaticParamsLocale(locale)

  const page = 'home' satisfies PageName

  const header = await getHeader({ locale, page })
  const gallery = await getGallery({ locale, page })
  const catalog = await getCatalog({ locale, page })
  const footer = await getFooter({ locale, page })

  return (
    <Fragment>
      <Header buttons={header?.buttons || []} />
      <main>
        <Gallery strap={gallery?.strap || ''} slides={gallery?.slides || []} />
        <Catalog title={catalog?.title || ''} cards={catalog?.cards || []} />
      </main>
      <Footer form={footer?.form || null} buttons={footer?.buttons || []} />
    </Fragment>
  )
}

export default HomePage
