import { api } from "@/services/api";

type UserChallengeDifficultyProps = {
    difficult_level: string;
    total: number;
};

type WeeklyProps = {
    user_receiver_id: number;
    total_completed: number;
    total_incomplete: number;
    user_challenge_difficulty: UserChallengeDifficultyProps[];
    user_daily_average: number;
};

export type TotalProps = {
    user_receiver_id: number;
    total_completed: number;
    total_incomplete: number;
    user_challenge_difficulty: UserChallengeDifficultyProps[];
    user_daily_average: number;
};

export const getProfileStatistic = async (id?: number | null, token?: string | null) => {
    const response = await api.get<TotalProps>(
        `/statisticuser/mytotal/${id ? id : ''}`,
        {
            headers: { 'Authorization': `Bearer ${token}` }
        }
    );
    return response.data;
};

export const getStatisticTotal = async (id?: number | null, token?: string | null) => {
    const response = await api.get<TotalProps>(
        `/statisticuser/total/${id ? id : ''}`,
        {
            headers: { 'Authorization': `Bearer ${token}` }
        }
    );
    return response.data;
};

export const getStatisticWeekly = async (id?: number | null, token?: string | null) => {
    const response = await api.get<WeeklyProps>(
        `/statisticuser/weekly/${id ? id : ''}`, 
        {
            headers: { 'Authorization': `Bearer ${token}` }
        }
    );

    return response.data;
};
