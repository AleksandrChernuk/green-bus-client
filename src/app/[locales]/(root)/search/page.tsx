import SecondFooter from '@/components/modules/footer/SecondFooter';
 import SearchModule from '@/components/pages/SearchPage';
// import SyncSearchParams from '@/components/shared/SyncSearchParams';
import React from 'react';

export default async function SearchPage({ params }: { params: Promise<{ locales: string }> }) {
  const { locales } = await params;
  return (
    <>
      {/* <SyncSearchParams /> */}
      <main role='main' className='grow pb-16 bg-grayy dark:bg-dark_mode_main1'>
        <SearchModule locale={locales} />
      </main>
      <SecondFooter />
    </>
  );
}
