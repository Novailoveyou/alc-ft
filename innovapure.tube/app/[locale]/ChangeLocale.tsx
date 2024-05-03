'use client'
import { useChangeLocale, useCurrentLocale } from '@/locales/client'
import { useStore } from '@/store'
import { useSearchParams } from 'next/navigation'
import {
  GhostButton,
  PrimaryButton,
  SecondaryButton,
} from '@/components/shared/buttons'

export default function Component() {
  const changeLocale = useChangeLocale()
  const locale = useCurrentLocale()

  const name = useStore(state => state.name)
  // const setFormData = useStore(state => state.setFormData)
  const searchParams = useSearchParams()

  // const hanldeOnClick = () => searchProps.

  return (
    <>
      <button></button>
      <p>Current locale: {locale}</p>
      <div>
        <h1>Buttons client</h1>
        <PrimaryButton onClick={() => alert('test')}>
          PrimaryButton
        </PrimaryButton>
        <SecondaryButton>SecondaryButton</SecondaryButton>
        <GhostButton>GhostButton</GhostButton>
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
