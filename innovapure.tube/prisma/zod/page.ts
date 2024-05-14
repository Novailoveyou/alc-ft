import * as z from "zod"
import { Locale, PageName } from "@prisma/client"
import { CompleteHeader, RelatedHeaderModel, CompleteSectionGallery, RelatedSectionGalleryModel, CompleteSectionCatalog, RelatedSectionCatalogModel, CompleteSectionTestimonials, RelatedSectionTestimonialsModel, CompleteSectionCategory, RelatedSectionCategoryModel, CompleteSectionProduct, RelatedSectionProductModel, CompleteFooter, RelatedFooterModel } from "./index"

export const PageModel = z.object({
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
   * page name
   */
  name: z.nativeEnum(PageName),
  headerId: z.string().nullish(),
  sectionGalleryId: z.string().nullish(),
  sectionCatalogId: z.string().nullish(),
  sectionTestimonialsId: z.string().nullish(),
  sectionCategoryId: z.string().nullish(),
  sectionProductId: z.string().nullish(),
  footerId: z.string().nullish(),
})

export interface CompletePage extends z.infer<typeof PageModel> {
  header?: CompleteHeader | null
  sectionGallery?: CompleteSectionGallery | null
  sectionCatalog?: CompleteSectionCatalog | null
  sectionTestimonials?: CompleteSectionTestimonials | null
  sectionCategory?: CompleteSectionCategory | null
  sectionProduct?: CompleteSectionProduct | null
  footer?: CompleteFooter | null
}

/**
 * RelatedPageModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPageModel: z.ZodSchema<CompletePage> = z.lazy(() => PageModel.extend({
  /**
   * page header
   */
  header: RelatedHeaderModel.nullish(),
  /**
   * page gallery section
   */
  sectionGallery: RelatedSectionGalleryModel.nullish(),
  /**
   * page catalog section
   */
  sectionCatalog: RelatedSectionCatalogModel.nullish(),
  /**
   * page testimonials section
   */
  sectionTestimonials: RelatedSectionTestimonialsModel.nullish(),
  /**
   * page category section
   */
  sectionCategory: RelatedSectionCategoryModel.nullish(),
  /**
   * page product section
   */
  sectionProduct: RelatedSectionProductModel.nullish(),
  /**
   * page footer
   */
  footer: RelatedFooterModel.nullish(),
}))
