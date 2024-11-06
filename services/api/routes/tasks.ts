import { ErrorProps, api } from "@/services/api/api";
import queryString from "query-string";

export type TaskProps = {
  id: number,
  image: string | null,
  title: string,
  description: string,
  tip: string,
  level: string,
  categories_id: number,
  user_creator_id: number,
  created_at: string,
  updated_at: string | null
}

type Meta = {
  current_page?: number,
  from?: number,
  last_page?: number,
}

export type TaskPageProps = {
  data: Array<TaskProps>,
  links: object,
  meta: Meta
}

export type ImageTaskProps = {
  message: string,
  image_path: string
}

export type PostTaskProps = {
  title: string,
  description: string,
  tip: string,
  level: string,
  categories_id: number
}

export const getAllTasks = async (currentPage: number = 1) => {
  const currentPageQuery = queryString.stringify({ page: currentPage });

  const response = await api.get<TaskPageProps & ErrorProps>(
    `/tasks?${currentPageQuery}`,
  )

  return response.data;
}

export const getMyTasks = async (token: string, currentPage: number = 1) => {
  const currentPageQuery = queryString.stringify({ page: currentPage });

  const response = await api.get<TaskPageProps & ErrorProps>(
    `/tasks/mytasks?${currentPageQuery}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
}

export const getTemplates = async (token: string) => {

  const response = await api.get<TaskPageProps & ErrorProps>(
    `/tasks/templates`, {
    headers: { 'Authorization': `Bearer ${token}` }
  })
  return response.data; 
}


export const fetchTaskById = async (token: string, id: number) => {
  const response = await api.get<{ data: TaskProps } & ErrorProps>(
    `/tasks/by/${id}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
}

export const searchMyTasksByTitleOrDescription = async (text: string, token?: string | null, currentPage: number = 1) => {
  const currentPageQuery = queryString.stringify({ page: currentPage });

  const response = await api.get<TaskPageProps & ErrorProps>(
    `/tasks/search/${text}?${currentPageQuery}`, { 
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
}


export const searchTasksByCategoryId = async (categoryId: number) => {
  const response = await api.get<{ data: TaskProps[] } & ErrorProps>(
    `/tasks/category/${categoryId}`
  )

  return response.data;
}

export const createTask = async (data: PostTaskProps, token: string) => {
  const response = await api.post<{ data: TaskProps, message: string } & ErrorProps>(
    `/tasks`, data, {
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
}

export const saveImageTask = async (id: number, base64Image: string, token?: string | null) => {
  const response = await api.post<ImageTaskProps & ErrorProps>(
    `/tasks/image/${id}`, { image: base64Image }, {
    headers: {
      'Authorization': `Bearer ${token}`,
      "Content-Type": "multipart/form-data"
    }
  })

  return response.data;
}

export const editTaskById = async (id: number, data: PostTaskProps, token: string) => {
  const response = await api.put<{ data: TaskProps, message: string } & ErrorProps>(
    `/tasks/${id}`, data, {
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
}

export const deleteTaskById = async (id: number, token: string) => {
  const response = await api.delete<{ message: string } & ErrorProps>(
    `/tasks/${id}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
}
