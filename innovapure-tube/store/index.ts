import { create } from 'zustand'
import {
  StateStorage,
  createJSONStorage,
  devtools,
  persist
} from 'zustand/middleware'
import type {} from '@redux-devtools/extension' // required for devtools typing
import { z } from 'zod'
import { zfd } from 'zod-form-data'
import { CompleteUser, LeadModel, UserModel } from '@/prisma/zod'
import { querystring } from 'zustand-querystring'
import { immer } from 'zustand/middleware/immer'

const formData = UserModel.pick({
  name: true,
  // phoneNumber: true,
  // email: true,
  // company: true,
  locale: true,
  isDataUsageAgreement: true
})

const formDataSchema = zfd.formData(formData)
type FormData = z.infer<typeof formDataSchema>

export const lead = LeadModel.omit({ id: true, createdAt: true })
  .merge(formData)
  .partial()
  .strict()
export type Lead = z.infer<typeof lead>

// const formDataSchema = zfd.formData(
//   LeadModel.omit({ id: true, userId: true, createdAt: true })
//     .merge(
//       UserModel.omit({
//         id: true,
//         createdAt: true,
//         updatedAt: true,
//         isDataUsageAgreement: true,
//       }).extend({ isDataUsageAgreement: z.boolean() }),
//     )
//     .partial()
//     .strict(),
// )

type State = Lead

export type Store = State & {
  setStore: (store: State) => void
}

export const useStore = create<Store>()(
  devtools(
    persist(
      set => ({
        name: '',
        phoneNumber: '',
        email: '',
        isDataUsageAgreement: true,
        locale: 'ru',
        // url: '',
        // formName: '',
        // ip: '',
        // gmClientId: '',
        // ymClientID: '',
        // userAgent: '',
        // utm_source: '',
        // utm_medium: '',
        // utm_campaign: '',
        // utm_content: '',
        // utm_term: '',
        setStore: formData => set(() => lead.parse({ ...formData }))
      }),
      {
        name: 'store'
      }
    )
  )
)

export const utms = LeadModel.pick({
  utm_source: true,
  utm_medium: true,
  utm_campaign: true,
  utm_content: true,
  utm_term: true
})

export type Utms = z.infer<typeof utms>

type UTMStore = Utms & {
  setUTMStore: (UTMState: Utms) => void
}

export const useUTMStore = create<UTMStore>()(
  devtools(
    querystring<UTMStore>(
      set => {
        // const urlSearchParams = new URLSearchParams(location.href)
        return {
          utm_source: null,
          utm_medium: null,
          utm_campaign: null,
          utm_content: null,
          utm_term: null,
          setUTMStore: UTMState => set(() => utms.parse({ ...UTMState }))
        }
      },
      {
        select: pathname => ({
          utm_source: true,
          utm_medium: true,
          utm_campaign: true,
          utm_content: true,
          utm_term: true
        }),
        key: ''
      }
    )
  )
)
