'use client'
import { SWRConfig } from 'swr'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ComponentProps } from 'react'

export const SWRProvider = (() => {
  type Props = ComponentProps<typeof SWRConfig>

  const VALUE = {
    // dedupingInterval: 2000
    revalidateOnReconnect: true,
    revalidateOnFocus: true,
    shouldRetryOnError: true,
    errorRetryInterval: 5000,
    errorRetryCount: 3,
    loadingTimeout: 3000,
    onLoadingSlow: () => {},
    onSuccess: () => {},
    onError: () => {},
  } as const satisfies Props['value']

  /** @see https://swr.vercel.app/docs/global-configuration */
  const SWRProvider = <_Props extends Pick<Props, 'children'>>({
    children,
  }: Props) => {
    return <SWRConfig value={VALUE}>{children}</SWRConfig>
  }

  return SWRProvider
})()

export const ThemeProvider = (() => {
  type Props = ComponentProps<typeof NextThemesProvider>

  const PROPS = {
    attribute: 'class',
    defaultTheme: 'system',
    enableSystem: true,
    disableTransitionOnChange: true,
  } as const satisfies Omit<Props, 'children'>

  /**
   * @see https://ui.shadcn.com/docs/dark-mode/next
   * @see https://github.com/pacocoursey/next-themes
   */
  const ThemeProvider = <_Props extends Pick<Props, 'children'>>({
    children,
  }: _Props) => {
    return <NextThemesProvider {...PROPS}>{children}</NextThemesProvider>
  }

  return ThemeProvider
})()
