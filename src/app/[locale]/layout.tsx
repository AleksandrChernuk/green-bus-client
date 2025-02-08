import { Noto_Sans, Mulish } from 'next/font/google';

import '@/styles/globals.css';
import ThemeProvider from '@/providers/ThemeProvider';
import ReactQueryContext from '@/providers/ReactQueryProvider';

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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${noto_sans.variable} ${mulish.variable} antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
          <ReactQueryContext>{children}</ReactQueryContext>
        </ThemeProvider>
      </body>
    </html>
  );
}
