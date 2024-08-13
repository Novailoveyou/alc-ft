import 'server-only'
import { NextPage } from 'next'
import { setStaticParamsLocale } from 'next-international/server'
import { Props } from '@/types'
import { getStaticParams } from '@/locales/server'
import { DEFAULT_LOCALE, ONE_HOUR_IN_SECONDS } from '@/constants'
import { Fragment } from 'react'
import { Revalidate } from 'next/dist/server/lib/revalidate'
import { Gallery, getGallery } from '@/components/sections/Gallery'
import { Catalog, getCatalog } from '@/components/sections/Catalog'
import { Header, getHeader } from '@/components/sections/Header'
import { Footer, getFooter } from '@/components/sections/Footer'
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
      <Header
        className='bg-custom-background'
        buttons={header?.buttons || []}
      />
      <main>
        <Gallery
          className='bg-custom-background'
          slides={gallery?.slides || []}
        />
        <Catalog
          title={catalog?.title || ''}
          categories={catalog?.categories || []}
        />
      </main>
      <Footer form={footer?.form || null} buttons={footer?.buttons || []} />
    </Fragment>
  )
}

export default HomePage
