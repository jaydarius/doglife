import "server-only";

// Constants
import enCommon from "@/constants/locale-dictionaries/en/common.json";
import nlCommon from "@/constants/locale-dictionaries/nl/common.json";

import {locales} from "@/constants/locales";

// Types
import type { LocaleAbbr } from "@/constants/locales";

type Namespace = "common"
// type Json = string | number | boolean | Json[] | { [key: string]: Json };

// Define dictionaries object that return JSON modules
const dictionaries = {
  en: {
    common: enCommon || {},
  },
  
  nl: {
    common: nlCommon || {},
  },
};

// Assign default namespace
const defaultNamespace = "common";

// Define getDictionary function that returns the dictionary for a given locale
export const getDictionary = (
  locale: LocaleAbbr,
  namespace: Namespace = defaultNamespace
) => {
  if (locales.map(l => l.locale).indexOf(locale) === -1) locale = "en";

  // Call the function for the given locale from the dictionaries object
  const selectedDictionary = dictionaries[locale] ?? dictionaries["en"];

  if (!selectedDictionary) return {};

  const dictionary = selectedDictionary[namespace];

  // Return the retrieved dictionary
  return dictionary;
};