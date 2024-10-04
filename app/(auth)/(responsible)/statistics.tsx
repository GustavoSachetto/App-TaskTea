import React, { useEffect, useState } from "react";
import { ScrollView, View, ActivityIndicator } from "react-native";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { fetchStatisticTotalById, fetchStatisticWeeklyById, TotalProps } from "@/services/api/routes/statistic";
import { useSession } from "@/hooks/ctx";
import { useLocalSearchParams, useRouter } from "expo-router";
import { TitlePage, TitleStatistics, ContainerStatistics, SquareLabel, LabelChart, Header, LinkedBack, Voltar, ContainerLabel } from "@/styles/statistics";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Statistics() {
  const router = useRouter();
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
      <Header>
        <LinkedBack onPress={() => router.push('/(auth)/(responsible)/')}>
          <Voltar source={require('@/assets/icons/voltar-verde.png')} />
        </LinkedBack>
        <TitlePage>Estatísticas</TitlePage>
      </Header>

        <TitleStatistics>Resultado da semana</TitleStatistics>
        <ContainerStatistics>
          <Pie data={weeklyData} />
          <ContainerLabel>
            <SquareLabel customColor="#46f87c" />
            <LabelChart>Tarefas Concluídas: {weeklyCompleted}</LabelChart>
          </ContainerLabel>

          <ContainerLabel>
            <SquareLabel customColor="#ff3f00" />
            <LabelChart>Tarefas Incompletas: {totalIncomplete}</LabelChart>
          </ContainerLabel>
        </ContainerStatistics>

        <TitleStatistics>Resultado geral</TitleStatistics>
        <ContainerStatistics>
          <Pie data={totalData} />
          <ContainerLabel>
            <SquareLabel customColor="#46f87c" />
            <LabelChart>Tarefas Concluídas: {totalCompleted}</LabelChart>
          </ContainerLabel>

          <ContainerLabel>
            <SquareLabel customColor="#ff3f00" />
            <LabelChart>Tarefas Incompletas: {totalIncomplete}</LabelChart>
          </ContainerLabel>

        </ContainerStatistics>
    </ScrollView>
  );
}
