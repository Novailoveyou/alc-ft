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

  const Image = await seed.image(x =>
    x(5, {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      src: 'http://localhost',
      alt: 'Тест изображение'
    })
  )

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
      text: '+7 (777) 777-77-77',
      localeTo: null,
      linkTo: null
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: 'Москва, Улица 28',
      localeTo: null,
      linkTo: null
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: 'sales@innovapure.tube',
      localeTo: null,
      linkTo: null
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
    }
  ])

  const Header = await seed.header(x =>
    x(1, {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      _ButtonToHeader: Button.button
        .filter(
          record =>
            record.text &&
            [
              'Области применения',
              'О нас',
              'Продукция',
              'Документация',
              'Новости',
              '+7 (777) 777-77-77',
              'Русский',
              'English',
              'Қазақ',
              'Беларускі'
            ].includes(record.text)
        )
        .map(record => ({ A: record.id }))
    })
  )

  const SectionGallery = await seed.sectionGallery(x =>
    x(1, {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true
    })
  )

  const Slide = await seed.slide(x =>
    x(3, {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      strap: 'Innovaprene',
      title: 'Силиконовые трубки Innovaprene P 60',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim neque, blandit in sem eget',
      isDecoration: true,
      imageId: Image.image.find(record => record.id)?.id,
      sectionGalleryId: SectionGallery.sectionGallery.find(record => record.id)
        ?.id,
      _ButtonToSlide: Button.button
        .filter(
          record =>
            record.text &&
            ['Заказать', 'Узнать больше о нас'].includes(record.text)
        )
        .map(record => ({ A: record.id }))
    })
  )

  const SectionCatalog = await seed.sectionCatalog(x =>
    x(1, {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      title: 'Каталог продукции'
    })
  )

  const CategoryCard = await seed.category(x =>
    x(5, {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      name: 'Innovalloy',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim neque, blandit in sem eget',
      imageId: Image.image.find(record => record.id)?.id,
      buttonId: Button.button.find(record => record.text === 'Выбрать модель')
        ?.id,
      sectionCatalogId: SectionCatalog.sectionCatalog.find(record => record.id)
        ?.id
    })
  )

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

  const Footer = await seed.footer(x =>
    x(1, {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      formId: Form.form.find(record => record.id)?.id,
      _ButtonToFooter: Button.button
        .filter(
          record =>
            record.text &&
            [
              '+7 (777) 777-77-77',
              'Москва, Улица 28',
              'sales@innovapure.tube',
              'Области применения',
              'Документация',
              'О нас',
              'Новости',
              'Продукция',
              'Контакты'
            ].includes(record.text)
        )
        .map(record => ({ A: record.id }))
    })
  )

  const Testimonial = await seed.testimonial([
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      title: 'Передовые технологии',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim neque, blandit in sem eget',
      imageId: Image.image.find(record => record.id)?.id
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      title: 'Срок поставки',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim neque, blandit in sem eget',
      imageId: Image.image.find(record => record.id)?.id
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      title: 'Цена/качество',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim neque, blandit in sem eget',
      imageId: Image.image.find(record => record.id)?.id
    }
  ])

  const SectionTestimonials = await seed.sectionTestimonials(x =>
    x(1, {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      title: 'Каталог продукции',
      _SectionTestimonialsToTestimonial: Testimonial.testimonial
        .filter((record, idx) => idx <= 3)
        .map(record => ({ B: record.id }))
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
      sectionTestimonialsId: SectionTestimonials.sectionTestimonials.find(
        record => record.id
      )?.id,
      sectionCatalogId: SectionCatalog.sectionCatalog.find(record => record.id)
        ?.id,
      footerId: Footer.footer.find(record => record.id)?.id
    }
  ])

  // Type completion not working? Try ctrl + shirt + p > TypeScript: Restart TS Server

  console.log('SUCCESS: Database seeded successfully!')

  process.exit()
}

main()
