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
import { Switch } from '@/components/ui/switch'
import { Catalog } from './Catalog'

export const CategoryCard = ({
  card,
  className
}: { card: Catalog['cards'][number] } & { className?: string }) => {
  return (
    <Card className={cn('flex flex-col justify-between', className)}>
      <CardContent>
        <div className='flex items-center space-x-4 rounded-md border p-4'></div>
      </CardContent>
      <CardHeader>
        <CardTitle>{card.name}</CardTitle>
        <CardDescription>{card.description}</CardDescription>
      </CardHeader>

      <CardFooter>
        <Button className='w-full'>
          <CheckIcon className='mr-2 h-4 w-4' /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  )
}
