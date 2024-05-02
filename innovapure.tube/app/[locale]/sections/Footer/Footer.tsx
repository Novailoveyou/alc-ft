import 'server-only'
import { getFooter } from './actions'

type Footer = Partial<Awaited<ReturnType<typeof getFooter>>>

export const Footer = <_Footer extends Footer>(props: _Footer) => {
  const buttons = props?.buttons || []
  const form = props?.form

  return (
    <header>
      footer
      <br />
      {form?.title}
      {form?.description}
      <br />
      {buttons.map(button => button.text)}
    </header>
  )
}
