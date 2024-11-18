import { ScrollView, Text, Pressable, View, TextInput } from 'react-native';
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
import { InputSearch, SectionSearch } from '@/styles/all-tasks';

const ImageQuebraCabeca = require('@/assets/icons/quebra-cabeca-tasks.png');
const ImageAdicionarDesafio = require('@/assets/icons/botao-criar-amarelo.png');
const ImageEnviarDesafio = require('@/assets//icons/icon_aviao.png')

export default function TasksPage() {
  const [taskUser, setTaskUser] = useState<TaskUserProps[]>([]); 
  const [filteredTasks, setFilteredTasks] = useState<TaskUserProps[]>([]); 
  const [searchQuery, setSearchQuery] = useState<string>(''); 
  const { session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const fetchTaskUser = async () => {
      if (session) {
        const response = await getUnfinishedTasks(session);
        setTaskUser(response.data);
        setFilteredTasks(response.data);
    }; 
  }
    fetchTaskUser();
  }, [session]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = taskUser.filter(task =>
      task.task.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTasks(filtered);
  };

  return (
    <ScrollView style={{ backgroundColor: '#fff', zIndex: 1 }}>
      <ContainerAllTasks>
        <ContainerRowTasks>
          <QuebraCabeca source={ImageQuebraCabeca} resizeMode="contain" />
          <TextTask>Desafios</TextTask>
        </ContainerRowTasks>

        <SectionSearch>
          <InputSearch
          customColor= {'#ffca00'}
            placeholder="Buscar Tarefa"
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </SectionSearch>

        <ContainerTasksDoing>
          <TextDoing>Em andamento</TextDoing>
        </ContainerTasksDoing>

        <GradientBorderBoxTasks>
          <BoxTasks>
            <ScrollViewContainerTasks showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
              {filteredTasks?.length > 0 ? (
                filteredTasks.reverse().map((taskUser: TaskUserProps) => (
                  <Pressable
                    key={taskUser.id}
                    style={{ width: '100%' }}
                    onPress={() => router.push({ pathname: "/single-task", params: { id: `${taskUser.id}` } })}
                  >
                    <Task style={{ flex: 1, alignSelf: 'stretch' }}>
                      <Title>{taskUser.task.title}</Title>
                      <Description>{taskUser.task.description}</Description>
                    </Task>
                  </Pressable>
                ))
              ) : (
                <Text>Sem nenhuma tarefa em andamento.</Text>
              )}
            </ScrollViewContainerTasks>
          </BoxTasks>
        </GradientBorderBoxTasks>

        <View style={{ paddingBottom: 15, flexDirection: 'row', justifyContent: 'space-between', width: '75%' }}>
          <View>
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
  );
}
