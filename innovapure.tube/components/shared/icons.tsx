import { ComponentProps } from 'react'

type Icon = Pick<ComponentProps<'i'>, 'className' | 'children'>

export const Icon = <_Icon extends Icon>({ className, children }: _Icon) => {
  return <i className={className}>{children}</i>
}
