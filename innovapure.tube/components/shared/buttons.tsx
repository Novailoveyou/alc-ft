import { Button, ButtonProps } from '@/components/ui/button'
import { Props } from '@/types'
import { CompleteButton, CompletePhoneNumer } from '@/prisma/zod'
import { ComponentProps } from 'react'

type Button = Props.Children & Pick<ButtonProps, 'onClick'>

export const PrimaryButton = <_Button extends Button>({
  children,
  ...props
}: _Button) => <Button {...props}>{children}</Button>

export const SecondaryButton = <_Button extends Button>({
  children,
  ...props
}: _Button) => (
  <Button variant='secondary' {...props}>
    {children}
  </Button>
)

export const GhostButton = <_Button extends Button>({
  children,
  ...props
}: _Button) => (
  <Button variant='ghost' {...props}>
    {children}
  </Button>
)

type PhoneNumber = Pick<ComponentProps<'a'>, 'className'> &
  Pick<CompleteButton, 'text'> & {
    phoneNumber: Pick<CompletePhoneNumer, 'label' | 'value'> | null
  }

export const PhoneNumberButton = <_PhoneNumber extends PhoneNumber>({
  text,
  phoneNumber,
  ...props
}: _PhoneNumber) => {
  if (!phoneNumber?.value) return <></>

  return (
    <a href={`tel:${phoneNumber.value}`} {...props}>
      {text || phoneNumber?.label || phoneNumber.value}
    </a>
  )
}
