import { TouchableOpacity, Text, TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';
import {
  ContainerTasksDoing, ScrollViewContainerTasks, TextTask,
  GradientBorderBoxTasks, ContainerAllTasks, TextDoing, Task,
  BoxTasks, Title, Description
} from '@/styles/tasks';
import { LinkedSign, Voltar, ContainerRowTasks, ContainerColumn } from '@/styles/finished-tasks';
import { getFinishedTasks } from '@/services/api/routes/taskuser';
import Colors from '@/constants/Colors';
import { ReactNode, useEffect, useState } from 'react';
import { TaskUserPageProps } from '@/services/api/routes/taskuser';
import { useSession } from '@/hooks/ctx';
import { router } from 'expo-router';
import { InputSearch, SectionSearch } from '@/styles/all-tasks';

const ImageVoltar = require('@/assets/icons/voltar-verde.png');
const green = Colors.colors.green;

export default function TasksPage() {
  const router = useRouter();
  const { session } = useSession();
  const [taskUser, setTaskUser] = useState<TaskUserPageProps>({
    data: [],
    links: {},
    meta: {}
  });
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    setMyTasks();
  }, []);

  const setMyTasks = async () => {
    if (session) {
      const response = await getFinishedTasks(session);
      setTaskUser(response);
    }
  };

  const getFinishedTaskUsers: () => ReactNode = () => {
    const filteredTasks = taskUser.data?.filter((taskUser) =>
      taskUser.task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filteredTasks?.length > 0 ? filteredTasks.reverse().map((taskUser) =>
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
      <Text>Sem tarefas</Text>
    );
  };

  return (
    <ContainerAllTasks>
      <ContainerRowTasks>
        <LinkedSign onPress={() => { router.push('/(auth)/(child)/(tabs)/settings') }} >
          <Voltar source={ImageVoltar} resizeMode="contain" />
        </LinkedSign>
        <ContainerColumn>
          <TextTask customColor={green}>Desafios feitos</TextTask>
        </ContainerColumn>
      </ContainerRowTasks>

      <SectionSearch>
        <InputSearch
          placeholder="Buscar Tarefa"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </SectionSearch>

      <ContainerTasksDoing customColor={green}>
        <TextDoing>Feitos</TextDoing>
      </ContainerTasksDoing>

      <GradientBorderBoxTasks customColor={green}>
        <BoxTasks>
          <ScrollViewContainerTasks showsVerticalScrollIndicator={false}>
            {getFinishedTaskUsers()}
          </ScrollViewContainerTasks>
        </BoxTasks>
      </GradientBorderBoxTasks>
    </ContainerAllTasks>
  );
}
