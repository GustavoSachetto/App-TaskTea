import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from 'react';
import {
  Title, Container, ContainerRowTask, Voltar, TextTaskDay, LinkedSign, BoxTask, TarefaImage,
  Dica, DataText, TextTarefa, GradientBorderBox, ContainerRowHeader,
  ButtonEdit,
  TextButton,
  Box
} from '@/styles/single-task';
import { Button } from '@/styles/tip';
import { fetchTaskUserById, TaskUserProps } from '@/services/api/routes/taskuser';
import Colors from '@/constants/Colors';
import Tip from '@/components/tip';
import { useSession } from "@/hooks/ctx";
import { fetchTaskById, TaskProps } from "@/services/api/routes/tasks";
import { useRouter } from "expo-router";
import { Pressable, ScrollView } from "react-native";

const ImageVoltar = require('@/assets/icons/voltar.png');
const ImageDica = require('@/assets/icons/dica.png');
const RedColor = Colors.colors.red;
const ImageTarefa = require('@/assets/images/tarefa-exemplo.png');

type TaskUserCredential = {
  id: number,
  done: boolean,
  user_receiver?: {
    name: string;
    email: string;
  }
}

function initialTask() {
  return {
    id: 1,
    title: "string",
    description: "string",
    tip: "string",
    level: "string",
    image: "string",
    categories_id: 0,
    user_creator_id: 0,
    created_at: "",
    updated_at: null
  }
}

export default function SingleTaskPage() {
  const [modalVisible, setModalVisible] = useState(false);
  const [task, setTask] = useState<TaskProps>(initialTask);
  const [taskUser, setTaskUser] = useState<TaskUserCredential>({
    id: 1,
    done: false
  });
  const [difficult, setDifficult] = useState<string | null>(null);
  const { session } = useSession();
  const router = useRouter();

  const { id } = useLocalSearchParams();

  useEffect(() => {
    fetchTaskUser();
  }, [id])

  const fetchTaskUser = async () => {
    try {
      if (session) {
        const numId: number = typeof id === "string" ? parseInt(id) : 1;
        const result = await fetchTaskUserById(numId, session);
        setTaskUser(result.data);
        setDifficult(result.data.difficult_level);
        setTask(result.data.task);
      }
    } catch (error: any) {
      fetchTask();
    }
  };

  const translateDifficult = (difficult: any): string => {
    const difficulties: { [key: string]: string } = {
      'very easy': 'muito fácil',
      'easy': 'fácil',
      'medium': 'média',
      'hard': 'difícil',
      'very hard': 'muito difícil',
    };

    return difficulties[difficult];
  };

  const translatedDifficult = translateDifficult(difficult);

  const fetchTask = async () => {
    if (session) {
      const numId: number = typeof id === "string" ? parseInt(id) : 1;
      const result = await fetchTaskById(session, numId);
      setTask(result.data);
    }
  };

  return (
    <ScrollView>
      <Container>
        <ContainerRowHeader>
          <LinkedSign onPress={() => router.back()}>
            <Voltar source={ImageVoltar} resizeMode="contain" />
          </LinkedSign>
          <TextTaskDay>Desafio</TextTaskDay>
        </ContainerRowHeader>

        <GradientBorderBox>


          <BoxTask>
            <TarefaImage source={task.image ? { uri: task.image.toString() } : ImageTarefa} />
            <Box>
              <Title customColor={RedColor}>{task.title}</Title>
              <TextTarefa>{task.description}</TextTarefa>
              {difficult != null ? (
                <DataText>A criança achou a tarefa {translatedDifficult}.</DataText>
              ) : null}
              <ContainerRowTask>
                {taskUser?.user_receiver?.email ? (
                  <DataText>
                    Usuário que recebeu:  {"\n"}
                    {taskUser.user_receiver.name} {"\n"}
                    {taskUser.user_receiver.email} {"\n"}
                  </DataText>
                ) : null}

                <Button onPress={() => setModalVisible(true)}>
                  <Dica source={ImageDica} />
                </Button>
              </ContainerRowTask>
              <Tip
                name={''}
                text={task.tip}
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
              />
            </Box>
          </BoxTask>

        </GradientBorderBox>

        <ButtonEdit>
          <Pressable onPress={() => router.push({ pathname: "/edit-task", params: { id: `${task.id}` } })}>
            <TextButton>Editar desafio</TextButton>
          </Pressable>
        </ButtonEdit>

        <ButtonEdit>
          <Pressable onPress={() => router.push({ pathname: "/send-task", params: { id: `${task.id}` } })}>
            <TextButton>Enviar desafio</TextButton>
          </Pressable>
        </ButtonEdit>
      </Container>
    </ScrollView>
  )
}