import { IRouteResponse } from '@/types/route.types';

export type CurrentRouteState = {
  сurrentRoute: IRouteResponse | null;
};

export type CurrentRouteActions = {
  setCurrentRoute: (route: IRouteResponse | null) => void;
};

export type CurrentRouteStore = CurrentRouteState & CurrentRouteActions;
