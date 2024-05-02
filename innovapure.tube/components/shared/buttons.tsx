import { Button, ButtonProps } from '@/components/ui/button'
import { Props } from '@/types'

export const PrimaryButton = ({
  children,
  ...props
}: Props.Children & Pick<ButtonProps, 'onClick'>) => (
  <Button {...props}>{children}</Button>
)

export const SecondaryButton = ({
  children,
  ...props
}: Props.Children & Pick<ButtonProps, 'onClick'>) => (
  <Button variant='secondary' {...props}>
    {children}
  </Button>
)

export const GhostButton = ({
  children,
  ...props
}: Props.Children & Pick<ButtonProps, 'onClick'>) => (
  <Button variant='ghost' {...props}>
    {children}
  </Button>
)
