import 'server-only'
import { getFooter } from './actions'

type Footer = Exclude<Awaited<ReturnType<typeof getFooter>>, null>

export const Footer = <_Footer extends Footer>({ form, buttons }: _Footer) => {
  console.log(buttons)
  return (
    <footer>
      <p>Footer</p>
      <p>{form?.title}</p>
      <p>{form?.description}</p>
    </footer>
  )
}
