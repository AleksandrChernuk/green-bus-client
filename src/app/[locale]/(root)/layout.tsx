import initTranslations from '@/app/i18n';
import MainHeader from '@/components/modules/header/MainHeader';
import i18nConfig from '@/i18next.config';
import TranslationsProvider from '@/providers/TranslationsProvider';
import React from 'react';

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

const i18nNamespaces = ['common'];

export default async function MainLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider namespaces={i18nNamespaces} lang={locale} resources={resources}>
      <div className='flex flex-col h-screen'>
        <MainHeader locale={locale} />
        {children}
      </div>
    </TranslationsProvider>
  );
}
