import MainFooter from '@/components/modules/footer/MainFooter';
import MainPage from '@/components/pages/MainPage';
import React from 'react';

export default async function Home({ params }: { params: Promise<{ locales: string }> }) {
  const { locales } = await params;
  return (
    <>
      <MainPage locales={locales} />
      <MainFooter />
    </>
  );
}
