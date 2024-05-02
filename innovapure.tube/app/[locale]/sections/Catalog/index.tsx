import 'server-only'
import {
  CompleteButton,
  CompleteSectionCatalog,
  CompleteCatalogCard,
  CompleteImage,
} from '@/prisma/zod'

type Catalog = Pick<CompleteSectionCatalog, 'title'> & {
  cards: (Pick<CompleteCatalogCard, 'name' | 'description'> & {
    image: Pick<CompleteImage, 'src' | 'alt'>
    button: Pick<CompleteButton, 'text'>
  })[]
}

export const Catalog = <_Catalog extends Catalog>({
  title,
  cards,
}: _Catalog) => {
  return <section>Catalog</section>
}
