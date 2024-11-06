import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { fetchStatisticTotalById, fetchStatisticWeeklyById, TotalProps, WeeklyProps } from "@/services/api/routes/statistic";
import { useSession } from "@/hooks/ctx";
import { useLocalSearchParams, useRouter } from "expo-router";
import { TitlePage, TitleStatistics, ContainerStatistics, SquareLabel, LabelChart, Header, LinkedBack, Voltar, ContainerLabel } from "@/styles/statistics";
import { PieChart } from "react-native-chart-kit";
import { h, w } from '@/utils/responsiveMesures';

export default function Statistics() {
  const router = useRouter();
  const { session } = useSession();
  const { userId } = useLocalSearchParams();
  const [getTotalStatistics, setGetTotalStatistics] = useState<TotalProps | undefined>(undefined);
  const [getWeeklyStatistics, setGetWeeklyStatistics] = useState<WeeklyProps | undefined>(undefined);

  useEffect(() => {
    fetchTotalTasks();
    fetchWeeklyTasks();
  }, [session, userId]);

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false
  };

  const weeklyCompleted = Number(getWeeklyStatistics?.total_completed) || 0;
  const weeklyIncomplete = Number(getWeeklyStatistics?.total_incomplete) || 0;

  const weeklyData = [
    {
      name: "Tarefas Concluídas",
      data: weeklyCompleted,
      color: "#46f87c",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Tarefas Incompletas",
      data: weeklyIncomplete,
      color: "#ff3f00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];

  const fetchTotalTasks = async () => {
    if (session && userId) {
      const userNumId: number = typeof (userId) === "string" ? await parseInt(userId) : 1;
      const response = await fetchStatisticTotalById(userNumId, session);

      setGetTotalStatistics(response);
    }
  }

  const fetchWeeklyTasks = async () => {
    if (session && userId) {
      const userNumId: number = typeof (userId) === "string" ? await parseInt(userId) : 1;
      const response = await fetchStatisticWeeklyById(userNumId, session);

      setGetWeeklyStatistics(response);
    }
  }

  const totalCompleted = Number(getTotalStatistics?.total_completed) || 0;
  const totalIncomplete = Number(getTotalStatistics?.total_incomplete) || 0;

  const totalData = [
    {
      name: "Tarefas Concluídas",
      data: totalCompleted,
      color: "#46f87c",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Tarefas Incompletas",
      data: totalIncomplete,
      color: "#ff3f00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];

  return (
    <ScrollView style={{backgroundColor: '#fff'}} >
      <Header>
        <LinkedBack onPress={() => router.push('/(auth)/(responsible)/')}>
          <Voltar source={require('@/assets/icons/voltar-verde.png')} />
        </LinkedBack>
        <TitlePage>Estatísticas</TitlePage>
      </Header>

      <TitleStatistics>Resultado da semana</TitleStatistics>
      <ContainerStatistics>
        <PieChart
          data={weeklyData}
          width={w(70)}
          height={w(70)}
          chartConfig={chartConfig}
          accessor={"data"}
          backgroundColor={"#fff"}
          paddingLeft={w(17)}
          style={{ alignSelf: 'center' }}
          absolute
          hasLegend={false}
        />
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
        <PieChart
          data={totalData}
          width={w(70)}
          height={w(70)}
          chartConfig={chartConfig}
          accessor={"data"}
          backgroundColor={"#fff"}
          paddingLeft={w(17)}
          style={{ alignSelf: 'center' }}
          absolute
          hasLegend={false}
        />
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
  )
}
