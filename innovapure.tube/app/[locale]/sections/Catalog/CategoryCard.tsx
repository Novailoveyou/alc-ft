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
    <Card className={cn('flex flex-col justify-between', className)}>
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
        <Link href={`/${slug}`} passHref legacyBehavior>
          <Button className='w-full'>
            <CheckIcon className='mr-2 h-4 w-4' /> {text}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
