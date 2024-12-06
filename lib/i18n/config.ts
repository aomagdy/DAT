export const defaultLocale = 'en';

export const locales = ['en', 'es', 'fr'] as const;
export type Locale = typeof locales[number];

export const currencies = {
  en: 'USD',
  es: 'EUR',
  fr: 'EUR',
} as const;

export const currencySymbols = {
  USD: '$',
  EUR: '€',
} as const;

export const localePricing = {
  en: {
    basic: { monthly: 99, annual: 79 },
    standard: { monthly: 149, annual: 119 },
    premium: { monthly: 199, annual: 159 },
  },
  es: {
    basic: { monthly: 89, annual: 71 },
    standard: { monthly: 139, annual: 111 },
    premium: { monthly: 189, annual: 151 },
  },
  fr: {
    basic: { monthly: 89, annual: 71 },
    standard: { monthly: 139, annual: 111 },
    premium: { monthly: 189, annual: 151 },
  },
};