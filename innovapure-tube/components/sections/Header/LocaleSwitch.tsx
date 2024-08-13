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
  {
    id: '6122e78d-7d36-4670-a9cf-487950906d65',
    locale: 'ru',
    text: 'RU',
    Flag: RU
  },
  {
    id: 'f611eded-7edb-421a-a1da-347ce54fea0e',
    locale: 'en',
    text: 'EN',
    Flag: GB
  },
  {
    id: '9867c26f-715b-4541-bdc1-3a1a6e038b3a',
    locale: 'kk',
    text: 'KZ',
    Flag: KZ
  },
  {
    id: 'e08f3585-447f-4021-987f-f78e374e8e77',
    locale: 'be',
    text: 'BY',
    Flag: BY
  }
] as const satisfies ({ id: string } & LocaleIcon)[]

const LocaleSwitchItem = ({
  text,
  Flag,
  strong
}: Pick<LocaleIcon, 'text' | 'Flag'> & { strong?: boolean }) => {
  return (
    <span className='flex items-center gap-1'>
      <Flag className='w-5' />
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
          {buttons.map(({ id, locale, text, Flag }) => (
            <DropdownMenuRadioItem
              key={id}
              value={locale}
              className='gap-1 pl-2 [&>*:nth-child(1)]:hidden'>
              <LocaleSwitchItem text={text} Flag={Flag} />
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
