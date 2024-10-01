import { api } from "@/services/api/api";

type UserChallengeDifficultyProps = {
  difficult_level: string,
  total: number
}

type WeeklyProps = {
  user_receiver_id: number,
  total_completed: number,
  total_incomplete: number,
  user_challenge_difficulty: UserChallengeDifficultyProps[],
  user_daily_average: number
}

export type TotalProps = {
  user_receiver_id: number,
  total_completed: number,
  total_incomplete: number,
  user_challenge_difficulty: UserChallengeDifficultyProps[],
  user_daily_average: number
}

export const getProfileStatistic = async (id?: number | null, token?: string | null) => {
  const response = await api.get<TotalProps>(
      `/statisticuser/mytotal/${id ? id : ''}`,
      {
          headers: { 'Authorization': `Bearer ${token}` }
      }
  );
  return response.data;
};

export const getMyStatisticTotalById = async (token: string) => {
  const response = await api.get<TotalProps>(
    `/statisticuser/mytotal`, { 
    headers: { 'Authorization': `Bearer ${token}` }
  })
    
  return response.data;
}

export const getMyStatisticWeeklyById = async (token: string) => {
  const response = await api.get<WeeklyProps>(
    `/statisticuser/myweekly`, { 
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
}

export const fetchStatisticTotalById = async (id: number, token: string) => {
  const response = await api.get<TotalProps>(
    `/statisticuser/total/${id}`, { 
    headers: { 'Authorization': `Bearer ${token}` }
  })
    
  return response.data;
}

export const fetchStatisticWeeklyById = async (id: number, token: string) => {
  const response = await api.get<WeeklyProps>(
    `/statisticuser/weekly/${id}`, { 
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
}
