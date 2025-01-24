import { addMonths, format } from 'date-fns';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';
import { SearchStore } from './types';

export const useSearchStore = create<SearchStore>()(
  devtools(
    persist(
      (set, get) => ({
        date: format(new Date(), 'yyyy-MM-dd'),
        month: new Date(),
        adult: 1,
        children: 0,
        errors: {
          from: null,
          to: null,
        },
        setDate: (newDate) =>
          set((state) => ({
            ...state,
            date: newDate,
          })),

        setCity: (cityKey, newCity) =>
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
        name: 'main-search',
      }
    )
  )
);
