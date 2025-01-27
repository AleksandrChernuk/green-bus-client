import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { CurrentRouteStore } from './types';

export const useCurrentRouteStore = create<CurrentRouteStore>()(
  devtools(
    persist(
      (set) => ({
        сurrentRoute: null,

        setCurrentRoute: (route) => {
          set({
            сurrentRoute: route,
          });
        },
      }),
      {
        name: 'current-route',
      }
    )
  )
);
