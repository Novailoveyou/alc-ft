import 'server-only'
import { getFooter } from './actions'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PhoneNumberButton } from '@/components/shared/buttons'

type Footer = Exclude<Awaited<ReturnType<typeof getFooter>>, null>

export const Footer = <_Footer extends Footer>({ form, buttons }: _Footer) => {
  const phoneNumberButtons = buttons.filter(button => button.phoneNumber?.value)

  const addressButtons = buttons.filter(button => button.address?.value)

  const emailButtons = buttons.filter(button => button.email?.value)

  const linkButtons = buttons.filter(button => button.linkTo)

  return (
    <footer>
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
          <Button asChild variant={'ghost'}>
            <Link key={`Header__Link--${idx + 1}`} href={linkTo!}>
              {text}
            </Link>
          </Button>
        ))}
      </div>
    </footer>
  )
}
