import { Button, ButtonProps } from '@/components/ui/button'
import { Props } from '@/types'
import { CompleteButton, CompletePhoneNumer } from '@/prisma/zod'
import { ComponentProps } from 'react'

type PhoneNumber = Pick<ComponentProps<'a'>, 'className'> &
  Pick<CompleteButton, 'text'> & {
    phoneNumber: Pick<CompletePhoneNumer, 'label' | 'value'> | null
  }

export const PhoneNumberButton = ({
  text,
  phoneNumber,
  ...props
}: PhoneNumber) => {
  if (!phoneNumber?.value) return <></>

  return (
    <a href={`tel:${phoneNumber.value}`} {...props}>
      {text || phoneNumber?.label || phoneNumber.value}
    </a>
  )
}

type Email = Pick<ComponentProps<'a'>, 'className'> &
  Pick<CompleteButton, 'text'> & {
    email: Pick<CompletePhoneNumer, 'label' | 'value'> | null
  }

export const EmailNumberButton = ({ text, email, ...props }: Email) => {
  if (!email?.value) return <></>

  return (
    <a href={`mailto:${email.value}`} {...props}>
      {text || email?.label || email.value}
    </a>
  )
}