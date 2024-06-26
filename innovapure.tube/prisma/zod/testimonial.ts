import * as z from "zod"
import { Locale } from "@prisma/client"
import { CompleteImage, RelatedImageModel, CompleteSectionTestimonials, RelatedSectionTestimonialsModel } from "./index"

export const TestimonialModel = z.object({
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
   * testimonial title
   */
  title: z.string().trim().min(1).max(60),
  /**
   * testimonial description
   */
  description: z.string().trim().min(1).max(300),
  imageId: z.string(),
})

export interface CompleteTestimonial extends z.infer<typeof TestimonialModel> {
  image: CompleteImage
  sectionTestimonials: CompleteSectionTestimonials[]
}

/**
 * RelatedTestimonialModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedTestimonialModel: z.ZodSchema<CompleteTestimonial> = z.lazy(() => TestimonialModel.extend({
  /**
   * testimonial image
   */
  image: RelatedImageModel,
  sectionTestimonials: RelatedSectionTestimonialsModel.array(),
}))
