import { ReactNode } from 'react'
import { Locale } from '@prisma/client'

export namespace Props {
  export type Children = Readonly<{ children: ReactNode }>

  type NextParams<T> = Readonly<{ params: T }>
  export type NextLocaleParams = NextParams<Readonly<{ locale: Locale }>>
}
