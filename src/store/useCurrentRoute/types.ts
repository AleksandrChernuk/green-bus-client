import { IRouteResponse } from '@/types/route.types';
 
export type CurrentRouteState = {
  сurrentRoute: IRouteResponse | null;
  loadingDetails?: boolean;
};

export type SetCurrentRoute = {
  route: IRouteResponse | null;
  locale?: string;
  passCount?: number;
  fromCityId?: number;
  toCityId?: number;
};

export type CurrentRouteActions = {
  setCurrentRoute: ({ route, locale, passCount, fromCityId, toCityId }: SetCurrentRoute) => void;
};

export type CurrentRouteStore = CurrentRouteState & CurrentRouteActions;
