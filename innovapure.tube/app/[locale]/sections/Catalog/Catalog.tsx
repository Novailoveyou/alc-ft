import 'server-only'
import { getCatalog } from './actions'
import { CategoryCard } from './CategoryCard'
import { cn } from '@/utils'

export type Catalog = Exclude<Awaited<ReturnType<typeof getCatalog>>, null> & {
  isFullWidth?: true
}

export const Catalog = <_Catalog extends Catalog>({
  title,
  categories,
  isFullWidth
}: _Catalog) => {
  return (
    <section>
      <div className='container'>
        <h2>{title}</h2>
        <div className='grid grid-cols-2 grid-rows-2 gap-7 sm:grid-cols-6 sm:grid-rows-1 sm:stretch '>
          {categories.map((category, idx) => (
            <div
              key={`Catalog__CategoryCard--${idx + 1}`}
              className={cn('sm:row-span-2', {
                'sm:row-span-4 sm:col-span-2': [0, 1].includes(idx),
                'sm:col-span-2': [2].includes(idx)
              })}>
              <CategoryCard
                category={category}
                descriptionHidden={[3, 4].includes(idx)}
                className={cn('h-full', [4].includes(idx) && 'hidden sm:block')}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
