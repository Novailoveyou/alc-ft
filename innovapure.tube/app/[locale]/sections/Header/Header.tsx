import 'server-only'
import { getHeader } from './actions'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LocaleSwitch } from './LocaleSwitch'
import { ThemeToggle } from '@/components/ThemeToggle'
import { ComponentProps } from 'react'
import { cn } from '@/utils'
import hamburgerIcon from './images/hamburger.svg'
import logoIcon from './images/logo.svg'
import { ResponsiveImage } from '@/components/shared/images'

type Header = Pick<ComponentProps<'header'>, 'className'> &
  Exclude<Awaited<ReturnType<typeof getHeader>>, null>

export const Header = ({ className, buttons }: Header) => {
  const links = buttons.filter(item => item.linkTo)

  return (
    <header className={cn(className)}>
      <div className='container flex justify-between gap-1 py-4'>
        <Link
          href='/'
          className='flex grow flex-row flex-nowrap items-center gap-2 sm:grow-0'>
          <ResponsiveImage src={logoIcon} alt='АЛСИ-ФТ' />
          <span className='text-nowrap'>АЛСИ-ФТ</span>
        </Link>
        <div className='hidden flex-wrap items-center justify-center sm:flex'>
          {links.map(({ id, linkTo, text }) => (
            <Button key={id} asChild variant={'ghost'}>
              <Link href={linkTo!}>{text}</Link>
            </Button>
          ))}
        </div>
        <Button variant={'outline'} className='sm:hidden'>
          <ResponsiveImage src={hamburgerIcon} alt='Меню' />
        </Button>
        <div className='flex'>
          <LocaleSwitch />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
