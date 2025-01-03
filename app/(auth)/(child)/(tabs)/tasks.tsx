import { Pressable, Text} from 'react-native';
import { useRouter } from 'expo-router';
import {
  QuebraCabeca, ContainerTasksDoing, ScrollViewContainerTasks, TextTask,
  GradientBorderBoxTasks, ContainerRowTasks, ContainerAllTasks, TextDoing, Task,
  BoxTasks, Title, Description
} from '@/styles/tasks';
import { useEffect, useState } from 'react';
import { useSession } from '@/hooks/ctx';
import { getUnfinishedTasks, TaskUserProps } from '@/services/api/routes/taskuser';

const ImageQuebraCabeca = require('@/assets/icons/quebra-cabeca-tasks.png');

export default function TasksPage() {
  const [taskUser, setTaskUser] = useState<TaskUserProps[]>([]);
  const { session } = useSession(); 
  const router = useRouter();

  useEffect(() => {
    fetchTaskUser();
  }, [session]); 

  const fetchTaskUser = async () => {
    if (session) {
      const response = await getUnfinishedTasks(session);
      setTaskUser(response.data); 
    }
  }

  return (
    <ContainerAllTasks>
      <ContainerRowTasks>
        <QuebraCabeca source={ImageQuebraCabeca} resizeMode="contain" />
        <TextTask>Desafios</TextTask>
      </ContainerRowTasks>

      <ContainerTasksDoing>
        <TextDoing>Em andamento</TextDoing>
      </ContainerTasksDoing>

      <GradientBorderBoxTasks>
        <BoxTasks>
          <ScrollViewContainerTasks showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
            {taskUser?.length > 0 ? taskUser.map((taskUser: TaskUserProps) => (
              <Pressable 
                key={taskUser.id} 
                style={{ width: '100%' }} 
                onPress={() => router.push({ pathname: "/single-task", params: { id: `${taskUser.id}`, returnTo: 'tasks' } })}
              >
                <Task style={{ flex: 1, alignSelf: 'stretch' }}>
                  <Title>{taskUser.task.title}</Title>
                  <Description>{taskUser.task.description}</Description>
                </Task>
              </Pressable>
            )):(
              <Text>Sem nenhuma tarefa em andamento.</Text>
            )}
          </ScrollViewContainerTasks>
        </BoxTasks>
      </GradientBorderBoxTasks>
    </ContainerAllTasks>
  )
}
