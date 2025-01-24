"use client";

import { Loader } from './components/Loader';
import { ResultCard } from './components/ResultCard';
import { NoTravel } from './components/NoTravel';
import useSearchResult from '../../hooks/useSearchResult';
import { useRoutesStore } from '@/store/useRouter';

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
      {filteredRoutes.map((route, i) => {
        return <ResultCard key={`${route.route_id}_${i}`} element={route} />;
      })}
    </ul>
  );
};
