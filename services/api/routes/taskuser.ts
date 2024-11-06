import { ErrorProps, api } from "@/services/api/api";
import { UserProps } from "@/services/api/routes/user";
import { TaskProps } from "@/services/api/routes/tasks";
import queryString from "query-string";

export type TaskUserProps = {
  id: number,
  done: boolean,
  finished_at: string | null,
  updated_at: string | null,
  created_at: string,
  difficult_level: "very easy" | "easy" | "medium" | "hard" | "very hard" | null,
  task: TaskProps,
  user_receiver: UserProps,
}

export type TaskUserPageProps = {
  data: Array<TaskUserProps>,
  links: object,
  meta: object
}

export type PostTaskUserProps = {
  user_receiver_id: number,
  tasks_id: number
}

export type PutTaskUserProps = {
  done: boolean,
  difficult_level: "very easy" | "easy" | "medium" | "hard" | "very hard" | null
}

export const getAllTaskUser = async (token?: string | null, currentPage: number = 1) => {
  const currentPageQuery = queryString.stringify({ page: currentPage });
  
  const response = await api.get<TaskUserPageProps & ErrorProps>(
    `/taskuser?${currentPageQuery}`, { 
    headers: { 'Authorization': `Bearer ${token}` }
  })
    

  return response.data;
}

export const getFinishedTasks = async (token?: string | null, currentPage: number = 1) => {
  const currentPageQuery = queryString.stringify({ page: currentPage });
  const response = await api.get<TaskUserPageProps & ErrorProps>(
    `/taskuser/finished/1?${currentPageQuery}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
};

export const getUnfinishedTasks = async (token?: string | null, currentPage: number = 1) => {
  const currentPageQuery = queryString.stringify({ page: currentPage });
  const response = await api.get<TaskUserPageProps & ErrorProps>(
    `/taskuser/finished/0`, {
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
};

export const getTaskDay = async (token?: string | null) => {
  const response = await api.get<{ data: TaskUserProps[] } & ErrorProps>(
    `/taskuser/taskday/`, {
    headers: { 'Authorization': `Bearer ${token}` }
  })
  
  return response.data;
};

export const fetchTaskUserById = async (id: number, token?: string | null) => {
  const response = await api.get<{ data: TaskUserProps } & ErrorProps>(
    `/taskuser/by/${id}`, { 
    headers: { 'Authorization': `Bearer ${token}` }
  })
    
  return response.data;
}

export const searchTaskUser = async (text: string, token?: string | null, currentPage: number = 1) => {
  const currentPageQuery = queryString.stringify({ page: currentPage });

  const response = await api.get<TaskUserPageProps & ErrorProps>(
    `/taskuser/search/${text}?${currentPageQuery}`, { 
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
}

export const createTaskUser = async (data: PostTaskUserProps, token?: string | null) => {
  const response = await api.post<{ data: TaskUserProps, message: string } & ErrorProps>(
    `/taskuser`, data, { 
    headers: { 'Authorization': `Bearer ${token}` }
  })
    
  return response.data;
}

export const editTaskUserById = async (id: number, data: PutTaskUserProps, token?: string | null) => {
  const response = await api.put<TaskUserPageProps & { message: string } & ErrorProps>(
    `/taskuser/${id}`, data, { 
    headers: { 'Authorization': `Bearer ${token}` }
  })
    
  return response.data;
}

export const deleteTaskUserById = async (id: number, token: string) => {
  const response = await api.delete<{ message: string } & ErrorProps>(
    `/taskuser/${id}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
} 
