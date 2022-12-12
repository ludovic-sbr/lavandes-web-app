export interface UserFormData {
	id?: number;
	firstname?: string;
	lastname?: string;
	email?: string;
	tel?: string;
	password?: string;
	repeat_password?: string;
	google_id?: string;
}

export interface UserRequest {
	id?: number;
	firstname?: string;
	lastname?: string;
	email?: string;
	tel?: string;
	password?: string;
	repeat_password?: string;
	google_id?: string;
}

export interface UserResponse {
	id: number;
	firstname: string | null;
	lastname: string | null;
	email: string;
	tel: string | null;
	password: string | null;
	google_id: string | null;
}
