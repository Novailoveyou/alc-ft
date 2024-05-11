import 'server-only'
import { getGallery } from './actions'
import GalleryCarousel from './GalleryCarousel'
import { ComponentProps } from 'react'
import { cn } from '@/utils'
import { Section } from '@/components/shared/layout'

export type Gallery = Pick<ComponentProps<'section'>, 'className'> &
  Exclude<Awaited<ReturnType<typeof getGallery>>, null>

export const Gallery = ({ className, slides }: Gallery) => {
  return (
    <Section className={cn('rounded-b-lg', className)}>
      <GalleryCarousel slides={slides} />
    </Section>
  )
}
