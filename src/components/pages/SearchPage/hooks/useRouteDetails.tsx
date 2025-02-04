// 'use client';

// import { getRouteDetails } from '@/actions/route-actions';
// import { useSearchStore } from '@/store/useSearch';
// import { useQuery } from '@tanstack/react-query';
// import { useTranslation } from 'react-i18next';
// import { useShallow } from 'zustand/react/shallow';

// export default function useRouteDetails({
//   routeId,
//   providerId,
// }: {
//   routeId?: string;
//   providerId?: string;
// }) {
//   const from = useSearchStore(useShallow((state) => state.from));
//   const to = useSearchStore(useShallow((state) => state.to));
//   const adult = useSearchStore(useShallow((state) => state.adult));
//     const date = useSearchStore(useShallow((state) => state.date));

//     const children = useSearchStore(useShallow((state) => state.children));

//     const { i18n } = useTranslation();

//     const { isFetching, data, error } = useQuery({
//       queryKey: ['routes-details', from?.id, to?.id, routeId, providerId, i18n.language],

//       queryFn: () =>
//         getRouteDetails({
//           fromCityId: from?.id ?? 0,
//           toCityId: to?.id ?? 0,
//           providerId: providerId ?? '',
//           routeId: routeId ?? '',
//           locale: i18n.language,
//           passengersCount: adult + children,
//           travelDate: date,
//         }),

//       enabled: !!from && !!to && !!routeId && !!providerId,
//     });

//   console.log(data);

//   return { isFetching, error, data };
// }
