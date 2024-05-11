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
      'prose-h1:text-h3',
      'prose-h2:text-h3',
      'prose-h1:md:text-h1',
      'prose-h2:md:text-h1',
      '[&_h1]:font-semibold',
      '[&_h2]:font-semibold',
      'prose-p:m-0',
      'prose-p:text-[0.9375rem]',
      '[&_p]:text-custom-accent-foreground',
      'prose-p:max-w-prose',
      'prose-p:font-normal',
      'prose-p:leading-snug',
      'prose-p:md:text-p',
      '[&_button]:text-p',
      '[&_input]:text-p',
      // 'md:prose-p:prose-xl',
      // 'md:prose-2xl',
      className
    )}>
    <div className='container'>{children}</div>
  </section>
)
