"use client";

import { getRoutes } from "@/actions/route-actions";
import { useQuery,   } from "@tanstack/react-query";
import { useShallow } from "zustand/react/shallow";
import { Loader } from "./components/Loader";
import { ResultCard } from "./components/ResultCard";
import { NoTravel } from "./components/NoTravel";
import { useSearchStore } from "@/store/search-store";
import { useRoutesStore } from "@/store/use-router-store";
import { useEffect } from "react";
  
export const ResultList = () => {
  const setRoutes = useRoutesStore((state) => state.setRoutes);
  const filterRoutes = useRoutesStore((state) => state.filterRoutes);

  const from = useSearchStore(useShallow((state) => state.from));
  const to = useSearchStore(useShallow((state) => state.to));
  const date = useSearchStore(useShallow((state) => state.date));

  const { isLoading, data, error } = useQuery({
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

  return (
    <div className='flex flex-col space-y-4'>
      {!isLoading &&
        filterRoutes?.map((el, i) => <ResultCard key={`${el.route_id}_${i}`} element={el} />)}
      {isLoading && <Loader />}
      {!error && !isLoading && !data?.length && <NoTravel />}
    </div>
  );
};
