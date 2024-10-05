import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import {
  QuebraCabeca, ContainerTasksDoing, ScrollViewContainerTasks, TextTask,
  GradientBorderBoxTasksResponsible, ContainerRowTasks, ContainerTasksResponsible, TextDoing, Task,
  BoxTasks, Title, Description, AddTask, TextAddTask, Button
} from '@/styles/tasks';
import { useEffect, useState } from 'react';
import { useSession } from '@/hooks/ctx';
import { getUnfinishedTasks, TaskUserProps } from '@/services/api/routes/taskuser';

const ImageQuebraCabeca = require('@/assets/icons/quebra-cabeca-tasks.png');
const ImageAdicionarDesafio = require('@/assets/icons/botao-criar-amarelo.png');

export default function TasksPage() {
  const [taskUser, setTaskUser] = useState<TaskUserProps[]>([]);
  const { session } = useSession(); 
  const router = useRouter();
  
  useEffect(() => {

    fetchTaskUser();
  }, [session])

  const fetchTaskUser = async () => {
    if (session) {
      const response = await getUnfinishedTasks(session);
      setTaskUser(response.data); 
    }
  }

  return (
    <ContainerTasksResponsible>
      <ContainerRowTasks>
        <QuebraCabeca source={ImageQuebraCabeca} resizeMode="contain" />
        <TextTask>Desafios</TextTask>
      </ContainerRowTasks>

      <ContainerTasksDoing>
        <TextDoing>Em andamento</TextDoing>
      </ContainerTasksDoing>

      <GradientBorderBoxTasksResponsible>
        <BoxTasks>
          <ScrollViewContainerTasks showsVerticalScrollIndicator={false}>
            {taskUser.map((task: TaskUserProps) => (
              <TouchableOpacity 
                key={task.id} 
                style={{ width: '100%' }} 
                onPress={() => router.push('/(auth)/(child)/single-task')}>
                <Task style={{ flex: 1, alignSelf: 'stretch' }}>
                  <Title>{task.task.title}</Title>
                  <Description>{task.task.description}</Description>
                </Task>
              </TouchableOpacity>
            ))}
          </ScrollViewContainerTasks>
        </BoxTasks>
      </GradientBorderBoxTasksResponsible>

      <Button onPress={() => router.push('/(auth)/(responsible)/create-task')}>
        <AddTask source={ImageAdicionarDesafio} resizeMode="contain" />
      </Button>
      <TextAddTask>Criar novo <br></br>desafio!</TextAddTask>
    </ContainerTasksResponsible>
  )
}