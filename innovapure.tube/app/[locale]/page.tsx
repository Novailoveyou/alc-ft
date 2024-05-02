import 'server-only'
import { NextPage } from 'next'
import { setStaticParamsLocale } from 'next-international/server'
import { Props } from '@/types'
import { getStaticParams } from '@/locales/server'
import ChangeLocale from '@/app/[locale]/ChangeLocale'
import Form from './Form'
import { ThemeToggle } from '@/components/ThemeToggle'
import {
  GhostButton,
  PrimaryButton,
  SecondaryButton,
} from '@/components/shared/buttons'
import { ONE_HOUR_IN_SECONDS } from '@/constants'
import { Fragment } from 'react'
import { Revalidate } from 'next/dist/server/lib/revalidate'

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
  params: { locale },
}) => {
  /** @see https://next-international.vercel.app/docs/app-static-rendering */
  setStaticParamsLocale(locale)

  // const posts = await getPosts(locale)
  console.log('rerender')

  return (
    <Fragment>
      Main
      <ChangeLocale />
      <Form />
      <div>
        <h1>Buttons</h1>
        <PrimaryButton>PrimaryButton</PrimaryButton>
        <SecondaryButton>SecondaryButton</SecondaryButton>
        <GhostButton>GhostButton</GhostButton>
        <h1>Buttons End</h1>
      </div>
      <ThemeToggle />
      {/* {posts.map(post => JSON.stringify(post))} */}
    </Fragment>
  )
}

export default HomePage
