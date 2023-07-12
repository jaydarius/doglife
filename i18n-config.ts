const locales = [
  {
    id: 1,
    label: "DE",
    locale: "de",
  },
  {
    id: 2,
    label: "EN",
    locale: "en",
  },
  {
    id: 3,
    label: "FR",
    locale: "fr",
  },
  {
    id: 4,
    label: "IT",
    locale: "it",
  },
  {
    id: 4,
    label: "NL",
    locale: "nl",
  },
] 


export const i18n = {
  defaultLocale: "en",
  locales: locales.map(l => l.locale),
} as const;

export type Locale = (typeof i18n)["locales"][number];