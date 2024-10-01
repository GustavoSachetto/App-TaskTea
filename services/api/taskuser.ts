import { api } from "@/services/api";

type TaskProps = {
  id: number;
  title: string;
  description: string;
  tip: string;
  level: string;
  categories_id: number;
  user_creator_id: number;
  created_at: string;
  updated_at: string;
};

type UserProps = {
  id: number;
  name: string;
  email: string;
  image: string;
  nickname: string;
  age: number;
  cpf?: string;
  role?: Array<string>;
  phone_number?: string;
  created_at: string;
  updated_at: string;
};

export type TaskUserProps = {
  id: number;
  done: boolean;
  difficult_level?: string | null;
  task: TaskProps;
  user_receiver: UserProps;
  created_at: string;
  updated_at: string;
};

export const getUnfinishedTasks = async (token?: string | null) => {
  const response = await api.get<{ data: TaskUserProps[] }>(
    `/taskuser/unfinishedtasks/`, {
      headers: { 'Authorization': `Bearer ${token}` }
    }
  );

  return response.data.data;
};
