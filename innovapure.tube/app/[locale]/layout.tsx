import 'server-only'
import type { Metadata } from 'next'
import Locale from 'intl-locale-textinfo-polyfill'
import { Inter } from 'next/font/google'
import './globals.scss'
import { Props } from '@/types'
import { SWRProvider, ThemeProvider } from '@/components/shared/providers'

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

  return (
    <html
      lang={locale}
      dir={dir}
      /** @see https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app */
      suppressHydrationWarning>
      <body className={inter.className}>
        <SWRProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </SWRProvider>
      </body>
    </html>
  )
}
