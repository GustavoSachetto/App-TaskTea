import { ScrollView, Text, TouchableOpacity, Pressable, View } from 'react-native';
import { useRouter } from 'expo-router';
import {
  ContainerTasksDoing, ScrollViewContainerTasks, TextTask,
  GradientBorderBoxTasks, ContainerRowTasks, ContainerAllTasks, TextDoing, Task,
  BoxTasks, Title, Description, Voltar, LinkedSign
} from '@/styles/template-tasks';
import { useEffect, useState } from 'react';
import { useSession } from '@/hooks/ctx';
import { getUnfinishedTasks, TaskUserProps } from '@/services/api/routes/taskuser';

const ImageVoltar = require('@/assets/icons/voltarAmarelo.png');

export default function TemplateTasks() {
  const [taskUser, setTaskUser] = useState<TaskUserProps[]>([]);
  const { session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const fetchTaskUser = async () => {
      if (session) {
        const response = await getUnfinishedTasks(session);
        setTaskUser(response.data);
      }
    }

    fetchTaskUser();
  }, [session]);

  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <ContainerAllTasks>
        <ContainerRowTasks>
            <LinkedSign onPress={() => router.back()}>
                <Voltar source={ImageVoltar} resizeMode="contain" />
            </LinkedSign>
            <TextTask>Templates</TextTask>
        </ContainerRowTasks>

        <ContainerTasksDoing>
          <TextDoing>Desafios prontos</TextDoing>
        </ContainerTasksDoing>

        <GradientBorderBoxTasks>
          <BoxTasks>
            <ScrollViewContainerTasks showsVerticalScrollIndicator={false}>
              {taskUser?.length > 0 ? taskUser.map((taskUser: TaskUserProps) => (
                <TouchableOpacity
                  key={taskUser.id}
                  style={{ width: '100%' }}
                  onPress={() => router.push({ pathname: "/single-task", params: { id: `${taskUser.id}` } })}
                >
                  <Task style={{ flex: 1, alignSelf: 'stretch' }}>
                    <Title>{taskUser.task.title}</Title>
                    <Description>{taskUser.task.description}</Description>
                  </Task>
                </TouchableOpacity>
              )) : (
                <Text>Sem nenhuma tarefa em andamento.</Text>
              )}
            </ScrollViewContainerTasks>
          </BoxTasks>
        </GradientBorderBoxTasks>
      </ContainerAllTasks>
    </ScrollView>

  )
}
