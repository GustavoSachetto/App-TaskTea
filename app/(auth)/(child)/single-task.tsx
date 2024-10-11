import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from 'react';
import { Title, Container, ContainerRowTask, Voltar, TextTaskDay, LinkedSign, BoxTask, TarefaImage,
  Dica, TextClick, TextTarefa, GradientBorderBox, ContainerRowHeader } from '@/styles/single-task';
import { Overlay } from "@/styles/index";
import { Button } from '@/styles/tip';
import { editTaskUserById, fetchTaskUserById } from '@/services/api/routes/taskuser';
import Colors from '@/constants/Colors';
import Tip from '@/components/tip';
import BouncyCheckbox from "react-native-bouncy-checkbox"; 
import { useSession } from "@/hooks/ctx";
import { TaskProps } from "@/services/api/routes/tasks";
import { getMyUser } from "@/services/api/routes/user";
import { useRouter } from "expo-router";

const ImageVoltar = require('@/assets/icons/voltar.png');
const ImageDica = require('@/assets/icons/dica.png');
const RedColor = Colors.colors.red;

type TaskUserCredential = {
  id: number, 
  done: boolean
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
    created_at: "string",
    updated_at: null
  }
}

export default function SingleTaskPage() {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState<string>("");
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
    setUserName();
  }, [id])

  const fetchTaskUser = async () => {
    const numId: number = typeof(id) === "string" ? await parseInt(id) : 1;
    const result = await fetchTaskUserById(numId, session);

    setTaskUser(result.data);
    setTask(result.data.task);
  }

  const setUserName = async () => {
    const result = await getMyUser(session);
   
    setName(result.data.name);
  }

  const finishTask = async (id: number) => {
    await editTaskUserById(id, { 
      done: taskUser.done ? false : true, 
      difficult_level: null
    }, session);

    router.back();
  }

  return (
    <Container>
      {modalVisible && <Overlay />}
      <ContainerRowHeader>
        <LinkedSign onPress={() => router.back()}>
            <Voltar source={ImageVoltar} resizeMode="contain" />
        </LinkedSign>
        <TextTaskDay>Desafio do dia</TextTaskDay>
      </ContainerRowHeader>

      <GradientBorderBox>
        <TarefaImage source={{uri: task.image?.toString()}} />
        <BoxTask>
          <Title customColor={RedColor}>{task.title}</Title>
          <TextTarefa>{task.description}</TextTarefa>
          <ContainerRowTask>
            <TextClick>Clique para finalizar</TextClick>
            <BouncyCheckbox
              disableText
              fillColor="#46f87c"
              size={50}
              innerIconStyle={{ borderColor: '#46f87c', borderRadius: 15, borderWidth: 3.5 }}
              iconStyle={{ borderRadius: 15 }}
              isChecked={taskUser.done}
              onPress={() => finishTask(taskUser.id)}
            />
            <Button onPress={() => setModalVisible(true)}>
              <Dica source={ImageDica} />
            </Button>
          </ContainerRowTask>
          <Tip
            name={name}
            text={task.description}
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
          />
        </BoxTask>
      </GradientBorderBox>
    </Container>
  )
}
