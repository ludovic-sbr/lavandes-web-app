export interface LocationResponse {
  id: number;
  name: string;
  stripeProductId: string;
  description: string;
  parking: boolean;
  kitchen: boolean;
  wifi: boolean;
  sanitary: boolean;
  heater: boolean;
  air_conditioner: boolean;
  terrace: boolean;
  barbecue: boolean;
  surface: number;
  max_persons: number;
  price_per_night: number;
  bedrooms: number;
  available: boolean;
  slot_number: number;
}
