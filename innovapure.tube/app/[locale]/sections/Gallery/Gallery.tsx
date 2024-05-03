import 'server-only'
import { getGallery } from './actions'

type Gallery = Exclude<Awaited<ReturnType<typeof getGallery>>, null>

export const Gallery = <_Gallery extends Gallery>({
  strap,
  slides,
}: _Gallery) => {
  console.log('Gallery strap: ', strap)
  console.log('Gallery slides: ', slides)

  return (
    <section>
      <p>Gallery</p>
      <p>{strap}</p>
      {slides.map(slide => slide.title)}
    </section>
  )
}
