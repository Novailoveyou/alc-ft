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

const ArrowLeft = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='lucide lucide-arrow-left h-4 w-4'>
    <path d='m12 19-7-7 7-7'></path>
    <path d='M19 12H5'></path>
  </svg>
)
const ArrowRight = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='lucide lucide-arrow-right h-4 w-4'>
    <path d='M5 12h14'></path>
    <path d='m12 5 7 7-7 7'></path>
  </svg>
)

const GalleryCarousel = ({ slides }: Pick<Gallery, 'slides'>) => {
  const [api, setApi] = useState<CarouselApi>()
  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        {slides.map((slide, idx) => {
          return (
            <CarouselItem key={`carousel-item-${idx}`}>
              <div>
                <p>{slide.strap}</p>
                <h2>{slide.title}</h2>
                <p>{slide.subtitle}</p>
              </div>
              <div>
                <img src={slide.image.src} alt={slide.image.alt} />
              </div>
              {slide.buttons.map((button, buttonIdx) => (
                <Button
                  variant={buttonIdx == 1 ? 'outline' : 'secondary'}
                  key={`carousel-button-${buttonIdx}`}>
                  {button.text}
                </Button>
              ))}
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <div className='flex items-center gap-4'>
        <Button variant='outline' onClick={() => api?.scrollPrev()}>
          <Icon>
            <ArrowLeft />
          </Icon>
        </Button>
        <Button variant='outline' onClick={() => api?.scrollNext()}>
          <Icon>
            <ArrowRight />
          </Icon>
        </Button>
        <div className='flex gap-4 ml-44'>
          {slides.map(() => {
            return (
              <span
                onClick={() => console.log(1)}
                className='w-8 h-0.5 mx-auto mt-0 my-4 border-0 rounded md:my-10 bg-foreground'
              />
            )
          })}
        </div>
      </div>
    </Carousel>
  )
}

export default GalleryCarousel