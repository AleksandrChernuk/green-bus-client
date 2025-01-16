// "use client";

// import useDateLocale from "@/hooks/useDateLocale";
// import { forwardRef, useState } from "react";
// import { IconClock } from "@/components/icons/IconClock";
// import { DepartureArrival, Stop } from "@/types/Jorney";
// import { format } from "date-fns";
// import { OpenDetailsButton } from "./OpenDetailsButton";
// import { DetailsRouteItem } from "./DetailsRouteItem";

// type Props = {
//   trip: Stop[];
//   startPoint: DepartureArrival;
//   stopPoint: DepartureArrival;
// };

// export const DetailsRoute = forwardRef<HTMLDivElement | null, Props>(({ trip, startPoint, stopPoint }, ref) => {
//   const [openDetails, setOpenDetails] = useState(false);
//   // const { hours, minutes } = getTimeOnRoad(stopPoint.date_time || "", startPoint.date_time || "");

//   return (
//     <div className="small_text text-text_seconddary_color">
//       {/* <div className="mb-4 space-y-2">
//         <div className="gap-2 flex_center">
//           <h5 className="h5 text-text_prymery_color ">Маршрут:</h5>

//           <div className="flex_center gap-2 text-primary_1 text-[10px] mobile:small_text">
//             <p>
//               {` ${format(startPoint.date_time || new Date(), "EEE dd")}, 
//               ${startPoint.point.location.name}`}
//             </p>
//             <IconArrowRigth />
//             <p>{` ${format(stopPoint.date_time || new Date(), "EEE dd")}, 
//               ${startPoint.point.location.name}`}</p>
//           </div>
//         </div>
//         <div className="gap-2 flex_center ">
//           <div className="w-4 h-4">
//             <IconRoad />
//           </div>

//           <p>Час в дорозі:</p>
//           <p>{`${hours}h,${minutes}m`}</p>
//         </div>
//         <div className="gap-2 flex_center ">
//           <div className="w-4 h-4">
//             <IconClock />
//           </div>
//           <p className="text-wrap">Час відправлення/прибуття вказано за місцевим часом.</p>
//         </div>
//       </div> */}

//       <div className="space-y-2">
//         {/* {!openDetails && (
//           <div className={`relative flex flex-col items-start gap-2 overflow-visible`}>
//             <span className="absolute left-0 top-0 h-full w-[2px] border-r-[2px] border-gray_2_for_body dark:border-blackmode border-dashed translate-x-[56.5px] "></span>
//             {[startPoint, stopPoint].map((element, idx, array) => (
//               <RotePreview
//                 point={element}
//                 key={element.point.id}
//                 isLast={idx === array.length - 1}
//                 isFirst={idx === 0}
//               />
//             ))}
//           </div>
//         )} */}

//         {/* {openDetails && (
//           <div className={`relative flex flex-col items-start gap-2 mt-4`}>
//             <span className="absolute z-0 left-0 top-0 h-full w-[2px] border-r-[2px] border-gray_2_for_body dark:border-blackmode border-dashed translate-x-[56.5px] "></span>
//             {trip.map((element, idx, array) => (
//               <DetailsRouteItem
//                 point={element}
//                 key={element.point.id}
//                 isFirst={idx === 0}
//                 isLast={idx === array.length - 1}
//               />
//             ))}
//           </div>
//         )} */}

//         {/* <OpenDetailsButton
//           text={`${openDetails ? "Згорнути весь маршрут" : "Показати весь маршрут"}`}
//           isOpen={openDetails}
//           onClick={() => setOpenDetails(!openDetails)}
//         /> */}
//       </div>
//     </div>
//   );
// });

// DetailsRoute.displayName = "DetailsRoute";
