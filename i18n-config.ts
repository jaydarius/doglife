import {locales} from "./constants/locales";


export const i18n = {
  defaultLocale: "en",
  locales: locales.map(l => l.locale),
} as const;

export type Locale = (typeof i18n)["locales"][number];