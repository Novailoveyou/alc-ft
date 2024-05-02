'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

const PROPS = {
  attribute: 'class',
  defaultTheme: 'system',
  enableSystem: true,
  disableTransitionOnChange: true,
} as const satisfies Omit<ThemeProviderProps, 'children'>

/**
 * @see https://ui.shadcn.com/docs/dark-mode/next
 * @see https://github.com/pacocoursey/next-themes
 */
export const ThemeProvider = <Props extends ThemeProviderProps>({
  children,
  ...props
}: Props) => {
  return (
    <NextThemesProvider {...PROPS} {...props}>
      {children}
    </NextThemesProvider>
  )
}
