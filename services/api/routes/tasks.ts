import { api } from "@/services/api/api";
import queryString from "query-string";

export type TaskProps = {
  id: number,
  image: string | null,
  title: string,
  description: string,
  tip: string,
  level:  string,
  categories_id: number,
  user_creator_id: number,
  created_at: string,
  updated_at: string | null
}

export type TaskPageProps = {
  data: Array<TaskProps>,
  links: object,
  meta: object
}

export type ImageTaskProps = {
  message: string,
  image_path: string
}

export type PostTaskProps = {
  title: string,
  description: string,
  tip: string,
  level:  string,
  categories_id: number
}

export const getAllTasks = async (currentPage: number = 1) => {
  const currentPageQuery = queryString.stringify({ page: currentPage });

  const response = await api.get<TaskPageProps>(
    `/tasks?${currentPageQuery}`, 
  )

  return response.data;
} 

export const getMyTasks = async (token: string, currentPage: number = 1) => {
  const currentPageQuery = queryString.stringify({ page: currentPage });

  const response = await api.get<TaskPageProps>(
    `/tasks/mytasks?${currentPageQuery}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
} 

export const fetchTaskById = async (id: number) => {
  const response = await api.get<{ data: TaskProps }>(
    `/tasks/by/${id}`
  )

  return response.data;
} 

export const searchTasksByCategoryId = async (categoryId: number) => {
  const response = await api.get<{ data: TaskProps[] } >(
    `/tasks/category/${categoryId}`
  )

  return response.data;
} 

export const createTask = async (data: PostTaskProps, token: string) => {
  const response = await api.post<{ data: TaskProps }>(
    `/tasks`, data, {
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
} 

export const saveImageTask = async (id: number, imageFile: File, token?: string | null) => {
  const response = await api.postForm<ImageTaskProps>(
    `/tasks/image/${id}`, { image: imageFile }, {
    headers: {
      'Authorization': `Bearer ${token}`,
      "Content-Type": "multipart/form-data"
    }
  })

  return response.data;
}

export const editTaskById = async (id: number, data: PostTaskProps, token: string) => {
  const response = await api.put<{ data: TaskProps }>(
    `/tasks/${id}`, data, {
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
} 

export const deleteTaskById = async (id: number, token: string) => {
  const response = await api.delete<{ message: string }>(
    `/tasks/${id}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
} 
