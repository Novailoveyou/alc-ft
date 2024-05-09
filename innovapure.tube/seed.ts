/**
 * ! Executing this script will delete all data in your database and seed it with 10 user.
 * ! Make sure to adjust the script to your needs.
 * Use any TypeScript runner to run this script, for example: `npx tsx seed.ts`
 * Learn more about the Seed Client by following our guide: https://docs.snaplet.dev/seed/getting-started
 */
import { createSeedClient } from '@snaplet/seed'
import { copycat } from '@snaplet/copycat'

const main = async () => {
  const seed = await createSeedClient()

  // Truncate all tables in the database
  await seed.$resetDatabase()

  const Image = await seed.image([
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      src: '/',
      alt: 'Test'
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      src: 'https://res.cloudinary.com/innovapure-tube/image/upload/v1715253642/assets/tube_8a5b726b-6810-4ad8-8f8a-ef86c8132b14-PhotoRoom.png-PhotoRoom_qhpgdk.png',
      width: 1200,
      height: 870,
      alt: 'Innovaprene P 60'
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      src: 'https://res.cloudinary.com/innovapure-tube/image/upload/v1715253674/assets/Innovaprene_6b85c088-de5e-412a-a15b-d487aec6208b-PhotoRoom.png-PhotoRoom_1_pcziiw.png',
      width: 962,
      height: 723,
      alt: 'Innovalloy'
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      src: 'https://res.cloudinary.com/innovapure-tube/image/upload/v1715253673/assets/InnovapreneFW-PhotoRoom.png-PhotoRoom_1_javkgz.png',
      width: 930,
      height: 727,
      alt: 'Innovaflex'
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      src: 'https://res.cloudinary.com/innovapure-tube/image/upload/v1715253675/assets/188-0133-13-Blue-Blue-PhotoRoom.png-PhotoRoom_1_nqljbs.png',
      width: 665,
      height: 775,
      alt: 'Innovafluor'
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      src: 'https://res.cloudinary.com/innovapure-tube/image/upload/v1715253674/assets/R_988161ee-310a-4017-86a7-c525624f67dc_wjdhd0.png',
      width: 728,
      height: 490,
      alt: 'Innovalene'
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      src: 'https://res.cloudinary.com/innovapure-tube/image/upload/v1715253675/assets/ipg-3-PhotoRoom.png-PhotoRoom_o4hiha.png',
      width: 1050,
      height: 460,
      alt: 'Innovaprene'
    }
  ])

  const PhoneNumber = await seed.phoneNumer([
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      value: '+7 (777) 777-77-77',
      label: '+7 (777) 777-77-77'
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      isPublished: true,
      value: ({ seed }) => copycat.phoneNumber(seed),
      label: ({ data }) => data.value || null
    }
  ])

  const Email = await seed.email([
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      value: 'sales@innovapure.tube',
      label: 'sales@innovapure.tube'
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      isPublished: true,
      value: ({ seed }) => copycat.email(seed),
      label: ({ data }) => data.value || null
    }
  ])

  const Address = await seed.address([
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      value: 'Москва, Улица 28',
      label: 'Москва, Улица 28'
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      isPublished: true,
      value: ({ seed }) => copycat.streetAddress(seed),
      label: ({ data }) => data.value || null
    }
  ])

  const Button = await seed.button([
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: 'АЛСИ-ФТ',
      linkTo: 'home',
      localeTo: null
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: 'Области применения',
      linkTo: 'usage',
      localeTo: null
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: 'О нас',
      linkTo: 'about',
      localeTo: null
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: 'Продукция',
      linkTo: 'catalog',
      localeTo: null
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: 'Документация',
      linkTo: 'docs',
      localeTo: null
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: 'Новости',
      linkTo: 'articles',
      localeTo: null
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: 'Заказать',
      linkTo: null,
      localeTo: null
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: 'Узнать больше о нас',
      linkTo: 'about',
      localeTo: null
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: 'Выбрать модель',
      linkTo: null,
      localeTo: null
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: 'Русский',
      localeTo: 'ru',
      linkTo: null
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: 'English',
      localeTo: 'en',
      linkTo: null
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: 'Қазақ',
      localeTo: 'kk',
      linkTo: null
    },

    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: 'Беларускі',
      localeTo: 'be',
      linkTo: null
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: 'Перезвоните мне',
      localeTo: null,
      linkTo: null
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text:
        PhoneNumber.phoneNumer.find(record => record.id)?.label || 'телефон',
      phoneNumberId: PhoneNumber.phoneNumer.find(record => record.id)?.id
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text:
        Address.address.find(record => record.value === 'Москва, Улица 28')
          ?.label || 'Адрес',
      localeTo: null,
      linkTo: null,
      addressId: Address.address.find(
        record => record.value === 'Москва, Улица 28'
      )?.id
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: Email.email.find(record => record.id)?.value || 'email',
      emailId: Email.email.find(record => record.id)?.id
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: 'Контакты',
      linkTo: 'contact',
      localeTo: null
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: 'Купить сейчас',
      localeTo: null,
      linkTo: null
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: 'Положить в корзину',
      localeTo: null,
      linkTo: null
    }
  ])

  // const Slide = await seed.slide(x =>
  //   x(3, {
  //     id: ({ seed }) => copycat.uuid(seed),
  //     locale: 'ru',
  //     isPublished: true,
  //     strap: ({ seed }) =>
  //       copycat.oneOfString(['Innovaprene', 'Innovaflex', 'Innovafluor'])(seed),
  //     title: 'Силиконовые трубки Innovaprene P 60',
  //     subtitle: ({ seed }) => copycat.paragraph(seed, { maxSentences: 3 }),
  //     isDecoration: ({ seed }) => copycat.bool(seed),
  //     imageId: Image.image.find(record => record.id)?.id,
  //     _ButtonToSlide: Button.button
  //       .filter(
  //         record =>
  //           record.text &&
  //           ['Заказать', 'Узнать больше о нас'].includes(record.text)
  //       )
  //       .map(record => ({ A: record.id }))
  //   })
  // )

  const Testimonial = await seed.testimonial([
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      title: 'Передовые технологии',
      description: ({ seed }) => copycat.paragraph(seed, { maxSentences: 2 }),
      imageId: Image.image.find(record => record.src === '/')?.id
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      title: 'Срок поставки',
      description: ({ seed }) => copycat.paragraph(seed, { maxSentences: 2 }),
      imageId: Image.image.find(record => record.src === '/')?.id
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      title: 'Цена/качество',
      description: ({ seed }) => copycat.paragraph(seed, { maxSentences: 2 }),
      imageId: Image.image.find(record => record.src === '/')?.id
    }
  ])

  const Form = await seed.form(x =>
    x(1, {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      title: 'Узнайте больше',
      description: 'Остаавьте свой номер телефона и мы свяжемся с вами',
      isName: false,
      isPhoneNumber: true,
      isEmail: false,
      isAgreement: true,
      buttonId: Button.button.find(record => record.text === 'Перезвоните мне')
        ?.id
    })
  )

  const Category = await seed.category([
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      slug: 'innovalloy',
      name: 'Innovalloy',
      description: ({ seed }) => copycat.paragraph(seed, { maxSentences: 3 }),
      longDescription: ({ seed }) =>
        copycat.paragraph(seed, { maxSentences: 8 }),
      imageId: Image.image.find(image => image.alt === 'Innovalloy')?.id,
      buttonId: Button.button.find(record => record.text === 'Выбрать модель')
        ?.id
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      slug: 'innovaflex',
      name: 'Innovaflex',
      description: ({ seed }) => copycat.paragraph(seed, { maxSentences: 3 }),
      longDescription: ({ seed }) =>
        copycat.paragraph(seed, { maxSentences: 8 }),
      imageId: Image.image.find(image => image.alt === 'Innovaflex')?.id,
      buttonId: Button.button.find(record => record.text === 'Выбрать модель')
        ?.id
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      slug: 'innovafluor',
      name: 'Innovafluor',
      description: ({ seed }) => copycat.paragraph(seed, { maxSentences: 3 }),
      longDescription: ({ seed }) =>
        copycat.paragraph(seed, { maxSentences: 8 }),
      imageId: Image.image.find(image => image.alt === 'Innovafluor')?.id,
      buttonId: Button.button.find(record => record.text === 'Выбрать модель')
        ?.id
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      slug: 'innovalene',
      name: 'Innovalene',
      description: ({ seed }) => copycat.paragraph(seed, { maxSentences: 3 }),
      longDescription: ({ seed }) =>
        copycat.paragraph(seed, { maxSentences: 8 }),
      imageId: Image.image.find(image => image.alt === 'Innovalene')?.id,
      buttonId: Button.button.find(record => record.text === 'Выбрать модель')
        ?.id
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      slug: 'innovaprene',
      name: 'Innovaprene',
      description: ({ seed }) => copycat.paragraph(seed, { maxSentences: 3 }),
      longDescription: ({ seed }) =>
        copycat.paragraph(seed, { maxSentences: 8 }),
      imageId: Image.image.find(image => image.alt === 'Innovaprene')?.id,
      buttonId: Button.button.find(record => record.text === 'Выбрать модель')
        ?.id
    }
  ])

  const ProductTestimonial = await seed.productTestimonial(x =>
    x(4, {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      title: ({ seed }) =>
        copycat.oneOfString([
          'Диапозон температур от -60С до 280С',
          'Эластичный, морозо-теплостойкий',
          'Электрической прочности: не менее 20 кв/мм',
          'Используемые материал: кремнийорганическая резина'
        ])(seed)
    })
  )

  const Parameter = await seed.parameter(x =>
    x(3, {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      title: ({ seed }) =>
        copycat.oneOfString([
          'Толщина стенки',
          'Внутренний диаметр',
          'Длина',
          'Наружный диаметр'
        ])(seed),
      isHighlighted: ({ seed }) => copycat.bool(seed)
    })
  )

  const ParameterValue = await seed.parameterValue(x =>
    x(6, {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      value: ({ seed }) => copycat.oneOfString(['5мм', '10мм', '15мм'])(seed),
      parameterId: Parameter.parameter.find(record => record.id)?.id
    })
  )

  const Product = await seed.product(x =>
    x(20, {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      slug: ({ seed }) => copycat.word(seed),
      name: ({ seed }) =>
        copycat.oneOfString([
          'Innovalloy® 62V',
          'Innovaflex ® 58F',
          'Innovafluor ® 14A'
        ])(seed),
      description: ({ seed }) => copycat.paragraph(seed, { maxSentences: 2 }),
      longDescription: ({ seed }) =>
        copycat.paragraph(seed, { maxSentences: 8 }),
      categorySlug: Category.category.find(record => record.id)?.slug,
      formId: Form.form.find(record => record.id)?.id,
      imageId: Image.image.find(record => record.id)?.id,
      _ParameterToProduct: Parameter.parameter.map(record => ({
        A: record.id
      })),
      _ProductToProductTestimonial: ProductTestimonial.productTestimonial.map(
        record => ({ B: record.id })
      ),
      _ButtonToProduct: Button.button
        .filter(
          record =>
            record.text &&
            ['Купить сейчас', 'Положить в корзину'].includes(record.text)
        )
        .map(record => ({
          A: record.id
        }))
    })
  )

  const Header = await seed.header(x =>
    x(1, {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      _ButtonToHeader: Button.button
        .filter(
          record =>
            (record.text &&
              [
                'Области применения',
                'О нас',
                'Продукция',
                'Документация',
                'Новости'
              ].includes(record.text)) ||
            record.phoneNumberId ||
            record.localeTo
        )
        .map(record => ({ A: record.id }))
    })
  )

  // await seed.sectionGallery(
  //   [
  //     {
  //       id: ({ seed }) => copycat.uuid(seed),
  //       locale: 'ru',
  //       isPublished: true,
  //       slides: Slide.slide
  //     }
  //   ],
  // )

  const SectionGallery = await seed.sectionGallery(x =>
    x(1, {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      slides: x =>
        x(3, {
          id: ({ seed }) => copycat.uuid(seed),
          locale: 'ru',
          isPublished: true,
          strap: ({ seed }) =>
            copycat.oneOfString(['Innovaprene', 'Innovaflex', 'Innovafluor'])(
              seed
            ),
          title: 'Силиконовые трубки Innovaprene P 60',
          subtitle: ({ seed }) => copycat.paragraph(seed, { maxSentences: 3 }),
          isDecoration: ({ seed }) => copycat.bool(seed),
          imageId: Image.image.find(record => record.alt === 'Innovaprene P 60')
            ?.id,
          _ButtonToSlide: Button.button
            .filter(
              record =>
                record.text &&
                ['Заказать', 'Узнать больше о нас'].includes(record.text)
            )
            .map(record => ({ A: record.id }))
        })
    })
  )

  const SectionCatalog = await seed.sectionCatalog(x =>
    x(1, {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      title: 'Каталог продукции',
      _CategoryToSectionCatalog: Category.category.map(record => ({
        A: record.id
      }))
    })
  )

  const SectionTestimonials = await seed.sectionTestimonials(x =>
    x(1, {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      title: 'Преимущества для вас',
      _SectionTestimonialsToTestimonial: Testimonial.testimonial
        .filter((record, idx) => idx <= 3)
        .map(record => ({ B: record.id }))
    })
  )

  const SectionCategory = await seed.sectionCategory(x =>
    x(1, {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      categoryId: Category.category.find(record => record.id)?.id
    })
  )

  const SectionProduct = await seed.sectionProduct(x =>
    x(1, {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      productId: Product.product.find(record => record.id)?.id
    })
  )

  const Footer = await seed.footer(x =>
    x(1, {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      formId: Form.form.find(record => record.id)?.id,
      _ButtonToFooter: Button.button
        .filter(
          record =>
            (record.text &&
              [
                'Москва, Улица 28',
                'Области применения',
                'Документация',
                'О нас',
                'Новости',
                'Продукция',
                'Контакты'
              ].includes(record.text)) ||
            record.phoneNumberId ||
            record.emailId
        )
        .map(record => ({ A: record.id }))
    })
  )

  const Page = await seed.page([
    {
      id: ({ seed }) => copycat.uuid(seed),
      name: 'home',
      locale: 'ru',
      isPublished: true,
      headerId: Header.header.find(record => record.id)?.id,
      sectionGalleryId: SectionGallery.sectionGallery.find(record => record.id)
        ?.id,
      sectionCatalogId: SectionCatalog.sectionCatalog.find(record => record.id)
        ?.id,
      footerId: Footer.footer.find(record => record.id)?.id
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      name: 'catalog',
      locale: 'ru',
      isPublished: true,
      headerId: Header.header.find(record => record.id)?.id,
      sectionCatalogId: SectionCatalog.sectionCatalog.find(record => record.id)
        ?.id,
      sectionTestimonialsId: SectionTestimonials.sectionTestimonials.find(
        record => record.id
      )?.id,
      footerId: Footer.footer.find(record => record.id)?.id
    },

    {
      id: ({ seed }) => copycat.uuid(seed),
      name: 'category',
      locale: 'ru',
      isPublished: true,
      headerId: Header.header.find(record => record.id)?.id,
      sectionCategoryId: SectionCategory.sectionCategory.find(
        record => record.id
      )?.id,
      sectionTestimonialsId: SectionTestimonials.sectionTestimonials.find(
        record => record.id
      )?.id,
      footerId: Footer.footer.find(record => record.id)?.id
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      name: 'product',
      locale: 'ru',
      isPublished: true,
      headerId: Header.header.find(record => record.id)?.id,
      sectionProductId: SectionProduct.sectionProduct.find(record => record.id)
        ?.id,
      footerId: Footer.footer.find(record => record.id)?.id
    }
  ])

  // Type completion not working? Try ctrl + shirt + p > TypeScript: Restart TS Server

  console.log('SUCCESS: Database seeded successfully!')

  process.exit()
}

main()
