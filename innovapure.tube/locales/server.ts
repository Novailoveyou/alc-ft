import { createI18nServer } from 'next-international/server'
import { Locale } from '@/types'

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer({
    ru: () => import('@/locales/static/ru'),
    en: () => import('@/locales/static/en'),
    kk: () => import('@/locales/static/kk'),
    be: () => import('@/locales/static/be'),
  } satisfies { [key in Locale]: () => void })
