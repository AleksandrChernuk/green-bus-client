"use client";

import { I18nextProvider } from "react-i18next";
import { createInstance, Resource } from "i18next";
import { ReactNode } from "react";
import initTranslations from "@/app/i18n";

interface TranslationsProviderProps {
  children: ReactNode;
  locales: string;
  namespaces: string[];
  resources: Resource;
}

export default function TranslationsProvider({
  children,
  locales,
  namespaces,
  resources,
}: TranslationsProviderProps) {
  const i18n = createInstance();

  initTranslations(locales, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
