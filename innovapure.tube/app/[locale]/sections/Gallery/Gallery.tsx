import 'server-only'
import { getGallery } from './actions'

type Gallery = Exclude<Awaited<ReturnType<typeof getGallery>>, null>

export const Gallery = <_Gallery extends Gallery>({ slides }: _Gallery) => {
  return (
    <section>
      <p>Gallery</p>
    </section>
  )
}
