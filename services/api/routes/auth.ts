import { api } from "@/services/api/api";

export type LoginProps = {
  message: string,
  token: string
}

export const createLogin = async (login: string, password: string) => {
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(login);

  const response = await api.post<LoginProps>(
    '/auth/login', 
    isEmail ? { email: login, password } : { nickname: login, password }
  );

  return response.data;
};


export const logout = async (token?: string | null) => {
  const response = await api.post<{ message: string }>(
    `/auth/logout`, {}, {
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
}