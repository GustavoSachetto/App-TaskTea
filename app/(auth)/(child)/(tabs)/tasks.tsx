import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import {
  QuebraCabeca, ContainerTasksDoing, ScrollViewContainerTasks, TextTask,
  GradientBorderBoxTasks, ContainerRowTasks, ContainerAllTasks, TextDoing, Task,
  BoxTasks, Title, Description, Clips
} from '@/styles/tasks';
import { useEffect, useState } from 'react';
import { useSession } from '@/hooks/ctx';
import { getUnfinishedTasks, TaskUserProps } from '@/services/api/taskuser';

const ImageClips = require('@/assets/icons/clips.png');
const ImageQuebraCabeca = require('@/assets/icons/quebra-cabeca-tasks.png');

export default function TasksPage() {
  const [taskUser, setTaskUser] = useState<TaskUserProps[]>([]);
  const { session } = useSession(); 
  const router = useRouter();

  useEffect(() => {
    const fetchTaskUser = async () => {
      if (session) {
        const response = await getUnfinishedTasks(session);
        setTaskUser(response); 
      }
    };

    fetchTaskUser();
  }, [session]); 

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
          <ScrollViewContainerTasks showsVerticalScrollIndicator={false}>
            {taskUser.map((task: TaskUserProps) => (
              <TouchableOpacity 
                key={task.id} 
                style={{ width: '100%' }} 
                onPress={() => router.push('/(auth)/(child)/single-task')}>
                <Task style={{ flex: 1, alignSelf: 'stretch' }}>
                  <Clips source={ImageClips} resizeMode="contain" />
                  <Title>{task.task.title}</Title>
                  <Description>{task.task.description}</Description>
                </Task>
              </TouchableOpacity>
            ))}
          </ScrollViewContainerTasks>
        </BoxTasks>
      </GradientBorderBoxTasks>
    </ContainerAllTasks>
  );
}
