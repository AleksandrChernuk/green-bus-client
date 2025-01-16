"use client";

import { CustomCard } from "@/components/shared/CustomCard";
import { extractLocationDetails } from '@/lib/extractLocationDetails';
import { useSearchStore } from '@/store/search-store';
import { format, toDate } from 'date-fns';
import React from 'react';
import { useShallow } from 'zustand/react/shallow';
import { MobileFilter } from '../MobileFilter';
import { Skeleton } from '@/components/ui/skeleton';
import { useRoutesStore } from '@/store/use-router-store';

const ArrowIcon = () => {
  return (
    <div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='12'
        height='12'
        viewBox='0 0 12 12'
        fill='none'
        className='stroke-black_2_for_text dark:stroke-gray_1'
      >
        <path d='M2.5 6H9.5' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M6 2.5L9.5 6L6 9.5' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    </div>
  );
};

export const Information = () => {
  const date = useSearchStore(useShallow((state) => state.date));
  const from = useSearchStore(useShallow((state) => state.from));
  const to = useSearchStore(useShallow((state) => state.to));
  const filterRoutes = useRoutesStore((state) => state.filterRoutes);

  return (
    <CustomCard className='p-5 space-y-4 shadow-[0_4px_10px_0_rgba(0,0,0,0.2)] '>
      <div className='flex items-center justify-between'>
        <h3 className='h3 laptop:h1 text-text_prymery_color'>
          {format(toDate(date), 'eee ,d MMM.')}
        </h3>
        <div className='laptop:hidden'>
          <MobileFilter />
        </div>
      </div>
      <div className='flex items-center justify-between gap-1'>
        <div className='flex items-center gap-2 main_text_body text-text_secondary_color text-[12px] leading-4 tetx-black_2_for_text tablet:text-sm  dark:text-gray_1 text-nowrap truncate'>
          {from ? (
            <div>
              {from && extractLocationDetails(from, 'ru').locationName},{' '}
              {from && extractLocationDetails(from, 'ru').countryName}
            </div>
          ) : (
            <Skeleton className='h-3 bg-light_primary dark:bg-gray_1 min-w-20' />
          )}
          <div className='w-3 h-3 grow'>
            <ArrowIcon />
          </div>
          {to ? (
            <div className='flex items-center'>
              {to && extractLocationDetails(to, 'ru').locationName},{' '}
              {to && extractLocationDetails(to, 'ru').countryName}
            </div>
          ) : (
            <Skeleton className='h-3 bg-light_primary dark:bg-gray_1 min-w-20' />
          )}
        </div>
        <div className='text-[12px]  tablet:text-sm leading-6  text-primary_1 text-nowrap truncate'>
          {`${filterRoutes?.length} results`}
        </div>
      </div>
    </CustomCard>
  );
};
