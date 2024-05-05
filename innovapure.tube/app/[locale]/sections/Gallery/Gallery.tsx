import 'server-only'
import { getGallery } from './actions'
import GalleryCarousel from './GalleryCarousel'

export type Gallery = Exclude<Awaited<ReturnType<typeof getGallery>>, null>

export const Gallery = <_Gallery extends Gallery>({ slides }: _Gallery) => {
  console.log('slides: ', slides)

  return (
    <section className='bg-background-accent rounded-b-lg'>
      <div className='container'>
        <GalleryCarousel slides={slides} />
      </div>
    </section>
  )
}
