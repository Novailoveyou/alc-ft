import 'server-only'
import { getHeader } from './actions'

type Header = Partial<Awaited<ReturnType<typeof getHeader>>>

export const Header = <_Header extends Header>(props: _Header) => {
  const buttons = props?.buttons || []

  console.log('Header props: ', props)
  return (
    <header>
      header
      <br />
      {buttons.map(button => button.text)}
    </header>
  )
}
