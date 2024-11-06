import { api } from "@/services/api/api";

export type UserProps = {
  id: number,
  name: string,
  email: string,
  image: string | null,
  banner: string | null,
  nickname: string,
  birthdate: string,
  cpf?: string,
  role?: Array<string>,
  phone_number?: string,
  created_at: string,
  updated_at: string | null
}

export type UserRelationshipProps = {
  id: number,
  name: string,
  email: string,
  nickname: string,
  birthdate: string,
  image: string | null,
  created_at: string,
  updated_at: string | null
}

export type RelationshipProps = {
  data: UserRelationshipProps[] | void
}

export type ImageUserProps = {
  message: string,
  image_path: string
}

export type PostUserChildProps = {
  name: string,
  email: string,
  nickname: string,
  password: string,
  birthdate: string
}

export type PostUserResponsibleProps = PostUserChildProps & {
  phone_number: string
}

export type PutUserProps = {
  name: string,
  email: string,
  nickname: string,
  birthdate?: string,   
  phone_number: string | null,
  current_password?: string | null,
  new_password?: string | null,
  new_password_confirmation?: string | null
}

export const getMyUser = async (token?: string | null) => {
  const response = await api.get<{ data: UserProps }>(
    `/users`, {
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
} 

export const getMyRelationships = async (token: string) => {
  const response = await api.get<RelationshipProps>(
    `/users/relationship`, {
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
} 

export const createUserChild = async (data: PostUserChildProps) => {
  const response = await api.post<{ data: UserProps, message: string}>(
    `/users/child`, data
  )

  return response.data;
} 

export const createUserResponsible = async (data: PostUserResponsibleProps) => {
  const response = await api.post<{ data: UserProps, message: string}>(
    `/users/responsible`, data
  )

  return response.data;
} 

export const saveImageTask = async (id: number, base64Image: string, token?: string | null) => {
  const response = await api.post<ImageUserProps>(
    `/tasks/image/${id}`, { image: base64Image }, {
    headers: {
      'Authorization': `Bearer ${token}`,
      "Content-Type": "multipart/form-data"
    }
  })

  return response.data;
}

export const saveImageUser = async (base64Image?: string | null, token?: string | null) => {
  const response = await api.post<ImageUserProps>(
    `/users/image`, { image: base64Image }, {
    headers: {
      'Authorization': `Bearer ${token}`,
      "Content-Type": "multipart/form-data"
    }
  })

  return response.data;
}

export const saveBannerUser = async (base64Image?: string | null, token?: string | null) => {
  const response = await api.post<ImageUserProps>(
    `/users/banner`, { image: base64Image }, {
    headers: {
      'Authorization': `Bearer ${token}`,
      "Content-Type": "multipart/form-data"
    }
  })

  return response.data;
}

export const editMyUser = async (data: PutUserProps, token: string) => {
  const response = await api.put<{ data: UserProps, message: string }>(
    `/users`, data, {
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
