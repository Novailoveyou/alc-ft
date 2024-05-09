import Image, { ImageProps } from 'next/image'

export const ResponsiveImage = ({
  src,
  alt,
  width,
  height
}: Pick<ImageProps, 'src' | 'alt' | 'width' | 'height'>) => {
  return (
    <div className='relative'>
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
    </div>
  )
}
