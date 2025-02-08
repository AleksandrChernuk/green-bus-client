import MainHeader from '@/components/modules/header/MainHeader';
import React from 'react';
type Params = Promise<{ slug: string }>;

export default async function MainLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { slug } = await params;

  return (
    <div className='flex flex-col h-screen'>
      <MainHeader locale={slug} />
      {children}
    </div>
  );
}
