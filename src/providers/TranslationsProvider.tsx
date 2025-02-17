"use client";

import { I18nextProvider } from "react-i18next";
import { createInstance, Resource } from "i18next";
import { ReactNode } from "react";
import initTranslations from "@/app/i18n";

interface TranslationsProviderProps {
  children: ReactNode;
  lang: string;
  namespaces: string[];
  resources: Resource;
}

export default function TranslationsProvider({
  children,
  lang,
  namespaces,
  resources,
}: TranslationsProviderProps) {
  const i18n = createInstance();

  initTranslations(lang, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
