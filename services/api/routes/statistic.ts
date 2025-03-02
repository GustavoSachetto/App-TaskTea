import { ErrorProps, api } from "@/services/api/api";

export type UserChallengeDifficultyProps = {
  difficult_level: string,
  total: number
}

export type WeeklyProps = {
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
  total_points: number,
  user_challenge_difficulty: UserChallengeDifficultyProps[],
  user_daily_average: number
}

export const getMyStatisticTotal = async (token: string) => {
  const response = await api.get<TotalProps & ErrorProps>(
    `/statisticuser/mytotal`, { 
    headers: { 'Authorization': `Bearer ${token}` }
  })
    
  return response.data;
}

export const getMyStatisticWeekly = async (token: string) => {
  const response = await api.get<WeeklyProps & ErrorProps>(
    `/statisticuser/myweekly`, { 
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
}

export const fetchStatisticTotalById = async (id: number, token: string) => {
  const response = await api.get<TotalProps & ErrorProps>(
    `/statisticuser/total/${id}`, { 
    headers: { 'Authorization': `Bearer ${token}` }
  })
    
  return response.data;
}

export const fetchStatisticWeeklyById = async (id: number, token: string) => {
  const response = await api.get<WeeklyProps & ErrorProps>(
    `/statisticuser/weekly/${id}`, { 
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
}
