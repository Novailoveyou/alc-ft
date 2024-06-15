'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel'
import { useState, useEffect } from 'react'
import { Gallery } from './Gallery'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/shared/icons'
import { cn } from '@/utils'
import { ResponsiveImage } from '@/components/shared/images'
import arrowRightIcon from './images/arrow-right.svg'
import arrowLeftIcon from './images/arrow-left.svg'

const GalleryCarousel = ({ slides }: Pick<Gallery, 'slides'>) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    if (!api) return
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        {slides.map(
          (
            { id, strap, title, subtitle, image, buttons, isDecoration },
            idx
          ) => (
            <CarouselItem key={id}>
              <div className='flex flex-col justify-between sm:flex-row'>
                <div className='flex basis-1/2 flex-col justify-around'>
                  <p>{strap}</p>
                  {idx === 0 ? (
                    <h1 className=''>{title}</h1>
                  ) : (
                    <h2 className=''>{title}</h2>
                  )}
                  <p>{subtitle}</p>
                </div>

                <div className='basis-1/2'>
                  <ResponsiveImage {...image} priority />
                </div>
                <div className='my-8 flex'>
                  {buttons.map((button, buttonIdx) => (
                    <Button
                      key={`GalleryCarousel__button--${buttonIdx + 1}`}
                      variant={buttonIdx == 1 ? 'outline' : 'secondary'}
                      className={cn(
                        buttonIdx == 1 && 'hidden sm:block',
                        buttonIdx == 0 && 'my-8 w-full sm:my-0 sm:w-auto'
                      )}>
                      {button.text}
                    </Button>
                  ))}
                </div>
              </div>
            </CarouselItem>
          )
        )}
      </CarouselContent>
      <div className='flex items-center justify-center gap-4 sm:justify-start'>
        <div className='hidden sm:flex'>
          <Button variant='outline' onClick={() => api?.scrollPrev()}>
            <ResponsiveImage src={arrowLeftIcon} alt='Листать влево' />
          </Button>
          <Button variant='outline' onClick={() => api?.scrollNext()}>
            <ResponsiveImage src={arrowRightIcon} alt='Листать вправо' />
          </Button>
        </div>
        <div className='flex gap-4 sm:ml-44 sm:p-8'>
          {slides.map(({ id }, idx) => (
            <Button key={id} variant='ghost' onClick={() => api?.scrollTo(idx)}>
              <span
                className={cn(
                  'mx-auto my-4 mt-0 h-0.5 w-8 rounded border-0 bg-inactive md:my-10',
                  current === idx && 'bg-secondary'
                )}
              />
            </Button>
          ))}
        </div>
      </div>
    </Carousel>
  )
}

export default GalleryCarousel
