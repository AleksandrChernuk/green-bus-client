/* eslint-disable @typescript-eslint/no-explicit-any */
import i18NextConfig from "@/i18next.config";
import { createInstance, i18n } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';

import resourcesToBackend from 'i18next-resources-to-backend';

export default async function initTranslations(
  locale: string,
  namespaces: string[],
  i18nInstance?: i18n,
  resources?: any
) {
  i18nInstance = i18nInstance || createInstance();

  i18nInstance.use(initReactI18next);

  if (!resources) {
    i18nInstance.use(
      resourcesToBackend(
        (language: string, namespace: string) => import(`../locales/${language}/${namespace}.json`)
      )
    );
  }

  await i18nInstance.init({
    // debug: process.env.NODE_ENV === 'development',
    lng: locale,
    resources,
    fallbackLng: i18NextConfig.defaultLocale,
    supportedLngs: i18NextConfig.locales,
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    ns: namespaces,
    preload: resources ? [] : i18NextConfig.locales,

    // preload: resources ? [] : i18NextConfig.i18n.locales,
    // load: 'all',
  });
  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.t,
  };
}
