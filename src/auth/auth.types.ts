export interface User {
  id: number;
  firstName: string;
  maidenName: string;
  lastName: string;
  email: string;
  gender: string;
  role: string;
}

export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  user: User;
}

export interface RefreshResponse {
  accessToken: string;
  refreshToken: string;
}
