import { IRouteResponse } from "@/types/route.types";
import { differenceInMilliseconds, toDate } from "date-fns";

export const sortedRoutes = ({
  sortBy,
  data,
}: {
  sortBy: string;
  data: IRouteResponse[];
}) => {
  return data.toSorted((a, b) => {
    switch (sortBy) {
      case "departure_time":
        return (
          toDate(a?.departure?.date_time || new Date()).getTime() -
          toDate(b?.departure?.date_time || new Date()).getTime()
        );

      case "arrival_time":
        return (
          toDate(a?.arrival?.date_time || new Date()).getTime() -
          toDate(b?.arrival?.date_time || new Date()).getTime()
        );

      case "time_on_road":
        const timeA = differenceInMilliseconds(
          new Date(a?.arrival?.date_time || 0),
          new Date(a?.departure?.date_time || 0)
        );
        const timeB = differenceInMilliseconds(
          new Date(b?.arrival?.date_time || 0),
          new Date(b?.departure?.date_time || 0)
        );
        return timeA - timeB;

      case "price":
        return (
          Math.floor(a?.ticket_pricing?.base_price || 0) -
          Math.floor(b?.ticket_pricing?.base_price || 0)
        );

      case "popularity":
        return 0;

      default:
        return 0;
    }
  });
};
