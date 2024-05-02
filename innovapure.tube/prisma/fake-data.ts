import { Locale, PageName } from '@prisma/client';
import { faker } from '@faker-js/faker';
import Decimal from 'decimal.js';



export function fakeImageComplete() {
  return {
    id: faker.string.uuid(),
    src: '',
    alt: '',
    locale: Locale.ru,
    isPublished: false,
  };
}
export function fakeButtonComplete() {
  return {
    id: faker.string.uuid(),
    text: '',
    locale: Locale.ru,
    isPublished: false,
  };
}
export function fakeSlideComplete() {
  return {
    id: faker.string.uuid(),
    locale: Locale.ru,
    isPublished: false,
    title: '',
    subtitle: '',
    isDecoration: true,
    imageId: faker.string.uuid(),
    sectionGalleryId: undefined,
  };
}
export function fakeCatalogCardComplete() {
  return {
    id: faker.string.uuid(),
    locale: Locale.ru,
    isPublished: false,
    name: '',
    description: '',
    buttonId: faker.string.uuid(),
    imageId: faker.string.uuid(),
    sectionCatalogId: undefined,
  };
}
export function fakeFormComplete() {
  return {
    id: faker.string.uuid(),
    locale: Locale.ru,
    isPublished: false,
    title: '',
    description: '',
    isName: false,
    isPhoneNumber: true,
    isEmail: false,
    isAgreement: true,
    buttonId: faker.string.uuid(),
  };
}
export function fakeSectionGalleryComplete() {
  return {
    id: faker.string.uuid(),
    locale: Locale.ru,
    isPublished: false,
    index: 0,
    strap: '',
  };
}
export function fakeSectionCatalogComplete() {
  return {
    id: faker.string.uuid(),
    locale: Locale.ru,
    isPublished: false,
    index: 0,
    title: '',
  };
}
export function fakeHeaderComplete() {
  return {
    id: faker.string.uuid(),
    locale: Locale.ru,
    isPublished: false,
  };
}
export function fakeFooterComplete() {
  return {
    id: faker.string.uuid(),
    locale: Locale.ru,
    isPublished: false,
    formId: undefined,
  };
}
export function fakePage() {
  return {
    name: faker.helpers.arrayElement([PageName.home, PageName.catalog, PageName.manufacturer, PageName.product, PageName.cart, PageName.articles, PageName.article, PageName.about, PageName.usage, PageName.docs, PageName.contact, PageName.lead] as const),
  };
}
export function fakePageComplete() {
  return {
    id: faker.string.uuid(),
    name: faker.helpers.arrayElement([PageName.home, PageName.catalog, PageName.manufacturer, PageName.product, PageName.cart, PageName.articles, PageName.article, PageName.about, PageName.usage, PageName.docs, PageName.contact, PageName.lead] as const),
    locale: Locale.ru,
    isPublished: false,
    headerId: undefined,
    sectionGalleryId: undefined,
    sectionCatalogId: undefined,
    footerId: undefined,
  };
}
export function fakePostComplete() {
  return {
    id: faker.string.uuid(),
    published: false,
    locale: Locale.ru,
    authorId: undefined,
  };
}
export function fakeLead() {
  return {
    gmClientId: undefined,
    ymClientID: undefined,
  };
}
export function fakeLeadComplete() {
  return {
    id: faker.string.uuid(),
    userId: faker.string.uuid(),
    url: '',
    formName: '',
    ip: '',
    gmClientId: undefined,
    ymClientID: undefined,
    userAgent: '',
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_content: '',
    utm_term: '',
    createdAt: new Date(),
    locale: Locale.ru,
  };
}
export function fakeUser() {
  return {
    name: undefined,
    email: undefined,
    company: undefined,
    updatedAt: faker.date.anytime(),
  };
}
export function fakeUserComplete() {
  return {
    id: faker.string.uuid(),
    name: undefined,
    phoneNumber: '',
    email: undefined,
    isDataUsageAgreement: false,
    company: undefined,
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    locale: Locale.ru,
  };
}
