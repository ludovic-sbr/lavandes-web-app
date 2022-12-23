import {RoleResponse} from "@/common/models/role";

export interface UserFormData {
  id?: number;
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  repeat_password?: string;
  google_id?: string;
}

export interface UserRequest {
  id?: number;
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  repeat_password?: string;
  google_id?: string;
}

export interface UserResponse {
  user: UserModel;
}

export interface UserModel {
  id: number;
  firstname: string | null;
  lastname: string | null;
  email: string;
  password: string | null;
  role: RoleResponse;
  google_id: string | null;
}
