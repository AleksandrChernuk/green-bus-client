// import { DetailsRoute } from "./DetailsRoute";
// import { Jorney } from "@/types/Jorney";
// import { DetailsReturnPolicy } from "./DetailsReturnPolicy";
// import { DetailsLuggage } from "./DetailsLuggage";

// type Props = {
//   element: Jorney;
//   open: boolean;
// };

// export const Details = ({ element, open }: Props) => {
//   const { departure, arrival, booking } = element.rides[0];

//   return (
//     <div
//       className={`hidden tablet:grid tablet:grid-cols-2 gap-4 tablet:gap-9 transition-max-height overflow-hidden ease-in-out duration-300  ${
//         open ? "max-h-[4000px] mt-8" : "max-h-0"
//       }`}
//     >
//       {/* <DetailsRoute
//         // trip={handleSortStops(departure.point.id, arrival.point.id, element.rides[0].trip.stops)}
//         startPoint={departure}
//         stopPoint={arrival}
//       /> */}

//       <div className="space-y-4">
//         <DetailsReturnPolicy rules={booking} />
//         <DetailsLuggage />
//       </div>
//     </div>
//   );
// };
