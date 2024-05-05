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

type CardContent = { category: Catalog['categories'][number] } & {
  descriptionHidden?: boolean
  className?: string
}

export const CategoryCard = ({
  category: {
    name,
    description,
    slug,
    image: { src, alt },
    button: { text }
  },
  descriptionHidden,
  className
}: CardContent) => {
  return (
    <Card className={cn('flex flex-col justify-between', className)}>
      <CardContent>
        <div className='flex items-center space-x-4 rounded-md border p-4'></div>
      </CardContent>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription hidden={descriptionHidden}>
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter>
        <Button className='w-full'>
          <CheckIcon className='mr-2 h-4 w-4' /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  )
}
