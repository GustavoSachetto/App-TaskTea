import { ScrollView, Text, TouchableOpacity, Pressable, View } from 'react-native';
import { useRouter } from 'expo-router';
import {
  ContainerTasksDoing, ScrollViewContainerTasks, TextTask,
  GradientBorderBoxTasks, ContainerRowTasks, ContainerAllTasks, TextDoing, Task,
  BoxTasks, Title, Description, Voltar, LinkedSign
} from '@/styles/template-tasks';
import { useEffect, useState } from 'react';
import { useSession } from '@/hooks/ctx';
import { TaskPageProps, TaskProps } from '@/services/api/routes/tasks';
import { getTemplates } from '@/services/api/routes/tasks';

const ImageVoltar = require('@/assets/icons/voltarAmarelo.png');

export default function TemplateTasks() {
  const [task, setTask] = useState<TaskPageProps>();
  const { session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const fetchTask = async () => {
      if (session) {
        const response = await getTemplates(session);
        setTask(response);
      }
    }

    fetchTask();
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
              {task && task.data.length > 0 ? (
                task.data.map((taskItem: TaskProps) => (
                  <TouchableOpacity
                    key={taskItem.id}
                    style={{ width: '100%' }}
                    onPress={() => router.push({ pathname: "template-single", params: { id: `${taskItem.id}` } })}
                  >
                    <Task style={{ flex: 1, alignSelf: 'stretch' }}>
                      <Title>{taskItem.title}</Title>
                      <Description>{taskItem.description}</Description>
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
    </ScrollView>

  )
}
