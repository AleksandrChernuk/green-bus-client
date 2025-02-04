import { getCookie } from 'cookies-next';
import React from 'react';
import { cookies } from 'next/headers';
import NewOrderPage from '.';

export default async function NewOrderWrapp() {
  const adult = await getCookie('adult', { cookies });
  const children = await getCookie('children', { cookies });
  console.log(adult);
  console.log(children);

  return <NewOrderPage adult={Number(adult) || 1} child={Number(children) || 1} />;
}
