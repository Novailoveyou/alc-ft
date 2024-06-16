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
import { Section } from '@/components/shared/layout'

type Footer = Pick<ComponentProps<'footer'>, 'className'> &
  Exclude<Awaited<ReturnType<typeof getFooter>>, null>

export const Footer = ({ className, form, buttons }: Footer) => {
  const phoneNumberButtons = buttons.filter(button => button.phoneNumber?.value)

  const addressButtons = buttons.filter(button => button.address?.value)

  const emailButtons = buttons.filter(button => button.email?.value)

  const linkButtons = buttons.filter(button => button.linkTo)

  return (
    <Section
      className={cn(
        'not-prose',
        '[&_h1]:mb-3',
        '[&_h1]:md:mb-5',
        '[&_h1]:text-center',
        '[&_h1~p]:mx-auto',
        '[&_h1~p]:text-center',
        'bg-secondary',
        className
      )}
      as='footer'>
      <form className='rounded-lg bg-primary py-24 text-center text-background [&_h2]:mb-2 [&_h2]:text-h3 md:[&_h2]:mb-3 md:[&_h2]:text-h1 [&_p]:text-background'>
        <h2>{form?.title}</h2>
        <p>{form?.description}</p>
      </form>
      <div className='flex flex-col items-start'>
        <div>
          {phoneNumberButtons.map(({ id, text, phoneNumber }) => (
            <PhoneNumberButton key={id} text={text} phoneNumber={phoneNumber} />
          ))}

          {addressButtons.map(({ id, text }) => (
            <p key={id} className='text-inactive'>
              {text}
            </p>
          ))}

          {emailButtons.map(({ id, text, email }) => (
            <EmailNumberButton
              key={id}
              text={text}
              email={email}
              className='text-primary'
            />
          ))}
        </div>
        {linkButtons.map(({ id, linkTo, text }) => (
          <Button key={id} asChild variant='ghost'>
            <Link href={linkTo!}>{text}</Link>
          </Button>
        ))}
      </div>
    </Section>
  )
}
