import MainHeader from '@/components/modules/header/MainHeader';
 import React from 'react';

export default async function MainLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locales: string }>;
}) {
  const { locales } = await params;

  return (
    <div className='flex flex-col h-screen'>
      <MainHeader locale={locales} />
      {children}
    </div>
  );
}
