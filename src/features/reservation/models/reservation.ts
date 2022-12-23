import {UserModel} from "@/features/user/models/user";
import {LocationResponse} from "@/common/models/location";

export interface ReservationModel {
  id: number;
  user: UserModel;
  location: LocationResponse;
  reservation_key: string;
  adult_nbr: number;
  child_nbr: number;
  animal_nbr: number;
  vehicle_nbr: number;
  from: string;
  to: string;
  total_price: number;
  night_number: number;
  stripe_session_id?: string;
  status: string;
  user_contact?: string;
  user_comment?: string;
}

export interface ReservationRequest extends Partial<ReservationModel> {
  user_id?: number;
  location_id?: number;
}

export interface CompleteReservationRequest {
  status: ReservationStatusEnum;
}

export interface ReservationResponse extends ReservationModel {
}

export interface ConfirmReservationResponse {
  reservation: ReservationModel;
  stripe_session_url: string;
}

export enum ReservationStatusEnum {
  OPEN = 'OPEN',
  COMPLETE = 'COMPLETE',
  CANCELED = 'CANCELED',
}
