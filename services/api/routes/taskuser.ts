import { api } from "@/services/api/api";
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

type TaskUserPageProps = {
  data: Array<TaskUserProps>,
  links: object,
  meta: object
}

type PostAttachTask = {
  user_receiver_id: number,
  tasks_id: number
}

export const getAllTaskUser = async (token: string, currentPage: number = 1) => {
  const currentPageQuery = queryString.stringify({ page: currentPage });
  
  const response = await api.get<TaskUserPageProps>(
    `/taskuser?${currentPageQuery}`, { 
    headers: { 'Authorization': `Bearer ${token}` }
  })
    
  return response.data;
}

export const fetchTaskUserById = async (id: number, token?: string | null) => {
  const response = await api.get<{ data: TaskUserProps }>(
    `/taskuser/by/${id}`, { 
    headers: { 'Authorization': `Bearer ${token}` }
  })
    
  return response.data;
}

export const searchTaskUser = async (text: string, token: string, currentPage: number = 1) => {
  const currentPageQuery = queryString.stringify({ page: currentPage });

  const response = await api.get<TaskUserPageProps>(
    `/taskuser/search/${text}?${currentPageQuery}`, { 
    headers: { 'Authorization': `Bearer ${token}` }
  })
    
  return response.data;
}

export const childFinishTask = async (taskId: number, token?: string | null) => {
  const response = await api.get<TaskUserPageProps>(
    `/taskuser/donetask/${taskId}`, { 
    headers: { 'Authorization': `Bearer ${token}` }
  })
    
  return response.data;
}

export const responsibleAttachTask = async (data: PostAttachTask, token: string) => {
  const response = await api.post<{ data: TaskUserProps }>(
    `/taskuser`, data, { 
    headers: { 'Authorization': `Bearer ${token}` }
  })
    
  return response.data;
}

export const getUnfinishedTasks = async (token?: string | null) => {
  const response = await api.get<{ data: TaskUserProps[] }>(
    `/taskuser/unfinishedtasks/`, {
      headers: { 'Authorization': `Bearer ${token}` }
    }
  );

  return response.data.data;
};

export const getTaskDay = async (token?: string | null) => {
    const response = await api.get<{ data: TaskUserProps[] }>(
      `/taskuser/taskday/`, {
        headers: { 'Authorization': `Bearer ${token}` }
      }
    );
  
    return response.data.data;
  };