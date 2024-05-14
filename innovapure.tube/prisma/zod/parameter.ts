import * as z from "zod"
import { Locale } from "@prisma/client"
import { CompleteParameterLabel, RelatedParameterLabelModel, CompleteProduct, RelatedProductModel } from "./index"

export const ParameterModel = z.object({
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
   * parameter value
   */
  value: z.string().trim().min(1).max(240),
  /**
   * whether parameter is highlighted
   */
  isHighlighted: z.boolean(),
  labelName: z.string(),
})

export interface CompleteParameter extends z.infer<typeof ParameterModel> {
  label: CompleteParameterLabel
  products: CompleteProduct[]
}

/**
 * RelatedParameterModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedParameterModel: z.ZodSchema<CompleteParameter> = z.lazy(() => ParameterModel.extend({
  /**
   * parameter label
   */
  label: RelatedParameterLabelModel,
  /**
   * parameter product
   */
  products: RelatedProductModel.array(),
}))
