import React from 'react';
import NewOrderPage from '.';

export default async function NewOrderWrapp() {
  return <NewOrderPage adult={Number(1) || 1} child={Number(2) || 1} />;
}
