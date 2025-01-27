// import { Jorney } from "@/types/Jorney";
// import { MobileDetailsFooter } from "./MobileDetailsFooter";
// import { DetailsRoute } from "./DetailsRoute";
// import { DetailsReturnPolicy } from "./DetailsReturnPolicy";
// import { DetailsLuggage } from "./DetailsLuggage";
// import { Card } from "@/components/shared/Card";
// import { handleSortStops } from "@/components/pages/SearchPage/helpers";

// type Props = {
//   element: Jorney;
// };

// export const MobileDetails = ({ element }: Props) => {
//   const { ticket_pricing, trip, departure, arrival, booking } = element.rides[0];

//   return (
//     <div className="ml-auto tablet:hidden ">
//       {/* <ResultDarwer
//         title="Деталі маршруту"
//         openButton={<p className="cursor-pointer text-primary_1 underline-offset-4">Детальніше</p>}
//         footerContent={<MobileDetailsFooter price={ticket_pricing.base_ticket_price} />}
//       >
//         <div className="pb-4 space-y-6">
//           <Card className="dark:bg-dark_mode_main1">
//             <DetailsRoute
//               trip={handleSortStops(departure.point.id, arrival.point.id, trip.stops)}
//               startPoint={departure}
//               stopPoint={arrival}
//             />
//           </Card>

//           <Card className="dark:bg-dark_mode_main1">
//             <DetailsReturnPolicy rules={booking} />
//           </Card>

//           <Card className="dark:bg-dark_mode_main1">
//             <DetailsLuggage />
//           </Card>
//         </div>
//       </ResultDarwer> */}
//     </div>
//   );
// };
