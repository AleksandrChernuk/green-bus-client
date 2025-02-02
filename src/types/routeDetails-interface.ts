import { IDiscount } from './discount-interface';
import { IFreeSeats } from './free_seats-interface';
import { IInsurer } from './insurer-interface';
import { IReturnRules } from './return_rules-interface';
import { ISeat } from './seat-interface';
import { IStops } from './stops-interface';

export interface IGetRouteDetailsBody {
  fromCityId: number;
  toCityId: number;
  providerId: string;
  routeId: string;
  locale: string;
  passengersCount: number;
}

export interface IRouteDetailsResponse {
  stops: IStops[] | null;
  discounts: IDiscount[] | null;
  return_rules_description: string[] | null;
  return_rules: IReturnRules[] | null;
  bus_id: string | null;
  bus_name: string | null;
  bus_pictures: string[] | null;
  seats_map: ISeat[] | string | null;
  free_seats_map: IFreeSeats[] | null;
  luggage_fee: number | null;
  luggage_max_count: number | null;
  luggage_rules: string[] | null;
  amenities: string[] | null;
  insurer: IInsurer | null;
}
