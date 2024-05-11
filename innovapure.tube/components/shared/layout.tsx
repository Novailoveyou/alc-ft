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
      'prose-headings:m-0',
      'prose-headings:text-custom-accent',
      'prose-headings:font-semibold',
      'prose-headings:leading-tight',
      'prose-h1:text-h1',
      'prose-h2:text-h1',
      'prose-h3:text-h5',
      'prose-p:m-0',
      'prose-p:text-p',
      '[&_p]:text-custom-accent-foreground',
      'prose-p:max-w-prose',
      'prose-p:font-normal',
      'prose-p:leading-snug',
      '[&_button]:text-p',
      '[&_input]:text-p',
      // 'md:prose-p:prose-xl',
      // 'md:prose-2xl',
      className
    )}>
    <div className='container'>{children}</div>
  </section>
)
