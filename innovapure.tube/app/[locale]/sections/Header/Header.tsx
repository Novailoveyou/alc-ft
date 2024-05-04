import 'server-only'
import { getHeader } from './actions'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

type Header = Exclude<Awaited<ReturnType<typeof getHeader>>, null>

export const Header = <_Header extends Header>({ buttons }: _Header) => {
  return (
    <header>
      <p>Header</p>
      <div>{buttons.map(button => button.text)}</div>
    </header>
  )
}
