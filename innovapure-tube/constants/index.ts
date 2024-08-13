import { Locale } from '@prisma/client'
import { Revalidate } from 'next/dist/server/lib/revalidate'

export const ONE_HOUR_IN_SECONDS = 3600 satisfies Revalidate

export const DEFAULT_LOCALE = 'ru' satisfies Locale
