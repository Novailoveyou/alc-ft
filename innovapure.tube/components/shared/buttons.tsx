import { Button, ButtonProps } from '@/components/ui/button'
import { Props } from '@/types'

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
