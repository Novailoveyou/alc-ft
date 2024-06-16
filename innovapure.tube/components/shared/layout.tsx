import { cn } from '@/utils'
import { ComponentProps } from 'react'

type Section = ComponentProps<'section'> & {
  container?: ComponentProps<'div'>
  as?: 'footer' | 'header' | 'section'
}

export const Section = ({
  children,
  className,
  container = {},
  as: Tag = 'section',
  ...props
}: Section) => {
  return (
    <Tag
      {...props}
      className={cn(
        'prose',
        'dark:prose-invert',
        'max-w-none',
        'pt-3',
        'md:pt-5',
        '[&_a]:no-underline',
        'prose-headings:my-0',
        'prose-headings:text-custom-accent',
        'prose-headings:leading-tight',
        'prose-h1:text-h3',
        'prose-h2:text-h3',
        'prose-h1:md:text-h1',
        'prose-h2:md:text-h1',
        '[&_h1]:font-semibold',
        '[&_h1]:mb-3',
        '[&_h1]:md:mb-2',
        '[&_h2]:font-semibold',
        '[&_h2]:mb-5',
        '[&_h2]:md:mb-8',
        'prose-p:my-0',
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
      <div {...container} className={cn('container', container.className)}>
        {children}
      </div>
    </Tag>
  )
}
