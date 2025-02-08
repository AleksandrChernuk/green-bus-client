import { Noto_Sans, Mulish } from 'next/font/google';

import '@/styles/globals.css';
import initTranslations from '../i18n';
import TranslationsProvider from '@/providers/TranslationsProvider';
import ThemeProvider from '@/providers/ThemeProvider';
import ReactQueryContext from '@/providers/ReactQueryProvider';
import i18NextConfig from '@/i18next.config';

const noto_sans = Noto_Sans({
  variable: '--font-geist-sans',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

const mulish = Mulish({
  variable: '--font-mulish',
  subsets: ['latin'],
  weight: '800',
  display: 'swap',
});

export function generateStaticParams() {
  return i18NextConfig.locales.map((locale) => ({ locale }));
}

const i18nNamespaces = ['common'];

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  console.log(locale);
  const { resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${noto_sans.variable} ${mulish.variable} antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
          <ReactQueryContext>
            <TranslationsProvider namespaces={i18nNamespaces} lang={locale} resources={resources}>
              {children}
            </TranslationsProvider>
          </ReactQueryContext>
        </ThemeProvider>
      </body>
    </html>
  );
}
