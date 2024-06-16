import 'server-only'
import type { Metadata } from 'next'
import Locale from 'intl-locale-textinfo-polyfill'
import localFont from 'next/font/local'
import './globals.scss'
import { Props } from '@/types'
import { SWRProvider, ThemeProvider } from '@/components/shared/providers'

const mont = localFont({
  src: [
    {
      path: '../../fonts/mont/Mont-Thin.woff2',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../../fonts/mont/Mont-ExtraLight.woff2',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../../fonts/mont/Mont-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../fonts/mont/Mont-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../fonts/mont/Mont-SemiBold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../fonts/mont/Mont-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../fonts/mont/Mont-Heavy.woff2',
      weight: '800',
      style: 'normal'
    },
    {
      path: '../../fonts/mont/Mont-Black.woff2',
      weight: '900',
      style: 'normal'
    }
  ],
  variable: '--font-mont'
})

export const metadata: Metadata = {
  title: 'АЛСИ-ФТ',
  description: 'Силиконовые трубки'
}

/**
 * @description App Root Component / Entrance point
 */
export default async function RootLayout({
  children,
  params: { locale }
}: Props.Children & Props.NextLocaleParams) {
  const { direction: dir } = new Locale(locale).textInfo

  return (
    <html
      lang={locale}
      dir={dir}
      className={mont.variable}
      /** @see https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app */
      suppressHydrationWarning>
      <body className='font-mont'>
        <SWRProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </SWRProvider>
      </body>
    </html>
  )
}
