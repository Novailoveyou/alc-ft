import Image, { ImageProps } from 'next/image'

type ResponsiveImage = Pick<
  ImageProps,
  'src' | 'alt' | 'width' | 'height' | 'priority'
>

export const ResponsiveImage = ({
  src,
  alt,
  width,
  height
}: ResponsiveImage) => {
  return (
    <span className='relative'>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        // sizes='300px'
        // fill
        // style={{
        //   objectFit: 'contain'
        // }}
      />
    </span>
  )
}
