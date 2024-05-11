import { cn } from '@/utils'
import { ComponentProps } from 'react'

type Section = ComponentProps<'section'>

export const Section = ({ children, className, ...props }: Section) => (
  <section
    {...props}
    className={cn(
      'prose',
      'dark:prose-invert',
      'max-w-none',
      'prose-p:m-0',
      'prose-headings:text-text-accent',
      'prose-headings:font-semibold',
      'prose-headings:leading-tight',
      'prose-headings:m-0',
      'prose-p:text-text-dim',
      'prose-p:max-w-prose',
      'prose-p:font-normal',
      'prose-p:leading-snug',
      'md:prose-2xl',
      'md:prose-p:prose-xl',
      className
    )}>
    <div className='container'>{children}</div>
  </section>
)
