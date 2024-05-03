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
      alt: 'Тест изображение',
    }),
  )

  const Button = await seed.button([
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: 'АЛСИ-ФТ',
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: 'Области применения',
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: 'О нас',
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: 'Продукция',
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: 'Документация',
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: 'Новости',
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: 'Заказать',
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: 'Узнать больше о нас',
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: 'Выбрать модель',
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: 'Смена языка',
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: '+7 (777) 777-77-77',
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: 'Москва, Улица 28',
    },
    {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      text: 'sales@innovapure.tube',
    },
  ])

  const Header = await seed.header(x =>
    x(1, {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      // TODO: add buttons
    }),
  )

  const SectionGallery = await seed.sectionGallery(x =>
    x(1, {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      index: 0,
      strap: 'Innovaprene',
    }),
  )

  const Slide = await seed.slide(x =>
    x(3, {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      title: 'Силиконовые трубки Innovaprene P 60',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim neque, blandit in sem eget',
      isDecoration: true,
      imageId: Image.image.find(record => record.id)?.id,
      sectionGalleryId: SectionGallery.sectionGallery.find(record => record.id)
        ?.id,
      // TODO: add buttons
    }),
  )

  const SectionCatalog = await seed.sectionCatalog(x =>
    x(1, {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      index: 1,
      title: 'Каталог продукции',
    }),
  )

  const CatalogCard = await seed.catalogCard(x =>
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
        ?.id,
    }),
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
        ?.id,
    }),
  )

  const Footer = await seed.footer(x =>
    x(1, {
      id: ({ seed }) => copycat.uuid(seed),
      locale: 'ru',
      isPublished: true,
      formId: Form.form.find(record => record.id)?.id,
      // TODO: add buttons
    }),
  )

  const Page = await seed.page(x =>
    x(1, {
      id: ({ seed }) => copycat.uuid(seed),
      name: 'home',
      locale: 'ru',
      isPublished: true,
      headerId: Header.header.find(record => record.id)?.id,
      sectionGalleryId: SectionGallery.sectionGallery.find(record => record.id)
        ?.id,
      sectionCatalogId: SectionCatalog.sectionCatalog.find(record => record.id)
        ?.id,
      footerId: Footer.footer.find(record => record.id)?.id,
    }),
  )

  // Type completion not working? You might want to reload your TypeScript Server to pick up the changes

  console.log('Database seeded successfully!')

  process.exit()
}

main()
