import 'server-only'
import { getCategory } from './actions'

type Category = Exclude<Awaited<ReturnType<typeof getCategory>>, null>

export const Category = <_Category extends Category>({
  category
}: _Category) => {
  return (
    <section>
      <p>{category.name}</p>
      <p>{category.slug}</p>
      <p>{category.description}</p>
    </section>
  )
}
