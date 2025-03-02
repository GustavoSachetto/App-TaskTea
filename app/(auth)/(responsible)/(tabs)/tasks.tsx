import { ScrollView, Text, Pressable, View } from 'react-native';
import { useRouter } from 'expo-router';
import {
  QuebraCabeca, ContainerTasksDoing, ScrollViewContainerTasks, TextTask,
  GradientBorderBoxTasks, ContainerRowTasks, ContainerAllTasks, TextDoing, Task,
  BoxTasks, Title, Description,
  AddTask,
  TextAddTask
} from '@/styles/tasks';
import { useEffect, useState } from 'react';
import { useSession } from '@/hooks/ctx';
import { getUnfinishedTasks, TaskUserProps } from '@/services/api/routes/taskuser';

const ImageQuebraCabeca = require('@/assets/icons/quebra-cabeca-tasks.png');
const ImageAdicionarDesafio = require('@/assets/icons/botao-criar-amarelo.png');
const ImageEnviarDesafio = require('@/assets//icons/icon_aviao.png')

export default function TasksPage() {
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
    <ScrollView style={{ backgroundColor: '#fff' , zIndex: 1 }}>
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
                  onPress={() => router.push({
                    pathname: "/single-task",
                    params: { 
                      id: `${taskUser.id}`, 
                      returnTo: "(tabs)/tasks" 
                    }
                  })}
                >
                  <Task style={{ flex: 1, alignSelf: 'stretch' }}>
                    <Title>{taskUser.task.title}</Title>
                    <Description>{taskUser.task.description}</Description>
                  </Task>
                </Pressable>
              )) : (
                <Text>Sem nenhuma tarefa em andamento.</Text>
              )}
            </ScrollViewContainerTasks>
          </BoxTasks>
        </GradientBorderBoxTasks>

        <View style={{ paddingBottom: 15, flexDirection: 'row', justifyContent:'space-between', width:'75%'}}>
          <View >
            <Pressable onPress={() => router.push('/(auth)/(responsible)/create-task')}>
              <AddTask source={ImageAdicionarDesafio} resizeMode="contain" />
            </Pressable>
            <TextAddTask>Criar novo {"\n"}desafio!</TextAddTask>
          </View>
          <View>
            <Pressable onPress={() => router.push('/(auth)/(responsible)/send-task')}> 
              <AddTask source={ImageEnviarDesafio} resizeMode="contain" />
            </Pressable>
            <TextAddTask>Enviar desafio{"\n"}existente!</TextAddTask>
          </View>
        </View>
      </ContainerAllTasks>
    </ScrollView>

  )
}
