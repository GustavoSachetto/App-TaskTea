import { TouchableOpacity  } from 'react-native';
import { useRouter } from 'expo-router';
import {
  QuebraCabeca, ContainerTasksDoing, ScrollViewContainerTasks, TextTask,
  GradientBorderBoxTasks, ContainerAllTasks, TextDoing, Task,
  BoxTasks, Title, Description
} from '@/styles/tasks';
import { LinkedSign, Voltar, ContainerRowTasks } from '@/styles/finished-tasks';
import { getFinishedTasks } from '@/services/api/routes/taskuser';
import Colors from '@/constants/Colors';
import { ReactNode, useEffect, useState } from 'react';
import { TaskUserPageProps } from '@/services/api/routes/taskuser';
import { useSession } from '@/hooks/ctx';

const ImageVoltar = require('@/assets/icons/voltar-verde.png');
const ImageQuebraCabeca = require('@/assets/icons/quebra-cabeca-tasks.png');
const green  = Colors.colors.green;

export default function TasksPage() {
  const router = useRouter();
  const { session } = useSession();
  const [taskUser, setTaskUser] = useState<TaskUserPageProps>({
    data: [],
    links: {},
    meta: {}
  })

  useEffect(() => {
    setMyTasks();
  }, [])

  const setMyTasks = async () => {
    if (session) {
      const response = await getFinishedTasks(session);
      setTaskUser(response); 
    }
  }

  const getFinishedTaskUsers: () => ReactNode = () => {
    return taskUser.data.length > 0 ? taskUser.data.map((taskUser) =>  
      <TouchableOpacity 
        style={{ width: '100%' }} 
        onPress={() => router.push({ pathname: "/single-task", params: { id: `${taskUser.id}` } })}
        key={taskUser.id}
      >
        <Task customColor={green} style={{ flex: 1, alignSelf: 'stretch' }} >
          <Title>{taskUser.task.title}</Title>
          <Description>{taskUser.task.description}</Description>
        </Task>
      </TouchableOpacity>
    ) : (
      <span>Sem tarefas</span>
    )
  }

  return (
    <ContainerAllTasks>
      <ContainerRowTasks>
        <LinkedSign onPress={() => router.back()}>
            <Voltar source={ImageVoltar} resizeMode="contain" />
        </LinkedSign>

        <QuebraCabeca source={ImageQuebraCabeca} resizeMode="contain" />
        <TextTask customColor={green}>Desafios Realizados</TextTask>
      </ContainerRowTasks>

      <ContainerTasksDoing customColor={green}>
        <TextDoing>Feitos</TextDoing>
      </ContainerTasksDoing>

      <GradientBorderBoxTasks customColor={green}>
        <BoxTasks>
          <ScrollViewContainerTasks showsVerticalScrollIndicator={false}>
            { getFinishedTaskUsers() }
          </ScrollViewContainerTasks>
        </BoxTasks>
      </GradientBorderBoxTasks>
    </ContainerAllTasks>
  )
}