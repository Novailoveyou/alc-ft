import { ComponentProps } from 'react'

type Icon = Pick<ComponentProps<'i'>, 'className' | 'children'>

export const Icon = ({ className, children }: Icon) => {
  return <i className={className}>{children}</i>
}
