// import React from "react";
// import { Stop } from "@/types/Jorney";
// import { format } from "date-fns";

// type Props = {
//   isFirst?: boolean;
//   isLast?: boolean;
//   point: Stop;
// };

// export const DetailsRouteItem = ({ isFirst, isLast, point }: Props) => {
//   return (
//     <div
//       className={`relative flex items-start justify-start  ${isLast && "overflow-hidden z-10 bg-white dark:bg-dark_mode_main1 tablet:dark:bg-card_bg_primery"}`}
//     >
//       <span
//         className={`${isFirst || isLast ? "button_mobile" : "small_2_bolt_text"} text-text_prymery_color mr-9 min-w-[40px] max-w-[40px]`}
//       >
//         {format(point?.departure_date_time || new Date(), "HH:MM")}
//       </span>

//       <div
//         className={`relative after:content-[''] before:absolute 
//              after:rounded-full before:border-[2px]	${isLast ? "before:border-primary_1" : "before:border-blackmode before:bg-white before:dark:bg-dark_mode_main1 tablet:before:dark:bg-background_black_mode"}
//             before:w-4 before:h-4
//              before:top-0 before:-left-[19px] before:-translate-x-1/2 before:rounded-full
//              before:z-20`}
//       >
//         {isLast && (
//           <span className="absolute w-[8px] h-[8px] rounded-full bg-primary_1 top-[4px] -left-[19px] -translate-x-1/2"></span>
//         )}
//         <div className={`${isFirst || isLast ? "button_mobile" : "small_2_bolt_text"}  text-text_prymery_color`}>
//           {point.point.location.name}
//         </div>

//         <div>
//           {point.point.name}, {point.point.address}
//         </div>
//       </div>
//     </div>
//   );
// };
