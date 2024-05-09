import Image from 'next/image'

export const ResponsiveImage = () => {
  return (
    <div style={{ position: 'relative', width: '300px', height: '500px' }}>
      <Image
        src={photoUrl}
        alt='Picture of the author'
        sizes='300px'
        fill
        style={{
          objectFit: 'contain'
        }}
      />
    </div>
  )
}
