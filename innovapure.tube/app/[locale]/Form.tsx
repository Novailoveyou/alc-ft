'use client'

import { useForm } from 'react-hook-form'
import { useChangeLocale, useCurrentLocale } from '@/locales/client'
import { z } from 'zod'
import { zfd } from 'zod-form-data'
import { zodResolver } from '@hookform/resolvers/zod'
import { CompleteLead, CompleteUser, LeadModel, UserModel } from '@/prisma/zod'
// import { createLead } from '@/actions'
import { Store, lead, useStore, useUTMStore } from '@/store'
import { useShallow } from 'zustand/react/shallow'

const formData = zfd.formData(lead)

export type FormData = z.infer<typeof formData>

const Form = ({ formName }: Pick<Store, 'formName'>) => {
  const locale = useCurrentLocale()

  const {
    utm_source,
    utm_medium,
    utm_campaign,
    utm_content,
    utm_term,
    setStore,
  } = useStore(
    useShallow(
      ({
        utm_source,
        utm_medium,
        utm_campaign,
        utm_content,
        utm_term,
        setStore,
      }) => ({
        utm_source,
        utm_medium,
        utm_campaign,
        utm_content,
        utm_term,
        setStore,
      }),
    ),
  )

  const form = useForm<FormData>({
    resolver: zodResolver(formData),
    defaultValues: {
      locale,
      formName,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
    },
  })

  const onMyFormSubmit = async (data: FormData) => {
    // const res = await createLead(data)
    // if (res) {
    // setStore({
    //   utm_source: null,
    //   utm_medium: null,
    //   utm_campaign: null,
    //   utm_content: null,
    //   utm_term: null,
    // })
    // }
    // console.log(res)
  }

  console.log('form.formState.errors: ', form.formState.errors)

  // const setUTMStore = useUTMStore(state => state.setUTMStore)
  const utmCampaign = useUTMStore(state => state.utm_campaign)
  const utmContent = useUTMStore(state => state.utm_content)

  console.log('utmCampaign: ', utmCampaign)
  console.log('utmContent: ', utmContent)

  return (
    <>
      {/* <button
        onClick={() => {
          setUTMStore({ utm_campaign: '123', utm_content: 'test' })
        }}>
        setUTMStore
      </button>
      {'utmCampaign'}
      {utmCampaign}

      {'utmContent'}
      {utmContent} */}

      <form onSubmit={form.handleSubmit(data => onMyFormSubmit(data))}>
        <input {...form.register('name')} />
        <br />
        <br />
        <input {...form.register('phoneNumber')} />
        <br />
        <br />

        <input {...form.register('email')} />
        <br />
        <br />

        <input {...form.register('company')} />
        <br />
        <br />
        <input type='checkbox' {...form.register('isDataUsageAgreement')} />

        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Form
