import { ErrorProps, api } from "@/services/api/api";

export type LoginProps = {
  message: string,
  token: string
}

export const createLogin = async (emailOrNickname: string, password: string) => {
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailOrNickname);

  const response = await api.post<LoginProps & ErrorProps>(
    '/auth/login', 
    isEmail ? { email: emailOrNickname, password } : { nickname: emailOrNickname, password }
  )

  return response.data;
}


export const logout = async (token?: string | null) => {
  const response = await api.post<{ message: string } & ErrorProps>(
    `/auth/logout`, {}, {
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
}