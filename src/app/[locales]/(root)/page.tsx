import Benefits from '@/components/pages/MainPage/Benefits';
import Buses from '@/components/pages/MainPage/Buses';
import Carriers from '@/components/pages/MainPage/Carriers';
import GetStarted from '@/components/pages/MainPage/GetStarted';
import { Herow } from '@/components/pages/MainPage/Herow';
import PopularRouters from '@/components/pages/MainPage/PopularRouters';
import Questions from '@/components/pages/MainPage/Questions';
import React from 'react'

export default async function Home({
   params,
}: {
   params: Promise<{ locales: string }>;
  }) {
  
  const { locales } = await params;
  return (
    <>
      <Herow />
      <Benefits locale={locales} />
      <Buses locale={locales} />

      <PopularRouters locale={locales} />

      <GetStarted locale={locales} />
      <Carriers locale={locales} />
      
      <Questions locale={locales} />
    </>
  );
}
