import * as z from "zod"
import { Locale } from "@prisma/client"
import { CompleteForm, RelatedFormModel, CompleteButton, RelatedButtonModel, CompletePage, RelatedPageModel } from "./index"

export const FooterModel = z.object({
  /**
   * The unique identifier for the record
   * @default {Generated by database}
   */
  id: z.string(),
  locale: z.nativeEnum(Locale),
  isPublished: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  formId: z.string().nullish(),
})

export interface CompleteFooter extends z.infer<typeof FooterModel> {
  form?: CompleteForm | null
  buttons: CompleteButton[]
  pages: CompletePage[]
}

/**
 * RelatedFooterModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedFooterModel: z.ZodSchema<CompleteFooter> = z.lazy(() => FooterModel.extend({
  /**
   * footer form
   */
  form: RelatedFormModel.nullish(),
  /**
   * footer buttons
   */
  buttons: RelatedButtonModel.array(),
  /**
   * pages with this footer
   */
  pages: RelatedPageModel.array(),
}))
