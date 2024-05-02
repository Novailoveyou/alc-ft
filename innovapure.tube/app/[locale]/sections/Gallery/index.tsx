import 'server-only'
import {
  CompleteImage,
  CompleteSectionGallery,
  CompleteSlide,
  CompleteButton,
} from '@/prisma/zod'

type Gallery = Pick<CompleteSectionGallery, 'strap'> & {
  slides: (Pick<CompleteSlide, 'title' | 'subtitle' | 'isDecoration'> & {
    image: Pick<CompleteImage, 'src' | 'alt'>
    buttons: Pick<CompleteButton, 'text'>[]
  })[]
}

export const Gallery = <_Gallery extends Gallery>({
  strap,
  slides,
}: _Gallery) => {
  return <section>Gallery</section>
}
