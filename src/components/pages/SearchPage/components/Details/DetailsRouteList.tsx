// 'use client';

// // import { useState } from 'react';
// import { OpenDetailsButton } from '../OpenDetailsButton';
// import { useCurrentRouteStore } from '@/store/useCurrentRoute';
// import { DetailsRouteItem } from './DetailsRouteItem';
// import { useState } from 'react';

// export default function DetailsRouteList() {
//   const [open, setOpen] = useState<boolean>(false);
//   const сurrentRoute = useCurrentRouteStore((state) => state.сurrentRoute);

//   console.log(сurrentRoute?.details?.stops);

//   return (
//     <div>
//       <div className='space-y-2'>
//         {!open && (
//           <div className={`relative flex flex-col items-start gap-2 overflow-visible`}>
//             <span className='absolute left-0 top-0 h-full w-[2px] border-r-[2px] border-gray_2_for_body dark:border-blackmode border-dashed translate-x-[56.5px] '></span>
//             <RotePreview />
//           </div>
//         )}

//         {open && (
//           <div className={`relative flex flex-col items-start gap-2 mt-4`}>
//             <span className='absolute z-0 left-0 top-0 h-full w-[2px] border-r-[2px] border-gray_2_for_body dark:border-blackmode border-dashed translate-x-[56.5px]'></span>
//             {сurrentRoute &&
//             сurrentRoute?.details?.stops &&
//             !сurrentRoute?.details?.stops[0].location.name
//               ? сurrentRoute?.details?.stops.map((element, idx, array) => (
//                   <DetailsRouteItem
//                     point={element}
//                     key={`${element.station.name}_${idx}`}
//                     isFirst={idx === 0}
//                     isLast={idx === array.length - 1}
//                   />
//                 ))
//               : сurrentRoute?.details?.stops
//                   ?.slice(
//                     сurrentRoute?.details?.stops.findIndex(
//                       (el) => el.station.id === `${сurrentRoute?.departure?.station_id}`
//                     ),
//                     сurrentRoute?.details?.stops.findIndex(
//                       (el) => el.station.id === `${сurrentRoute?.arrival?.station_id}`
//                     )
//                   )
//                   .map((element, idx, array) => (
//                     <DetailsRouteItem
//                       point={element}
//                       key={`${element.station.name}_${idx}`}
//                       isFirst={idx === 0}
//                       isLast={idx === array.length - 1}
//                     />
//                   ))}
//           </div>
//         )}

//         {сurrentRoute?.details?.stops && (
//           <OpenDetailsButton
//             isOpen={open}
//             onClick={() => setOpen((p) => !p)}
//           >{`${open ? 'Згорнути весь маршрут' : 'Показати весь маршрут'}`}</OpenDetailsButton>
//         )}
//       </div>
//     </div>
//   );
// }
