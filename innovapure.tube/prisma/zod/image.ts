import * as z from "zod"
import { Locale } from "@prisma/client"
import { CompleteSlide, RelatedSlideModel, CompleteCategory, RelatedCategoryModel, CompleteTestimonial, RelatedTestimonialModel, CompleteProduct, RelatedProductModel, CompleteUser, RelatedUserModel, CompleteParameterLabel, RelatedParameterLabelModel } from "./index"

export const ImageModel = z.object({
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
   * link to the image
   */
  src: z.string().trim().min(3).max(3000),
  /**
   * alternative text for the image
   */
  alt: z.string().trim().min(2).max(5000),
  /**
   * width of the image
   */
  width: z.number().int().int().gte(12).lte(2560),
  /**
   * height of the image
   */
  height: z.number().int().int().gte(12).lte(2560),
})

export interface CompleteImage extends z.infer<typeof ImageModel> {
  slides: CompleteSlide[]
  categories: CompleteCategory[]
  testimonials: CompleteTestimonial[]
  product: CompleteProduct[]
  user?: CompleteUser | null
  parameterLabel: CompleteParameterLabel[]
}

/**
 * RelatedImageModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedImageModel: z.ZodSchema<CompleteImage> = z.lazy(() => ImageModel.extend({
  /**
   * slides with this image
   */
  slides: RelatedSlideModel.array(),
  /**
   * categories with this image
   */
  categories: RelatedCategoryModel.array(),
  /**
   * testimonials with this image
   */
  testimonials: RelatedTestimonialModel.array(),
  /**
   * products with this image
   */
  product: RelatedProductModel.array(),
  user: RelatedUserModel.nullish(),
  /**
   * parameterLabel with this image
   */
  parameterLabel: RelatedParameterLabelModel.array(),
}))
