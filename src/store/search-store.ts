import { ILocation } from "@/types/location.types";

import { addMonths, format } from 'date-fns';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';

export type TpassengerType = 'adult' | 'children';
export type TcityKey = 'from' | 'to';
export type Terrors = {
  from: string | null;
  to: string | null;
};

export type SearchState = {
  from?: ILocation;
  to?: ILocation;
  date: string;
  month: Date;
  adult: number;
  children: number;
  errors: Terrors;
};

export type MainSearchActions = {
  setDate: (newDate: string) => void;
  setErrors: (cityKey: TcityKey, error: string | null) => void;
  setCity: (cityKey: TcityKey, newCity: ILocation | null) => void;
  incrementPassenger: (passengerType: TpassengerType) => void;
  decrementPassenger: (passengerType: TpassengerType) => void;
  incrementMonth: () => void;
  decrementMonth: () => void;
  setMonth: (newMonth: Date) => void;
  swap: () => void;
};

export type SearchStore = SearchState & MainSearchActions;

export const defaultInitState: SearchState = {
  date: format(new Date(), 'yyyy-MM-dd'),
  month: new Date(),
  adult: 1,
  children: 0,
  errors: {
    from: null,
    to: null,
  },
};

export const useSearchStore = create<SearchStore>()(
  devtools(
    persist(
      (set, get) => ({
        ...defaultInitState,
        setDate: (newDate: string) =>
          set((state) => ({
            ...state,
            date: newDate,
          })),

        setCity: (cityKey: TcityKey, newCity) =>
          set((state) => ({
            ...state,
            [cityKey]: newCity,
          })),

        incrementPassenger: (passengerType) =>
          set((state) => ({
            ...state,
            [passengerType]: state[passengerType] + 1,
          })),

        decrementPassenger: (passengerType) =>
          set((state) => ({
            ...state,
            [passengerType]: state[passengerType] > 0 ? state[passengerType] - 1 : 0,
          })),
        incrementMonth: () => {
          const { month } = get();

          set((state) => ({
            ...state,
            month: addMonths(month, 1),
          }));
        },

        decrementMonth: () => {
          const { month } = get();

          set((state) => ({
            ...state,
            month: addMonths(month, -1),
          }));
        },

        setMonth: (newMonth) =>
          set((state) => ({
            ...state,
            month: newMonth,
          })),

        swap: () =>
          set((state) => ({
            ...state,
            to: state.from,
            from: state.to,
          })),

        setErrors: (cityKey, error) =>
          set((state) => ({
            ...state,
            errors: { ...state.errors, [cityKey]: error },
          })),
      }),
      {
        name: 'main-search-new',
      }
    )
  )
);

// export interface IMainSearchStoreProps {
//   from?: ILocation;
//   to?: ILocation;
//   date: string;
//   adult: number;
//   children: number;
//   errors: Terrors;
//   setDate: (newDate: string) => void;
//   setErrors: (cityKey: TcityKey, error: string | null) => void;
//   setCity: (cityKey: TcityKey, newCity?: ILocation) => void;
//   incrementPassenger: (passengerType: TpassengerType) => void;
//   decrementPassenger: (passengerType: TpassengerType) => void;
//   swap: () => void;
// }

// export const useMainSearchStore = create<IMainSearchStoreProps>()(
//   devtools(
//     persist(
//       (set) => ({
//         from: undefined,
//         to: undefined,
//         date: format(new Date(), "yyyy-MM-dd"),
//         adult: 1,
//         children: 0,
//         errors: {
//           from: null,
//           to: null,
//         },

//         setDate: (newDate: string) =>
//           set((state) => ({
//             ...state,
//             date: newDate,
//           })),

//         setCity: (cityKey: TcityKey, newCity?: ILocation) =>
//           set((state) => ({
//             ...state,
//             [cityKey]: newCity,
//           })),

//         incrementPassenger: (passengerType: TpassengerType) =>
//           set((state) => ({
//             ...state,
//             [passengerType]: state[passengerType] + 1,
//           })),

//         decrementPassenger: (passengerType: TpassengerType) =>
//           set((state) => ({
//             ...state,
//             [passengerType]: state[passengerType] > 0 ? state[passengerType] - 1 : 0,
//           })),

//         swap: () =>
//           set((state) => ({
//             ...state,
//             to: state.from,
//             from: state.to,
//           })),

//         setErrors: (cityKey: TcityKey, error: string | null) =>
//           set((state) => ({
//             ...state,
//             errors: { ...state.errors, [cityKey]: error },
//           })),
//       }),
//       {
//         name: "main-search",
//       },
//     ),
//   ),
// );
