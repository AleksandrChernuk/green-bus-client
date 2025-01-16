import { ILocation } from "./location.types";

export interface IGetRoutesBody {
  fromCityId: number;
  toCityId: number;
  travelDate: string;
  daysCountLimit?: number;
}

export interface IRouteResponse {
  tripId: string | null; //? Нужно для EWE
  intervalId: string | null; //? Нужно для EWE
  route_id: string;
  route_number: string | null;
  route_name: string | null;
  allowed_operations: {
    purchase_allowed: boolean;
    reservation_allowed: boolean;
    reservation_close_at: string | null; //? Дата и время, когда заканчивается возможность бронирования
    reservation_time: number | null;
    can_payment_to_driver: boolean | null;
  };
  departure: {
    fromLocation: ILocation;
    station_id: number | null;
    station_name: string | null;
    station_address: string | null;
    date: string | null;
    time: string | null;
    date_time: string | null;
  };
  arrival: {
    toLocation: ILocation;
    station_id: number | null;
    station_name: string | null;
    station_address: string | null;
    date: string | null;
    time: string | null;
    date_time: string | null;
  };
  duration: string | null; //? разная форма возврата
  bus_change: unknown[] | null; //? Пересадка (пока поставил так, потом разберемся)
  ticket_pricing: {
    base_price: number;
    price_with_discount: number | null;
    discount_percentage: number | null;
    currency: string;
  };
  refund_rule_descriptions: string[] | null;
  seats: {
    available_seat_count: number | null;
    seat_number_selection_allowed: boolean;
    free_choice_of_places: boolean | null;
    free_seats: number | null;
  };
  boarding: {
    printed_ticket_required: boolean;
  };
  provider_id: string;
  provider_name: string; //? Название провайдера
  carrier: {
    id: string | null;
    name: string | null;
    legal_identifier: string | null;
    address: string | null;
    phone: string | null;
    rating: number | null;
    reviews: string[] | null;
  };
  bus: {
    id: string | null;
    name: string | null;
    bus_picture: string | null; //? Фото автобуса
    seat_count: number | null;
    luggage: string | null;
    amenities: string[] | null;
  };
}
