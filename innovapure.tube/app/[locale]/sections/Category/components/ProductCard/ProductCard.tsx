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
import { Icon } from '@/components/shared/icons'
import shoppingCartIcon from './images/shopping-cart.svg'

type ProductCard = {
  product: Category['category']['products'][number]
}

const GLOW_ANIMATION = '[&:hover~*_a:nth-child(1)]:animate-button-glow'

export const ProductCard = ({
  product: { name, slug, categorySlug, image, parameters, buttons }
}: ProductCard) => {
  const [button1, button2] = buttons
  return (
    <Card
      className={cn(
        'not-prose',
        'flex',
        'flex-col',
        'justify-between',
        '[&_h2]:text-h6',
        '[&_h2]:font-semibold',
        '[&_p]:text-small',
        '[&>*]:px-6',
        '[&_a]:flex',
        '[&_a]:h-auto',
        '[&_a]:text-p',
        '[&_a]:font-semibold',
        'md:[&>*]:px-7'
      )}>
      <CardHeader
        className={cn('flex flex-col gap-4 pb-0 pt-7 md:pt-9', GLOW_ANIMATION)}>
        <ResponsiveImage
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          maxw={256}
        />
        <h2>{name}</h2>
      </CardHeader>
      <CardContent className={cn('py-3 md:py-7', GLOW_ANIMATION)}>
        <ul className='m-0 flex flex-col gap-4 p-0'>
          {parameters.map(({ id, isHighlighted, value, label }) => (
            <li key={id} className='m-0 p-0'>
              <p className='flex gap-5'>
                <ResponsiveImage
                  src={label.image.src}
                  alt={label.image.alt}
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
      <CardFooter className='items-stretch gap-3 md:pb-8'>
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
          className='aspect-square max-w-[3.75rem] flex-grow'>
          <Link href={`/${categorySlug}/${slug}`}>
            <ResponsiveImage src={shoppingCartIcon} alt='Корзина' />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
