import 'server-only'
import type { Metadata } from 'next'
import Locale from 'intl-locale-textinfo-polyfill'
import { Inter } from 'next/font/google'
import './globals.scss'
import { Props } from '@/types'
import { SWRProvider } from '@/components/shared/swr-provider'
import { ThemeProvider } from '@/components/shared/theme-provider'
import { Fragment } from 'react'
import { PageName } from '@prisma/client'
import { Header, getHeader } from './sections/Header'
import { Footer, getFooter } from './sections/Footer'

export const PAGE = 'home' satisfies PageName

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'АЛСИ-ФТ',
  description: 'Силиконовые трубки',
}

/**
 * @description App Root Component / Entrance point
 */
export default async function RootLayout({
  children,
  params: { locale },
}: Props.Children & Props.NextLocaleParams) {
  const { direction: dir } = new Locale(locale).textInfo

  const header = await getHeader({ locale, page: PAGE })
  const footer = await getFooter({ locale, page: PAGE })

  return (
    <html
      lang={locale}
      dir={dir}
      /** @see https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app */
      suppressHydrationWarning>
      <body className={inter.className}>
        <SWRProvider>
          <ThemeProvider>
            <Fragment>
              <Header {...(header || {})} />
              <main>{children}</main>
              <Footer {...(footer || {})} />
            </Fragment>
          </ThemeProvider>
        </SWRProvider>
      </body>
    </html>
  )
}
