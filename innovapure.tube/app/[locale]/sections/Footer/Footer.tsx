import 'server-only'
import { getFooter } from './actions'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  EmailNumberButton,
  PhoneNumberButton
} from '@/components/shared/buttons'
import { ComponentProps } from 'react'
import { cn } from '@/utils'

type Footer = Pick<ComponentProps<'footer'>, 'className'> &
  Exclude<Awaited<ReturnType<typeof getFooter>>, null>

export const Footer = ({ className, form, buttons }: Footer) => {
  const phoneNumberButton = buttons.filter(
    button => button.phoneNumber?.value
  )[0]
  const addressButton = buttons.filter(button => button.address?.value)[0]
  console.log('kompot', addressButton)

  const emailButton = buttons.filter(button => button.email?.value)[0]

  const linkButton = buttons.filter(button => button.linkTo)

  return (
    <footer className={cn(className)}>
      <div className='flex flex-col items-start bg-secondary text-contrast'>
        <p>Footer</p>
        <p>{form?.title}</p>
        <p>{form?.description}</p>

        <div>
          <PhoneNumberButton
            text={phoneNumberButton.text}
            phoneNumber={phoneNumberButton.phoneNumber}
          />
          <p className='text-inactive'>{addressButton.text}</p>
          <EmailNumberButton
            text={emailButton.text}
            email={emailButton.email}
            className='text-primary'
          />
        </div>
        {linkButton.map(({ linkTo, text }, idx) => (
          <Button key={`Header__Link--${idx + 1}`} asChild variant={'ghost'}>
            <Link href={linkTo!}>{text}</Link>
          </Button>
        ))}
      </div>
    </footer>
  )
}
