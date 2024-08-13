import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest } from 'next/server'
import { UnionToTuple } from '@/types'
import { Locale } from '@prisma/client'
import { DEFAULT_LOCALE } from './constants'

const I18nMiddleware = createI18nMiddleware({
  locales: ['ru', 'en', 'kk', 'be'] as const satisfies UnionToTuple<Locale>,
  defaultLocale: DEFAULT_LOCALE,
  urlMappingStrategy: 'rewriteDefault'
})

export function middleware(request: NextRequest) {
  return I18nMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)']
}

// export { auth as middleware } from "@/auth"
// TODO: compose middleware https://github.com/vercel/next.js/discussions/53997 and https://stackoverflow.com/questions/76603369/how-to-use-multiple-middlewares-in-next-js-using-the-middleware-ts-file
