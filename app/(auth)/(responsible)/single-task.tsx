import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from 'react';
import { Title, Container, ContainerRowTask, Voltar, TextTaskDay, LinkedSign, BoxTask, TarefaImage,
  Dica, DataText, TextTarefa, GradientBorderBox, ContainerRowHeader, 
  ButtonEdit,
  TextButton} from '@/styles/single-task';
import { Button } from '@/styles/tip';
import { fetchTaskUserById } from '@/services/api/routes/taskuser';
import Colors from '@/constants/Colors';
import Tip from '@/components/tip';
import { useSession } from "@/hooks/ctx";
import { TaskProps } from "@/services/api/routes/tasks";
import { useRouter } from "expo-router";

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
    level:  "string",
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
  const { session } = useSession();
  const router = useRouter();
  
  const { id } = useLocalSearchParams();

  useEffect(() => {
    fetchTaskUser();
  }, [id])

  const fetchTaskUser = async () => {
    const numId: number = typeof(id) === "string" ? await parseInt(id) : 1;
    const result = await fetchTaskUserById(numId, session);
    setTaskUser(result.data);
    setTask(result.data.task);

    console.log(taskUser.id)
  }

  return (
    <Container>
      <ContainerRowHeader>
        <LinkedSign onPress={() => router.back()}>
            <Voltar source={ImageVoltar} resizeMode="contain" />
        </LinkedSign>
        <TextTaskDay>Desafio</TextTaskDay>
      </ContainerRowHeader>

      <GradientBorderBox>
      <TarefaImage source={task.image ? { uri: task.image.toString() } : ImageTarefa} />
        <BoxTask>
          <Title customColor={RedColor}>{task.title}</Title>
          <TextTarefa>{task.description}</TextTarefa>
          <ContainerRowTask>
            <DataText>
                Usuário que recebeu:  {"\n"}
                {taskUser.user_receiver?.name} {"\n"}
                {taskUser.user_receiver?.email} {"\n"}
            </DataText>
            
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
        </BoxTask>
      </GradientBorderBox>

      <ButtonEdit onPress={() => router.push({ pathname: "/edit-task", params: { id: `${task.id}` } })}>
        <TextButton>Editar desafio</TextButton>
      </ButtonEdit>
    </Container>
  )
}
