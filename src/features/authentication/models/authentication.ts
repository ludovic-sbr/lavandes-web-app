export interface LoginFormData {
  email?: string;
  password?: string;
  google_id?: string;
}

export interface LoginRequest {
  id?: number;
  data: LoginFormData;
}

export interface LoginResponse {
  token: string;
}
