import AuthHeader from '@/components/modules/header/AuthHeader';
import React from 'react';

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ locales: string }>;
}) {
  return (
    <div className='flex flex-col h-screen'>
      <AuthHeader />
      {children}
    </div>
  );
}
