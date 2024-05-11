import 'server-only'
import { getGallery } from './actions'
import GalleryCarousel from './GalleryCarousel'
import { ComponentProps } from 'react'
import { cn } from '@/utils'

export type Gallery = Pick<ComponentProps<'section'>, 'className'> & Exclude<Awaited<ReturnType<typeof getGallery>>, null>

export const Gallery = ({ className, slides }: Gallery) => {
  return (
    <section className={cn('rounded-b-lg', className)}>
      <div className='container'>
        <GalleryCarousel slides={slides} />
      </div>
    </section>
  )
}
