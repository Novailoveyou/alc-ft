import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Category } from '../../Category'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { ResponsiveImage } from '@/components/shared/images'
import { cn } from '@/utils'
import shoppingCartIcon from './images/shopping-cart.svg'

type ProductCard = {
  product: Category['category']['products'][number]
}

// const GLOW_ANIMATION = '[&:hover~*_a:nth-child(1)]:animate-button-glow'

export const ProductCard = ({
  product: { name, slug, categorySlug, image, parameters, buttons }
}: ProductCard) => {
  const [button1, button2] = buttons
  return (
    <Card className='not-prose flex flex-col justify-between overflow-hidden [&:hover>*:nth-child(1)_img]:scale-105 [&:hover>*:nth-child(1)_img]:transition-transform [&>*]:px-6 md:[&>*]:px-7 [&_h2]:text-h6 [&_h2]:font-semibold [&_p]:text-small'>
      <CardHeader className={cn('flex flex-col gap-4 pb-0 pt-7 md:pt-9')}>
        <Link href={`/${categorySlug}/${slug}`} title={image.alt}>
          <ResponsiveImage
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            maxw={256}
          />
        </Link>
        <h2>{name}</h2>
      </CardHeader>
      <CardContent className={cn('py-3 md:py-7')}>
        <ul className='m-0 flex flex-col gap-4 p-0'>
          {parameters.map(({ id, isHighlighted, value, label }) => (
            <li key={id} className='m-0 p-0'>
              <p className='flex gap-5'>
                <ResponsiveImage
                  src={label.image.src}
                  alt={label.image.alt || label.name}
                  width={label.image.width}
                  height={label.image.height}
                  maxw={40}
                />
                <span className='flex flex-col gap-1'>
                  <span>{label.name}</span>
                  <span className='text-regular text-black'>{value}</span>
                </span>
              </p>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className='items-stretch gap-3 md:pb-8 [&>a]:flex [&>a]:h-auto [&>a]:text-p [&>a]:font-semibold'>
        <Button
          asChild
          variant='outline'
          size='lg'
          className='flex-grow px-[4%] py-4'>
          <Link href={`/${categorySlug}/${slug}`}>{button1.text}</Link>
        </Button>
        <Button
          asChild
          variant='outline'
          size='icon'
          title={button2.text}
          className='aspect-square max-w-[3.75rem] flex-grow'>
          <Link href={`/${categorySlug}/${slug}`}>
            <ResponsiveImage src={shoppingCartIcon} alt='Корзина' />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
