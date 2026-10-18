import type { Content } from './content';
import { en } from './en';
import { es } from './es';

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const incomeTaxPath = '/declaracion-de-renta/';
export const businessAccountingPath = '/contabilidad-para-empresas/';

// Pages share their path across languages, so swapping the locale prefix lands on the same page.
export const localelessPath = (pathname: string): string =>
  pathname.replace(new RegExp(`^/(${locales.join('|')})(?=/|$)`), '');

export const localeNames: Record<Locale, string> = { es: 'Español', en: 'English' };
export const htmlLang: Record<Locale, string> = { es: 'es-CO', en: 'en' };
export const ogLocale: Record<Locale, string> = { es: 'es_CO', en: 'en_US' };

const content: Record<Locale, Content> = { es, en };

const isLocale = (value: string | undefined): value is Locale => locales.some((locale) => locale === value);

export const resolveLocale = (value: string | undefined): Locale => (isLocale(value) ? value : defaultLocale);

export const getContent = (value: string | undefined): Content => content[resolveLocale(value)];
