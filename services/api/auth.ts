import { api } from "../api";

type LoginProps = {
    message: string,
    token: string
}

export const createLogin = async (email: string, password: string) => {
    const response = await api.post<LoginProps>(
        `/auth/login`, 
        { email, password } 
    )

    return response.data;
}

export const logout = async (token?: string | null) => {
    const response = await api.post(
        `/auth/logout`, {}, {
        headers: { 'Authorization': `Bearer ${token}` }
    })

    return response.data;
}