import { CompleteButton, CompletePhoneNumer } from '@/prisma/zod'
import { ComponentProps } from 'react'

type PhoneNumber = Pick<ComponentProps<'a'>, 'className'> &
  Pick<CompleteButton, 'text'> & {
    phoneNumber: Pick<CompletePhoneNumer, 'label' | 'value'> | null
  }

export const PhoneNumber = <_PhoneNumber extends PhoneNumber>({
  text,
  phoneNumber,
  ...props
}: _PhoneNumber) => {
  if (!phoneNumber?.value) return <></>

  return (
    <a href={`tel:${phoneNumber.value}`} {...props}>
      {phoneNumber?.label || text || phoneNumber.value}
    </a>
  )
}
