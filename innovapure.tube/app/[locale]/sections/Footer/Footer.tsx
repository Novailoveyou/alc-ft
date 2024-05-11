import 'server-only'
import { getFooter } from './actions'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PhoneNumberButton } from '@/components/shared/buttons'
import { ComponentProps } from 'react'
import { cn } from '@/utils'

type Footer = Pick<ComponentProps<'footer'>, 'className'> &
  Exclude<Awaited<ReturnType<typeof getFooter>>, null>

export const Footer = ({ className, form, buttons }: Footer) => {
  const phoneNumberButtons = buttons.filter(button => button.phoneNumber?.value)

  const addressButtons = buttons.filter(button => button.address?.value)

  const emailButtons = buttons.filter(button => button.email?.value)

  const linkButtons = buttons.filter(button => button.linkTo)

  return (
    <footer className={cn(className)}>
      <div className='flex flex-col items-start'>
        <p>Footer</p>
        <p>{form?.title}</p>
        <p>{form?.description}</p>

        <div>
          {phoneNumberButtons.map(({ text, phoneNumber }, idx) => (
            <PhoneNumberButton
              key={`Footer__phoneNumber--${idx + 1}`}
              text={text}
              phoneNumber={phoneNumber}
            />
          ))}
        </div>
        {linkButtons.map(({ linkTo, text }, idx) => (
          <Button key={`Header__Link--${idx + 1}`} asChild variant={'ghost'}>
            <Link href={linkTo!}>{text}</Link>
          </Button>
        ))}
      </div>
    </footer>
  )
}
