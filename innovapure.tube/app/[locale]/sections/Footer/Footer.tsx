import 'server-only'
import { getFooter } from './actions'

type Footer = Exclude<Awaited<ReturnType<typeof getFooter>>, null>

export const Footer = <_Footer extends Footer>({ form, buttons }: _Footer) => {
  console.log('Footer form: ', form)
  console.log('Footer buttons: ', buttons)

  return (
    <header>
      <p>Footer</p>
      <p>{form?.title}</p>
      <p>{form?.description}</p>
      <div>{buttons.map(button => button.text)}</div>
    </header>
  )
}
