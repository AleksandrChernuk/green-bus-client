/* eslint-disable @typescript-eslint/no-explicit-any */
import i18NextConfig from "@/i18next.config";
import { createInstance, i18n } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";

export default async function initTranslations(lang: string, ns: string[], i18nInstance?: i18n, resources?: any) {
  i18nInstance = i18nInstance || createInstance();

  if (!resources) {
    i18nInstance.use(
      resourcesToBackend((language: string, namespace: string) => import(`../locales/${language}/${namespace}.json`)),
    );
  }

  await i18nInstance.init({
    // debug: process.env.NODE_ENV === "development",
    lng: lang,
    resources,
    fallbackLng: i18NextConfig.i18n.defaultLocale,
    supportedLngs: i18NextConfig.i18n.locales,
    ns: ns,
    defaultNS: ns[0],
    fallbackNS: ns[0],
    preload: resources ? [] : i18NextConfig.i18n.locales,
    load: "all",
  });

  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.t,
  };
}
