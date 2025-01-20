"use client";

import { Loader } from './components/Loader';
import { ResultCard } from './components/ResultCard';
import { NoTravel } from './components/NoTravel';
import { useRoutesStore } from '@/store/use-router-store';
import useSearchResult from '../../hooks/useSearchResult';

export const ResultList = () => {
  const { isFetching, error, data } = useSearchResult();

  const filteredRoutes = useRoutesStore((state) => state.filteredRoutes);

  if (isFetching) {
    return <Loader />;
  }

  if (error) return null;

  if (!isFetching && data && !data.length) return <NoTravel />;

  return (
    <ul className='flex flex-col space-y-8'>
      {filteredRoutes.map((route) => (
        <ResultCard key={route.route_id} element={route} />
      ))}
    </ul>
  );
};
