import { api } from "@/services/api";

type TaskProps = {
  id: number,
  title: string,
  description: string,
  tip: string,
  level:  string,
  categories_id: number,
  user_creator_id: number,
  created_at: string,
  updated_at: string
}

type PostTaskProps = {
  title: string,
  description: string,
  tip: string,
  level:  string,
  categories_id: number
}

export const getAllTasks = async () => {
  const response = await api.get<TaskProps[]>(
    `/tasks`
  )

  return response.data;
} 

export const getMyTasks = async (token: string) => {
  const response = await api.get<TaskProps[]>(
    `/tasks/mytasks`, {
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
} 

export const fetchTaskById = async (id: number) => {
  const response = await api.get<TaskProps>(
    `/tasks/${id}`
  )

  return response.data;
} 

export const searchTasksByCategoryId = async (categoryId: number) => {
  const response = await api.get<TaskProps[]>(
    `/tasks/category/${categoryId}`
  )

  return response.data;
} 

export const createTask = async (data: PostTaskProps, token: string) => {
  const response = await api.post<TaskProps>(
    `/tasks`, data, {
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
} 

export const editTaskById = async (id: number, data: PostTaskProps, token: string) => {
  const response = await api.put<TaskProps>(
    `/tasks/${id}`, data, {
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
} 

export const deleteTaskById = async (id: number, token: string) => {
  const response = await api.delete(
    `/tasks/${id}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
} 
