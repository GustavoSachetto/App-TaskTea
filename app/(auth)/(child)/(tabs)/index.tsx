import { ScrollViewContainer, Box, GradientBorderBox, LinkedStartTask, TextButtonStartTask, TarefaImage, Title, TextTarefa } from '@/styles/index-child';
import Colors from '@/constants/Colors';
import HeaderIndex from '@/components/header-index';
import { useEffect, useState } from 'react';
import { useSession } from '@/hooks/ctx';
import { getUnfinishedTasks, TaskUserProps } from '@/services/api/routes/taskuser';

const ImageTarefa = require('@/assets/images/tarefa-exemplo.png');
const BlueColor = Colors.colors.blue;

export default function HomePage() {
  const [taskDay, setTaskDay] = useState<TaskUserProps[]>([]);
  const { session } = useSession();

  useEffect(() => {
    fetchTaskDay();
  }, [session]);

  const fetchTaskDay = async () => {
    if (session) {
      const response = await getUnfinishedTasks(session);
      setTaskDay(response.data);
    }
  }

  return (
    <ScrollViewContainer>
      <HeaderIndex />
      <GradientBorderBox>
        {taskDay?.length > 0 ? (
          <>
            {taskDay[0].task.image ? (
              <TarefaImage source={{ uri: taskDay[0].task.image?.toString() }} />
            ) : (
              <TarefaImage source={ImageTarefa} />
            )}
          </>
        ) : (
          <TarefaImage source={ImageTarefa} />
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
            <Title customColor={BlueColor}>Nenhuma tarefa disponível no momento.</Title>
          )}
        </Box>
      </GradientBorderBox>
    </ScrollViewContainer>
  );
}
