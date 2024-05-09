import 'server-only'
import { getFooter } from './actions'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

type Footer = Exclude<Awaited<ReturnType<typeof getFooter>>, null>

export const Footer = <_Footer extends Footer>({ form, buttons }: _Footer) => {
  const links = buttons.filter(item => item.linkTo)
  const phone = buttons.find(item => item.phoneNumberTo)
  console.log(buttons)
  // TODO: get address from buttons object
  const address = 'Москва, Улица 28'
  return (
    <footer>
      <div className='flex flex-col items-start'>
        <p>Footer</p>
        <p>{form?.title}</p>
        <p>{form?.description}</p>
        <h2>
          <a href={`tel:${phone?.phoneNumberTo?.value}`}>
            {phone?.phoneNumberTo?.label}
          </a>
        </h2>
        {links.map((link, idx) => {
          return (
            <Link
              key={`Header__Link--${idx + 1}`}
              href={link.linkTo!}
              passHref
              legacyBehavior>
              <Button variant={'ghost'}>{link.text}</Button>
            </Link>
          )
        })}
      </div>
    </footer>
  )
}
