const i18NextConfig = {
  // debug: false,
  i18n: {
    locales: ["en", "ru", "uk"],
    defaultLocale: "uk",
  },
  fallbackNS: "common",
  defaultNS: "common",
  ns: ["common"],
  load: "all",
  preload: ["en", "ru", "uk"],
};

export const getOptions = (lang: string, ns: string | string[]) => {
  return {
    supportedLangs: i18NextConfig.i18n.locales,
    lang,
    ns,
    fallbackNS: i18NextConfig.fallbackNS,
    defaultNS: i18NextConfig.defaultNS,
  };
};

export default i18NextConfig;
