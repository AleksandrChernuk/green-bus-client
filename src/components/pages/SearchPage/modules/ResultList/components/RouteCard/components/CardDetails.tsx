import DetailsInfo from '@/components/pages/SearchPage/components/Details/DetailsInfo';
import DetailsStops from '@/components/pages/SearchPage/components/Details/DetailsStops';
import React from 'react';

export default function CardDetails() {
  return (
    <div className='mt-4'>
      <DetailsInfo />
      <DetailsStops />
    </div>
  );
}
