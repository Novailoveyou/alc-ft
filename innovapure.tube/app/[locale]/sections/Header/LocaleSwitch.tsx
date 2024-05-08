'use client'

import * as React from 'react'
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem
} from '@/components/ui/dropdown-menu'
import { RU, GB, KZ, BY, FlagComponent } from 'country-flag-icons/react/3x2'
import { Icon } from '@/components/shared/icons'
import { Locale } from '@prisma/client'
import { useChangeLocale, useCurrentLocale } from '@/locales/client'
import { cn } from '@/utils'

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
] as const satisfies LocaleIcon[]

const LocaleSwitchItem = ({
  text,
  Flag,
  strong
}: Pick<LocaleIcon, 'text' | 'Flag'> & { strong?: boolean }) => {
  return (
    <span className='flex gap-1 items-center'>
      <Icon className='w-5'>
        <Flag />
      </Icon>
      <span className={cn(strong && 'font-bold')}>{text}</span>
    </span>
  )
}

export const LocaleSwitch = () => {
  const [selected, setSelected] = React.useState<Checked>(true)
  const changeLocale = useChangeLocale()
  const currentLocale = useCurrentLocale()
  const button = buttons.find(button => currentLocale === button.locale)!

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost'>
          <LocaleSwitchItem text={button.text} Flag={button.Flag} strong />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=''>
        <DropdownMenuRadioGroup
          value={currentLocale}
          onValueChange={locale => {
            changeLocale(locale as Locale)
          }}>
          {buttons.map(({ locale, text, Flag }, idx) => {
            return (
              <DropdownMenuRadioItem
                key={`LocaleSwitch__DropdownMenuRadioItem--${idx + 1}`}
                value={locale}
                className='[&>*:nth-child(1)]:hidden gap-1 pl-2'>
                <LocaleSwitchItem text={text} Flag={Flag} />
              </DropdownMenuRadioItem>
            )
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
