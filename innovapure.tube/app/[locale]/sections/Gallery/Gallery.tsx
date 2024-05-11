import 'server-only'
import { getGallery } from './actions'
import GalleryCarousel from './GalleryCarousel'

export type Gallery = Exclude<Awaited<ReturnType<typeof getGallery>>, null>

export const Gallery = ({ slides }: Gallery) => {
  return (
    <section className='bg-background-accent rounded-b-lg'>
      <div className='container'>
        <GalleryCarousel slides={slides} />
      </div>
    </section>
  )
}
