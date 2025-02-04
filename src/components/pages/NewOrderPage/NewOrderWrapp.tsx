import React from 'react';
import { cookies } from 'next/headers';
import NewOrderPage from '.';
import { unstable_noStore as noStore } from 'next/cache';

export default async function NewOrderWrapp() {
  noStore(); // Отключаем кеширование

  const cookieStore = cookies();
  const adult = (await cookieStore).get('adult')?.value;
  const children = (await cookieStore).get('children')?.value;

  console.log(adult);
  console.log(children);

  return <NewOrderPage adult={Number(adult) || 1} child={Number(children) || 1} />;
}
