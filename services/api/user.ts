import { api } from "@/services/api";

type UserProps = {
  id: number,
  name: string,
  email: string,
  nickname: string,
  age: number,
  cpf?: string,
  role?: Array<string>,
  phone_number?: string,
  created_at: string,
  updated_at: string
}

type UserRelationshipProps = {
  id: number,
  name: string,
  email: string,
  nickname: string,
  age: number,
  image: string | null,
  created_at: string,
  updated_at: string
}

type PostUserChildProps = {
  name: string,
  email: string,
  nickname: string,
  password: string,
  age: number
}

type PostUserResponsibleProps = PostUserChildProps & {
  cpf: string,
  phone_number: string,
}

type PutUserProps = {
  name: string,
  email: string,
  nickname: string,
  age?: number,   
  current_password: string,
  new_password: string | null,
  new_password_confirmation: string | null,
}

export const getMyUser = async (token: string) => {
  const response = await api.get<UserProps>(
    `/users`,{
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
} 

export const getMyRelationships = async (token: string) => {
  const response = await api.get<UserRelationshipProps[]>(
    `/users/relationship`,{
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
} 

export const createUserChild = async (data: PostUserChildProps) => {
  const response = await api.post<{ message: string}>(
    `/users/child`, data
  )

  return response.data.message;
} 

export const createUserResponsible = async (data: PostUserResponsibleProps) => {
  const response = await api.post<{ message: string}>(
    `/users/responsible`, data
  )

  return response.data.message;
} 

export const createUserRelationship = async (userId: number, token: string) => {
  const response = await api.post<{ message: string }>(
    `/users/relationship`, { userId },{
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response;
} 

export const editMyUser = async (data: PutUserProps, token: string) => {
  const response = await api.put<UserProps>(
    `/users`, data,{
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
} 

export const deleteMyUser = async (token: string) => {
  const response = await api.delete<{ message: string }>(
    `/users`, {
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
} 
