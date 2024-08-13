import 'server-only'
import { NextPage } from 'next'
import { ONE_HOUR_IN_SECONDS } from '@/constants'
import { Fragment } from 'react'
import { Revalidate } from 'next/dist/server/lib/revalidate'
import { Header, getHeader } from '@/components/sections/Header'
import { Footer, getFooter } from '@/components/sections/Footer'
import { PageName } from '@prisma/client'
import { getCategoryStaticParams } from './actions'
import { Category, getCategory } from '@/components/sections/Category'
import {
  Testimonials,
  getTestimonials
} from '@/components/sections/Testimonials'

type CategoryPage = {
  params: Awaited<ReturnType<typeof generateStaticParams>>[number]
}

/**
 * @description The `generateStaticParams` function can be used in combination with **dynamic route segments** to **statically generate** routes at build time instead of on-demand at request time
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-static-params */
export const generateStaticParams = async () => await getCategoryStaticParams()

/**
 * @description To revalidate data at a timed interval, you can use the `next.revalidate` option of fetch to set the cache lifetime of a resource (in seconds)
 *
 * @see https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#revalidating-data */
export const revalidate: Revalidate = ONE_HOUR_IN_SECONDS

const CategoryPage: NextPage<CategoryPage> = async ({
  params: { locale, categorySlug }
}) => {
  const page = 'category' satisfies PageName

  const header = await getHeader({ locale, page })
  const category = await getCategory({ locale, page, categorySlug })
  const testimonials = await getTestimonials({ locale, page })
  const footer = await getFooter({ locale, page })

  return (
    <Fragment>
      <Header
        className='bg-custom-background'
        buttons={header?.buttons || []}
      />
      <main className='bg-custom-background'>
        {category?.category && <Category category={category.category} />}
        {testimonials && (
          <Testimonials
            title={testimonials.title}
            testimonials={testimonials.testimonials}
          />
        )}
      </main>
      <Footer form={footer?.form || null} buttons={footer?.buttons || []} />
    </Fragment>
  )
}

export default CategoryPage
