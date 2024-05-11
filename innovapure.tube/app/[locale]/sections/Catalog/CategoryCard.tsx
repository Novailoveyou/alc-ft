import 'server-only'

import { BellIcon, CheckIcon } from '@radix-ui/react-icons'

import { cn } from '@/utils'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Catalog } from './Catalog'
import Link from 'next/link'
import { ResponsiveImage } from '@/components/shared/images'

type CardContent = { category: Catalog['categories'][number] } & {
  descriptionHidden?: boolean
  className?: string
}

export const CategoryCard = ({
  category: {
    name,
    description,
    slug,
    image: { src, alt, width, height },
    button: { text }
  },
  descriptionHidden,
  className
}: CardContent) => {
  return (
    <Card
      className={cn(
        'flex',
        'flex-col',
        'justify-between',
        '[&_a]:no-underline',
        '[&_h3]:text-p',
        '[&_h3]:font-semibold',
        'md:[&_h3]:text-h5',
        '[&_p]:text-tiny',
        'md:[&_p]:text-small',
        className
      )}>
      <CardContent>
        <div className='flex items-center space-x-4 rounded-md border p-4'>
          <ResponsiveImage
            src={src}
            alt={alt}
            width={width / 2}
            height={height / 2}
          />
        </div>
      </CardContent>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription className={cn(descriptionHidden && 'sm:hidden')}>
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter>
        <Button asChild className='w-full'>
          <Link href={`/${slug}`}>
            <span>
              <CheckIcon className='mr-2 h-4 w-4' />
            </span>
            {text}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
