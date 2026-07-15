import type { User, RefreshResponse } from "../auth/auth.types";
import api from "./axios";

export const loginApi = async (payload: any) => {
  const { data } = await api.post("/auth/login", payload);
  return data;
};

export const refreshApi = async (payload: {
  refreshToken: string;
}): Promise<RefreshResponse> => {
  const { data } = await api.post("/auth/refresh", payload);
  return data;
};

export const logoutApi = async (payload: any) => {
  const { data } = await api.post("/auth/logout", payload);
  return data;
};

export const meApi = async (): Promise<User> => {
  const { data } = await api.get("/auth/me");
  return data;
};
