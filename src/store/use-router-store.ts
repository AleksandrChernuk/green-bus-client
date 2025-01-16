import { IRouteResponse } from "@/types/route.types";
 import { create } from "zustand";
 import { devtools } from "zustand/middleware";
import { sortedRoutes } from "./helpers";

export type TsortBy = "price" | "popularity" | "arrival_time" | "time_on_road" | "departure_time";

export interface IuseRoutesStoreProps {
  routes: IRouteResponse[];
  filterRoutes: IRouteResponse[];
  sortBy: TsortBy;
  setRoutes: (routes: IRouteResponse[]) => void;
  setsortBy: (sortBy: TsortBy) => void;
}

export const useRoutesStore = create<IuseRoutesStoreProps>()(
  devtools((set, get) => ({
    filterRoutes: [],
    sortBy: "price",

    setRoutes: (routes) =>

    {
      const { sortBy } = get();
 
      set(() => ({
        filterRoutes: sortedRoutes({sortBy,data:routes}),
      }));},

    setsortBy: (sortBy) => {
      const { filterRoutes } = get();

 
      set(() => ({
        sortBy,
        filterRoutes: sortedRoutes({ sortBy, data: filterRoutes }),
      }));
    },
  }))
);
