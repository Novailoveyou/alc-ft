import * as z from "zod"
import { Locale, PageName, LocaleTo } from "@prisma/client"
import { CompletePhoneNumer, RelatedPhoneNumerModel, CompleteEmail, RelatedEmailModel, CompleteAddress, RelatedAddressModel, CompleteCategory, RelatedCategoryModel, CompleteSlide, RelatedSlideModel, CompleteForm, RelatedFormModel, CompleteHeader, RelatedHeaderModel, CompleteFooter, RelatedFooterModel, CompleteProduct, RelatedProductModel } from "./index"

export const ButtonModel = z.object({
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
   * button text
   */
  text: z.string().trim().min(1).max(80),
  phoneNumberId: z.string().nullish(),
  emailId: z.string().nullish(),
  addressId: z.string().nullish(),
  /**
   * if button is intended to be a link, then linkTo is the link
   */
  linkTo: z.nativeEnum(PageName).nullish(),
  /**
   * if button is intended to be a language change, then localeTo is the language
   */
  localeTo: z.nativeEnum(LocaleTo).nullish(),
  /**
   * if button is intended to add product to cart, then addToCart is true
   */
  isAddToCart: z.boolean(),
  /**
   * if button is intended to open lead form, then isLeadForm is true
   */
  isLeadForm: z.boolean(),
})

export interface CompleteButton extends z.infer<typeof ButtonModel> {
  phoneNumber?: CompletePhoneNumer | null
  email?: CompleteEmail | null
  address?: CompleteAddress | null
  categories: CompleteCategory[]
  slides: CompleteSlide[]
  forms: CompleteForm[]
  headers: CompleteHeader[]
  footers: CompleteFooter[]
  products: CompleteProduct[]
}

/**
 * RelatedButtonModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedButtonModel: z.ZodSchema<CompleteButton> = z.lazy(() => ButtonModel.extend({
  /**
   * if button is intended to be a trigger to phone call, then phoneNumber is the number to call
   */
  phoneNumber: RelatedPhoneNumerModel.nullish(),
  /**
   * if button is intended to be a trigger to email, then email is the email to send to
   */
  email: RelatedEmailModel.nullish(),
  /**
   * if button is intended to be an address, then address is the address
   */
  address: RelatedAddressModel.nullish(),
  /**
   * categories with this button
   */
  categories: RelatedCategoryModel.array(),
  /**
   * slides with this button
   */
  slides: RelatedSlideModel.array(),
  /**
   * forms with this button
   */
  forms: RelatedFormModel.array(),
  /**
   * headers with this button
   */
  headers: RelatedHeaderModel.array(),
  /**
   * footers with this button
   */
  footers: RelatedFooterModel.array(),
  /**
   * products with this button
   */
  products: RelatedProductModel.array(),
}))