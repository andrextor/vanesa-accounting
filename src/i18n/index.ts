import type { Content } from './content';
import { en } from './en';
import { es } from './es';

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const localeNames: Record<Locale, string> = { es: 'Español', en: 'English' };
export const htmlLang: Record<Locale, string> = { es: 'es-CO', en: 'en' };
export const ogLocale: Record<Locale, string> = { es: 'es_CO', en: 'en_US' };

const content: Record<Locale, Content> = { es, en };

const isLocale = (value: string | undefined): value is Locale => locales.some((locale) => locale === value);

export const resolveLocale = (value: string | undefined): Locale => (isLocale(value) ? value : defaultLocale);

export const getContent = (value: string | undefined): Content => content[resolveLocale(value)];
