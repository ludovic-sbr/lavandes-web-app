export interface FileModel {
  id: number;
  name: string;
  path: string;
  publicUrl: string;
}

export interface LocationModel {
  id: number;
  name: string;
  image: FileModel;
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

export interface LocationResponse extends LocationModel {
}
