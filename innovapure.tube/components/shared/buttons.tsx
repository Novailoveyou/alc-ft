import { Button, ButtonProps } from '@/components/ui/button'
import { Props } from '@/types'
import { CompleteButton, CompletePhoneNumer } from '@/prisma/zod'
import { ComponentProps } from 'react'

type Button = Props.Children & Pick<ButtonProps, 'onClick'>

export const PrimaryButton = ({ children, ...props }: Button) => (
  <Button {...props}>{children}</Button>
)

export const SecondaryButton = ({ children, ...props }: Button) => (
  <Button variant='secondary' {...props}>
    {children}
  </Button>
)

export const GhostButton = ({ children, ...props }: Button) => (
  <Button variant='ghost' {...props}>
    {children}
  </Button>
)

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
