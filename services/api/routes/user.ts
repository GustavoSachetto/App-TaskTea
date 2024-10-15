import { api } from "@/services/api/api";

export type UserProps = {
  id: number,
  name: string,
  email: string,
  image: string | null,
  banner: string | null,
  nickname: string,
  age: number,
  cpf?: string,
  role?: Array<string>,
  phone_number?: string,
  created_at: string,
  updated_at: string | null
}


export type TokenMessage = {
  token: string,
  message: string,
  expires_at: string
}

export type UserRelationshipProps = {
  id: number,
  name: string,
  email: string,
  nickname: string,
  age: number,
  image: string | null,
  created_at: string,
  updated_at: string | null
}

export type PostUserChildProps = {
  name: string,
  email: string,
  nickname: string,
  password: string,
  age: number
}

export type PostUserResponsibleProps = PostUserChildProps & {
  cpf: string,
  phone_number: string
}

export type PutUserProps = {
  name: string,
  email: string,
  nickname: string,
  age?: number,   
  current_password?: string,
  new_password?: string | null,
  new_password_confirmation?: string | null
}


export const getCodeUser = async(token?: string | null) =>{
  const response = await api.get<TokenMessage>(
    `relationship`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
    return response.data;
}

export const getMyUser = async (token?: string | null) => {
  const response = await api.get<{ data: UserProps }>(
    `/users`, {
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
} 

export const getMyRelationships = async (token: string) => {
  const response = await api.get<{ data: UserRelationshipProps[] }>(
    `/users/relationship`, {
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data.data;
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

export const createRelationship = async (tokenUser: string, token: string) => {
  const response = await api.post<{ message: string }>(
    '/relationship',{ token: `${tokenUser}` },
    {
      headers: { 'Authorization': `Bearer ${token}` },
    }
  );
  
  return response.data;
};

export const editMyUser = async (data: PutUserProps, token: string) => {
  const response = await api.put<{ data: UserProps }>(
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

export const storeImage = async (image: string, token: string) => {
    const formData = new FormData();

        formData.append('file[image]', {
          uri: image,
          name: 'photo.jpg',
        });


    console.log(formData);

    try {
        const response = await api.post<{ message: string, image_path: string }>('/users/image', formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao enviar a imagem:', error);
        throw error; 
    }
};

export const storeBanner = async (banner: string, token: string) => {
  const response = await api.post<{ banner: string }>(
    `/banner`, banner, {
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
} 