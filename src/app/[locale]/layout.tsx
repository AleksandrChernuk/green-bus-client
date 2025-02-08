import { Noto_Sans, Mulish } from 'next/font/google';
type Params = Promise<{ slug: string }>;

import '@/styles/globals.css';
import ThemeProvider from '@/providers/ThemeProvider';
import ReactQueryContext from '@/providers/ReactQueryProvider';
import initTranslations from '../i18n';
import TranslationsProvider from '@/providers/TranslationsProvider';
const i18nNamespaces = ['common'];

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

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Params }) {
  const { slug } = await params;
  const { resources } = await initTranslations(slug, i18nNamespaces);
  return (
    <html lang={slug} suppressHydrationWarning>
      <body className={`${noto_sans.variable} ${mulish.variable} antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
          <ReactQueryContext>
            <TranslationsProvider namespaces={i18nNamespaces} lang={slug} resources={resources}>
              {' '}
              {children}
            </TranslationsProvider>
          </ReactQueryContext>
        </ThemeProvider>
      </body>
    </html>
  );
}
