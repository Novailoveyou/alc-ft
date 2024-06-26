import * as z from "zod"
import { Locale } from "@prisma/client"
import { CompleteButton, RelatedButtonModel } from "./index"

export const AddressModel = z.object({
  /**
   * The unique identifier for the record
   * @default {Generated by database}
   */
  id: z.string(),
  locale: z.nativeEnum(Locale),
  isPublished: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  /**
   * address value - link to ya maps
   */
  value: z.string().trim().min(1).max(1000),
  /**
   * address label
   */
  label: z.string().trim().min(1).max(320).optional().nullish(),
})

export interface CompleteAddress extends z.infer<typeof AddressModel> {
  buttons: CompleteButton[]
}

/**
 * RelatedAddressModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedAddressModel: z.ZodSchema<CompleteAddress> = z.lazy(() => AddressModel.extend({
  /**
   * buttons with this email
   */
  buttons: RelatedButtonModel.array(),
}))
