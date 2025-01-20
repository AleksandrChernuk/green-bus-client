import { IRouteResponse } from "@/types/route.types";
 import { create } from "zustand";
 import { devtools } from "zustand/middleware";
import { sortedRoutes } from "./helpers";

export type TsortBy = 'price' | 'popularity' | 'arrival_time' | 'time_on_road' | 'departure_time';

export interface IuseRoutesStoreProps {
  routes: IRouteResponse[];
  filteredRoutes: IRouteResponse[];
  sortBy: TsortBy;
  setRoutes: (routes: IRouteResponse[]) => void;
  setSortBy: (sortBy: TsortBy) => void;
  resetSortBy: (sortBy: TsortBy) => void;
}

export const useRoutesStore = create<IuseRoutesStoreProps>()(
  devtools((set, get) => ({
    filteredRoutes: [],
    sortBy: 'popularity',

    setRoutes: (routes) => {
      const { sortBy } = get();
      set({
        routes,
        filteredRoutes: sortedRoutes({ sortBy, data: routes }),
      });
    },

    setSortBy: (sortBy) => {
      const { routes } = get();

      set({
        sortBy,
        filteredRoutes: sortedRoutes({ sortBy, data: routes }),
      });
    },

    resetSortBy: () => {
      const { routes } = get();
      set({
        sortBy: 'popularity',
        filteredRoutes: sortedRoutes({ sortBy: 'popularity', data: routes }),
      });
    },
  }))
);
