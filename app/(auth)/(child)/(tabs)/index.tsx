import { ScrollViewContainer, GradientBorderBox, LinkedStartTask, TextButtonStartTask, TarefaImage, Title, TextTarefa } from '@/styles/index-child';
import Colors from '@/constants/Colors';
import HeaderIndex from '@/components/header-index';
import { useEffect, useState } from 'react';
import { useSession } from '@/hooks/ctx';
import { getUnfinishedTasks, TaskUserProps } from '@/services/api/routes/taskuser';
import { TotalProps, getMyStatisticTotal } from '@/services/api/routes/statistic';
import LevelBar from '@/components/level-bar';
import { View } from 'react-native';
import { BoxTask, Box } from '@/styles/single-task';

const ImageTarefa = require('@/assets/images/tarefa-exemplo.png');
const BlueColor = Colors.colors.blue;

export default function HomePage() {
  const [myStatisticTotal, setMyStatisticTotal] = useState<TotalProps>({
    user_receiver_id: 0,
    total_completed: 0,
    total_incomplete: 0,
    total_points: 0,
    user_challenge_difficulty: [],
    user_daily_average: 0
  });
  const [taskDay, setTaskDay] = useState<TaskUserProps[]>([]);
  const { session } = useSession();

  useEffect(() => {
    fetchMyLevel();
    fetchTaskDay();
  }, [session]);

  const fetchMyLevel = async () => {
    if (session) {
      const response = await getMyStatisticTotal(session);
      
      setMyStatisticTotal(response);
    }
  }

  const fetchTaskDay = async () => {
    if (session) {
      const response = await getUnfinishedTasks(session);
      setTaskDay(response.data);
    }
  }

  return (
    <ScrollViewContainer>
      <View style={{flex: 1}}>
      <HeaderIndex>
        <LevelBar totalPoints={myStatisticTotal.total_points} />
      </HeaderIndex>
      </View>
      <GradientBorderBox>
        <BoxTask>
        {taskDay?.length > 0 ? (
          <>
            {taskDay[0].task.image ? (
              <TarefaImage source={{ uri: taskDay[0].task.image?.toString() }} />
            ) : (
              <TarefaImage source={ImageTarefa} />
            )}
          </>
        ) : (
          <TarefaImage source={ImageTarefa}  style={{width: '100%'}}/>
        )}
        <Box>
          {taskDay?.length > 0 ? (
            <>
              <Title customColor={BlueColor}>{taskDay[0].task.title}</Title>
              <TextTarefa numberOfLines={2}>{taskDay[0].task.description}</TextTarefa>
              <LinkedStartTask href={`/single-task?id=${taskDay[0].id}`}>
                <TextButtonStartTask>Iniciar</TextButtonStartTask>
              </LinkedStartTask>
            </>
          ) : (
            <Title customColor={BlueColor} style={{marginBottom: '10%'}}>Nenhuma tarefa disponível no momento.</Title>
          )}</Box>
        </BoxTask>
      </GradientBorderBox>
    </ScrollViewContainer>
  );
}
