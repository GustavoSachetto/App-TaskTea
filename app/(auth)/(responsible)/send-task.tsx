import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { TextButton } from "@/styles/index";
import {
  Container, GradientBorderBoxTasks, Voltar,
  ButtonCreate, Label, ContainerTasks
} from "@/styles/create-task";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { getFontSize } from '@/utils/fontSize';
import { useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import { useSession } from '@/hooks/ctx';
import { getMyTasks, saveImageTask, TaskPageProps, TaskProps } from '@/services/api/routes/tasks';
import { createTaskUser } from '@/services/api/routes/taskuser';
import { getMyRelationships, UserRelationshipProps } from '@/services/api/routes/user';
import Toast from 'react-native-toast-message';
import { Description, Task, Title } from '@/styles/tasks';

const ImageVoltar = require('@/assets/icons/voltarAmarelo.png');

export default function CreateTask() {
  const [myrelationship, setMyRelationship] = useState<UserRelationshipProps[]>([]);
  const [selectedRelationship, setSelectedRelationship] = useState<string>('');
  const [task, setTask] = useState<TaskProps[]>([]);
  const [selectedTask, setSelectedTask] = useState<TaskProps[]>([]);
  const { session } = useSession();
  const router = useRouter();

  useEffect(() => {
    fetchMyRelationship();
    fetchAllTasks();
  }, [session]);


  const fetchAllTasks = async () => {
    if (session) {
      let allTasks: TaskProps[] = [];
      let currentPage = 1;
      let lastPage = 1;

      do {
        const response = await getMyTasks(session, currentPage) as TaskPageProps;
        allTasks = [...allTasks, ...response.data];
        lastPage = response.meta.last_page ?? 1;
        currentPage += 1;
      } while (currentPage <= lastPage);

      setTask(allTasks);

    }
  };

  const fetchMyRelationship = async () => {
    if (session) {
      try {
        const response = await getMyRelationships(session);
        setMyRelationship(response.data);
      } catch (error) {
        console.log('Erro', 'Não foi pegar os seus relacionamentos');
      }
    }
  }


  const handleSubmit = async () => {
    if (!selectedRelationship || !selectedTask) {
      Toast.show({
        text1: 'Erro',
        text2: 'Por favor, preencha todos os campos.'
      });
      return;
    }

    const taskUser = {
      tasks_id: Number(selectedTask[0].id),
      user_receiver_id: Number(selectedRelationship),
    };

    if (session) {
      try {
        const response = await createTaskUser(taskUser, session);

        if (response && response.data && response.data.id) {
          Toast.show({
            text1: 'Sucesso',
            text2: 'Desafio enviado.'
          });
          setTimeout(() => {
            router.push('/(auth)/(responsible)/(tabs)/');
          }, 2000);
        } else {
          Toast.show({
            text1: 'Erro',
            text2: 'Desafio já atrelado.'
          });
        }

      } catch (error) {
        console.error("Erro na criação de tarefa:", error);
        Toast.show({
          text1: 'Erro',
          text2: 'Ocorreu um erro ao enviar o desafio.'
        });
      }

    }
  };


  const handlePickerRelationship = (itemValue: string) => {
    setSelectedRelationship(itemValue);
  }

  const handlePickerTask = (itemValue: string) => {
    if (itemValue) {
      const selectedTaskData = task.find((taskData) => taskData.id.toString() === itemValue);
      setSelectedTask(selectedTaskData ? [selectedTaskData] : []);
    }
  };

  return (
    <>
      <View style={{ zIndex: 100 }}>
        <Toast />
      </View>
      <Container contentContainerStyle={{ flexGrow: 1 }}>
        <Pressable onPress={() => router.push('/(auth)/(responsible)/(tabs)/tasks')}>
          <Voltar source={ImageVoltar} resizeMode="contain" />
        </Pressable>
        <GradientBorderBoxTasks>

          <ContainerTasks>
            <Label>Clique para ver o desafio completo:</Label>
            {selectedTask?.length > 0 ? selectedTask.map((taskData: TaskProps) => (
              <Pressable
                key={taskData.id}
                style={{ width: '100%' }}
                onPress={() => router.push({ pathname: "/single-task", params: { id: `${taskData.id}` } })}
              >
                <Task style={{ flex: 1, alignSelf: 'stretch' }}>
                  <Title>{taskData.title}</Title>
                  <Description>{taskData.description}</Description>
                </Task>
              </Pressable>
            )) : (
              <Text>Selecione alguma tarefa para ver mais sobre ela.</Text>
            )}

            <Label>Minhas tarefas existentes:</Label>
            <Picker
              onValueChange={handlePickerTask}
              style={styles.picker}
            >
              <Picker.Item label="Selecione uma tarefa" value="" />
              {task.map((tasks) => (
                <Picker.Item key={tasks.id} label={tasks.title} value={tasks.id.toString()} />
              ))}
            </Picker>

            <Label>Selecionar Filho:</Label>
            <Picker
              selectedValue={selectedRelationship}
              onValueChange={handlePickerRelationship}
              style={styles.picker}
            >
              <Picker.Item label="Selecione o filho" value="" />
              {myrelationship.map((data) => (
                <Picker.Item key={data.id} label={data.name} value={data.id.toString()} />
              ))}
            </Picker>

            <ButtonCreate onPress={handleSubmit}>
              <TextButton>Enviar desafio</TextButton>
            </ButtonCreate>
          </ContainerTasks>
        </GradientBorderBoxTasks>

      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  picker: {
    paddingTop: wp('2%'),
    paddingBottom: wp('2%'),
    borderRadius: 15,
    borderColor: '#f9d54b',
    borderWidth: 2,
    marginTop: 10,
    marginVertical: 10,
    alignSelf: 'center',
    width: '95%',
    fontSize: getFontSize(8),
    color: '#737373'
  },
});