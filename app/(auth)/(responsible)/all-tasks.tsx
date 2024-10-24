import { TouchableOpacity, Text  } from 'react-native';
import { useRouter } from 'expo-router';
import { ContainerTasksDoing, ScrollViewContainerTasks, TextTask,
  GradientBorderBoxTasks, ContainerAllTasks, Task,
  BoxTasks, Title, Description
} from '@/styles/tasks';
import { LinkedSign, Voltar, ContainerRowTasks, ContainerColumn } from '@/styles/finished-tasks';
import { getAllTaskUser } from '@/services/api/routes/taskuser';
import Colors from '@/constants/Colors';
import { useEffect, useState } from 'react';
import { TaskUserPageProps, TaskUserProps } from '@/services/api/routes/taskuser';
import { useSession } from '@/hooks/ctx';
import { h, w } from '@/utils/responsiveMesures';
import { getFontSize } from '@/utils/fontSize';

const ImageVoltar = require('@/assets/icons/voltar.png');
const blue = Colors.colors.blue;

export default function TasksPage() {
  const router = useRouter();
  const { session } = useSession();
  const [taskUser, setTaskUser] = useState<TaskUserPageProps>({
    data: [],
    links: {},
    meta: {}
  });

  useEffect(() => {
    const fetchTaskUser = async () => {
      if (session) {
        const response = await getAllTaskUser(session);
        setTaskUser(response); 
      }
    };

    fetchTaskUser();
  }, [session]);

  return (
    <ContainerAllTasks>
      <ContainerRowTasks>
        <LinkedSign onPress={() => {router.push('/(auth)/(responsible)/(tabs)/settings')}} >
          <Voltar source={ImageVoltar} resizeMode="contain" />
        </LinkedSign>
        <ContainerColumn>
          <TextTask customColor={blue} customFontSize={getFontSize(16)}>Todos os desafios</TextTask>
        </ContainerColumn>
      </ContainerRowTasks>

      <ContainerTasksDoing customColor={blue}></ContainerTasksDoing>

      <GradientBorderBoxTasks customColor={blue} customHeight={h(75)}>
        <BoxTasks>
          <ScrollViewContainerTasks showsVerticalScrollIndicator={false} >
            {taskUser.data.length > 0 ? (
              taskUser.data.map((taskUser: TaskUserProps) => (
                <TouchableOpacity
                  key={taskUser.id}
                  style={{ width: '100%' }}
                  onPress={() => router.push({ pathname: "/single-task", params: { id: `${taskUser.id}` } })}
                >
                  <Task style={{ flex: 1, alignSelf: 'stretch' }} customColor={blue}>
                    <Title>{taskUser.task.title}</Title>
                    <Description>{taskUser.task.description}</Description>
                  </Task>
                </TouchableOpacity>
              ))
            ) : (
              <Text>Sem nenhuma tarefa em andamento.</Text>
            )}
          </ScrollViewContainerTasks>
        </BoxTasks>
      </GradientBorderBoxTasks>
    </ContainerAllTasks>
  );
}
