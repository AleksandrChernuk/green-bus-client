 import { addDays,  } from "date-fns";
import { differenceInMilliseconds } from "date-fns";
 
export const createDateArr = (centerDate: Date, length: number, lastNum: number): Date[] => {
  return Array.from({ length }, (_, index) => addDays(centerDate, index - lastNum));
};

 
export const getTimeOnRoad = (arrival: string, departure: string) => {
  const durationMs = differenceInMilliseconds(new Date(arrival), new Date(departure));

  const hours = Math.floor(durationMs / (1000 * 60 * 60));
  const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));

  return { hours, minutes, durationMs };
};

 