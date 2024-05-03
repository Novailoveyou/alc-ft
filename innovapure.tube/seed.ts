/**
 * ! Executing this script will delete all data in your database and seed it with 10 user.
 * ! Make sure to adjust the script to your needs.
 * Use any TypeScript runner to run this script, for example: `npx tsx seed.ts`
 * Learn more about the Seed Client by following our guide: https://docs.snaplet.dev/seed/getting-started
 */
import { createSeedClient } from '@snaplet/seed'

const main = async () => {
  const seed = await createSeedClient()

  // Truncate all tables in the database
  await seed.$resetDatabase()

  await seed.image(x =>
    x(5, {
      locale: 'ru',
      isPublished: true,
      src: 'http://localhost',
      alt: 'Тест изображение',
    }),
  )

  await seed.button([
    {
      id: '298c255f-e54c-4985-804b-f2928736d34c',
      locale: 'ru',
      isPublished: true,
      text: 'АЛСИ-ФТ',
    },
    {
      id: '5a029b33-0422-4002-9967-f87e20d19d3b',
      locale: 'ru',
      isPublished: true,
      text: 'Области применения',
    },
    {
      id: 'e3039fc1-1b33-4ef4-8fc2-5f282811a410',
      locale: 'ru',
      isPublished: true,
      text: 'О нас',
    },
    {
      id: 'ad66bffb-0bca-49d8-a8d0-0b48ba777137',
      locale: 'ru',
      isPublished: true,
      text: 'Продукция',
    },
    {
      id: 'a218a64c-e1c1-4fdd-9790-e211ea30738b',
      locale: 'ru',
      isPublished: true,
      text: 'Документация',
    },
    {
      id: '5223dd4d-9621-4e5b-9b9b-0478508cd626',
      locale: 'ru',
      isPublished: true,
      text: 'Новости',
    },
    {
      id: '5ed50677-13e6-4607-a712-969c2c49414b',
      locale: 'ru',
      isPublished: true,
      text: 'Заказать',
    },
    {
      id: '3b02d564-e1e1-4b46-b6ae-d729e491aaec',
      locale: 'ru',
      isPublished: true,
      text: 'Узнать больше о нас',
    },
    {
      id: '214ce390-07ae-4534-9a89-071bd1d647cd',
      locale: 'ru',
      isPublished: true,
      text: 'Выбрать модель',
    },
    {
      id: '4e9942c1-90e2-4193-b2c6-c292fbbead06',
      locale: 'ru',
      isPublished: true,
      text: '+7 (777) 777-77-77',
    },
    {
      id: 'a8535e34-2abc-4763-9869-784fe440e05e',
      locale: 'ru',
      isPublished: true,
      text: 'Москва, Улица 28',
    },
    {
      id: '07c836e5-eef3-405b-a1e8-4a4deb117202',
      locale: 'ru',
      isPublished: true,
      text: 'sales@innovapure.tube',
    },
  ])

  await seed.catalogCard(x => x(5))
  await seed.form(x => x(1))
  await seed.slide(x => x(3))
  await seed.header(x => x(1))
  await seed.sectionGallery(x => x(1))
  await seed.sectionCatalog(x => x(1))
  await seed.footer(x => x(1))
  await seed.page(x => x(1))

  // Type completion not working? You might want to reload your TypeScript Server to pick up the changes

  console.log('Database seeded successfully!')

  process.exit()
}

main()
