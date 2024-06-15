import { cn } from '@/utils'
import Image, { ImageProps } from 'next/image'

type ResponsiveImage = Pick<
  ImageProps,
  'className' | 'src' | 'alt' | 'width' | 'height' | 'priority'
> & {
  maxw?: ResponsiveImage['width']
}

export const ResponsiveImage = ({
  src,
  alt,
  width,
  height,
  className,
  maxw
}: ResponsiveImage) => {
  if (!src) return <></>

  const _width =
    (width && maxw && Number(width) > Number(maxw) && maxw) || width

  const aspectRatio = Number(width) / Number(height)

  const _height =
    _width && aspectRatio ? Math.round(Number(_width) / aspectRatio) : height

  return (
    <span className={cn('relative flex justify-center [&>*]:my-0', className)}>
      <Image
        src={src}
        alt={alt}
        width={_width}
        height={_height}
        // sizes='300px'
        // fill
        // style={{
        //   objectFit: 'contain'
        // }}
      />
    </span>
  )
}
