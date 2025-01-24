'use client';

import { getRoutes } from '@/actions/route-actions';
import { useRoutesStore } from '@/store/useRouter';
import { useSearchStore } from '@/store/useSearch';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';

export default function useSearchResult() {
  const setRoutes = useRoutesStore((state) => state.setRoutes);
  const from = useSearchStore(useShallow((state) => state.from));
  const to = useSearchStore(useShallow((state) => state.to));
  const date = useSearchStore(useShallow((state) => state.date));

   const { isFetching, data, error } = useQuery({
     queryKey: ['routes-search', from?.id, to?.id, date],

     queryFn: () =>
       getRoutes({
         fromCityId: from?.id ?? 0,
         toCityId: to?.id ?? 0,
         travelDate: date,
       }),

     enabled: !!from && !!to,
   });

  useEffect(() => {
    if (data) {
      setRoutes(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return { isFetching, error, data };
}
