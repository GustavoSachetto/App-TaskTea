import React, { useEffect, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { fetchStatisticTotalById, fetchStatisticWeeklyById, TotalProps } from "@/services/api/routes/statistic";
import { useSession } from "@/hooks/ctx";
import { useLocalSearchParams } from "expo-router"; 
import { Title } from "@/styles";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Statistics() {
  const { userId } = useLocalSearchParams(); 
  const [getTotalStatistics, setGetTotalStatistics] = useState<TotalProps | undefined>(undefined);
  const [getWeeklyStatistics, setGetWeeklyStatistics] = useState<TotalProps | undefined>(undefined);
  const { session } = useSession(); 

  useEffect(() => {
    const fetchWeeklyTasks = async () => {
      if (session && userId) {
        const response = await fetchStatisticWeeklyById(userId, session);
        setGetWeeklyStatistics(response); 
      } 
    };

    fetchWeeklyTasks();
  }, [session, userId]); 

  const weeklyCompleted = Number(getWeeklyStatistics?.total_completed) || 0;
  const weeklyIncomplete = Number(getWeeklyStatistics?.total_incomplete) || 0;

  const weeklyData = {
    labels: ["Tarefas concluídas = " + weeklyCompleted, "Tarefas não concluídas = " + weeklyIncomplete ],
    datasets: [
      {
        data: [weeklyCompleted, weeklyIncomplete],
        backgroundColor: ["#46f87c", "#ff3f00"],
        hoverBackgroundColor: ["#7dffa5", "#ff875f"],
      },
    ],
  };

  useEffect(() => {
    const fetchTotalTasks = async () => {
      if (session && userId) {
        const response = await fetchStatisticTotalById(userId, session);
        setGetTotalStatistics(response); 
      } 
    };

    fetchTotalTasks();
  }, [session, userId]); 

  const totalCompleted = Number(getTotalStatistics?.total_completed) || 0;
  const totalIncomplete = Number(getTotalStatistics?.total_incomplete) || 0;

  const totalData = {
    labels: ["Tarefas concluídas = " + totalCompleted , "Tarefas não concluídas = " + totalIncomplete ],
    datasets: [
      {
        data: [totalCompleted, totalIncomplete],
        backgroundColor: ["#46f87c", "#ff3f00"],
        hoverBackgroundColor: ["#7dffa5", "#ff875f"],
      },
    ],
  };

  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <Text style={{ textAlign: "center", fontSize: 20 }}>Estatísticas</Text>
        <Title>Resultado da semana</Title>
        {getTotalStatistics ? (    
          <Pie data={weeklyData} />
        ) : (
          <Text>Carregando...</Text>
        )}
        <Title>Resultado geral</Title>
        {getTotalStatistics ? (
          <Pie data={totalData} />
        ) : (
          <Text>Carregando...</Text>
        )}
      </View>
    </ScrollView>
  );
}
