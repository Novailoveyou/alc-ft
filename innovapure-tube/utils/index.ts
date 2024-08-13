import { DEFAULT_LOCALE } from '@/constants'
import { PageModel } from '@/prisma/zod'
import { Locale } from '@prisma/client'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const parseLocale = (_locale: Locale): Locale =>
  PageModel.shape.locale.safeParse(_locale).success ? _locale : DEFAULT_LOCALE
