'use client'
import { useChangeLocale, useCurrentLocale } from '@/locales/client'
import { useStore } from '@/store'
import { useSearchParams } from 'next/navigation'
export default function Component() {
  const changeLocale = useChangeLocale()
  const locale = useCurrentLocale()

  const name = useStore(state => state.name)
  // const setFormData = useStore(state => state.setFormData)
  const searchParams = useSearchParams()

  // const hanldeOnClick = () => searchProps.

  return (
    <>
      <p>Current locale: {locale}</p>
      <div>
        <h1>Buttons client</h1>
        <h1>Buttons End</h1>
      </div>
      <div className='flex flex-col'>
        <button onClick={() => changeLocale('en')}>en</button>
        <button onClick={() => changeLocale('ru')}>ru</button>
        <button onClick={() => changeLocale('kk')}>kk</button>
        <button onClick={() => changeLocale('be')}>be</button>
      </div>
    </>
  )
}
