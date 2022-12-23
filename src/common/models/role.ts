export interface RoleResponse {
  id: number;
  name: string;
}

export enum RoleEnum {
  USER = 'USER',
  ADMIN = 'ADMIN',
  DEVELOPER = 'DEVELOPER',
}
