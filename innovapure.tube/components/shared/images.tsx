import Image, { ImageProps } from 'next/image'

type ResponsiveImage = Pick<ImageProps, 'src' | 'alt' | 'width' | 'height'>

export const ResponsiveImage = <_ResponsiveImage extends ResponsiveImage>({
  src,
  alt,
  width,
  height
}: _ResponsiveImage) => {
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
