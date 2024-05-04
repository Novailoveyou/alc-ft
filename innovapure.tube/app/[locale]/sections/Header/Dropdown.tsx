'use client'

import * as React from 'react'
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { RU, GB, KZ, BY, FlagComponent } from 'country-flag-icons/react/3x2'
import { Icon } from '@/components/shared/icons'
import { Locale } from '@prisma/client'
import { useChangeLocale, useCurrentLocale } from '@/locales/client'

type Checked = DropdownMenuCheckboxItemProps['checked']

type LocaleIcon = {
  locale: Locale
  text: 'RU' | 'EN' | 'KZ' | 'BY'
  Flag: FlagComponent
}
const buttons = [
  { locale: 'ru', text: 'RU', Flag: RU },
  { locale: 'en', text: 'EN', Flag: GB },
  { locale: 'kk', text: 'KZ', Flag: KZ },
  { locale: 'be', text: 'BY', Flag: BY }
] satisfies LocaleIcon[]

export const LocaleSwitch = () => {
  const [selected, setSelected] = React.useState<Checked>(true)
  const changeLocale = useChangeLocale()
  const locale = useCurrentLocale()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost'>
          <strong>
            {buttons.find(button => locale === button.locale)!.text}
          </strong>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <>
          {buttons.map(({ locale, text, Flag }, idx) => {
            return (
              <DropdownMenuItem
                onSelect={() => {
                  changeLocale(locale)
                  console.log(locale)
                }}
                key={`locale_dropdown_${idx}`}>
                {text}
                <Icon className='w-5 flex justify-center'>
                  <Flag />
                </Icon>
              </DropdownMenuItem>
            )
          })}
        </>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
