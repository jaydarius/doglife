const locales = [
    {
      id: 1,
      label: "EN",
      locale: "en",
    },
    {
      id: 2,
      label: "NL",
      locale: "nl",
    },
  ] 

  type Locale = {
    flag: () => JSX.Element;
    id: number;
    label: string;
    locale: string;
  };
  
  type LocaleAbbr =  "en" | "nl";
  

  export { locales, type Locale, type LocaleAbbr}