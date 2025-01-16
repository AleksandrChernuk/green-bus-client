import MainFooter from '@/components/modules/footer/MainFooter';
import MainHeader from '@/components/modules/header/MainHeader'
import React from 'react'

export default async function MainLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locales: string }>;
  }) {
    const { locales } = await params;

  return (
    <div className="flex flex-col h-screen">
      <MainHeader locale={locales} />
      <main
        role="main"
        className="flex-grow bg-grayy dark:bg-background_black_mode"
      >
        {children}
      </main>
      <MainFooter />
    </div>
  );
}
