import 'server-only'
import { getCatalog } from './actions'

type Catalog = Exclude<Awaited<ReturnType<typeof getCatalog>>, null> & {
  isFullWidth?: true
}

export const Catalog = <_Catalog extends Catalog>({
  title,
  cards,
  isFullWidth
}: _Catalog) => {
  return (
    <section>
      <p>Catalog</p>
      <p>{title}</p>
      <div>{cards.map(card => card.button.text)}</div>
    </section>
  )
}
