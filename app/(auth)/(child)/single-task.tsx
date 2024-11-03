import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from 'react';
import {
  Title, Container, ContainerRowTask, Voltar, TextTaskDay, LinkedSign, BoxTask, TarefaImage,
  Dica, TextClick, TextTarefa, GradientBorderBox, ContainerRowHeader,
  CenteredCheckboxContainer
} from '@/styles/single-task';
import { Button } from '@/styles/tip';
import { editTaskUserById, fetchTaskUserById } from '@/services/api/routes/taskuser';
import Colors from '@/constants/Colors';
import Tip from '@/components/tip';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useSession } from "@/hooks/ctx";
import { TaskProps } from "@/services/api/routes/tasks";
import { getMyUser } from "@/services/api/routes/user";
import { useRouter } from "expo-router";
import Congratulations from "@/components/congratulations";
import FeedbackModal from "@/components/feedback";
import { w, h } from '@/utils/responsiveMesures';

const ImageTarefa = require('@/assets/images/tarefa-exemplo.png');
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
    title: "",
    description: "",
    tip: "",
    level: "",
    image: "",
    categories_id: 0,
    user_creator_id: 0,
    created_at: "",
    updated_at: null
  }
}

export default function SingleTaskPage() {
  const [modalVisible, setModalVisible] = useState(false);
  const [congratulationsVisible, setCongratulationsVisible] = useState(false);
  const [feedbackVisible, setFeedbackVisible] = useState(false);
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
    const numId: number = typeof (id) === "string" ? await parseInt(id) : 1;
    const result = await fetchTaskUserById(numId, session);

    setTaskUser(result.data);
    setTask(result.data.task);
  }

  const setUserName = async () => {
    const result = await getMyUser(session);

    setName(result.data.name);
  }
  const finishTask = async (id: number) => {
    const newDoneStatus = !taskUser.done;

    setTaskUser(prev => ({ ...prev, done: newDoneStatus }));

    await editTaskUserById(id, {
      done: newDoneStatus,
      difficult_level: null
    }, session);


    if (newDoneStatus) {
      setTimeout(() => {
        setFeedbackVisible(true);
      }, 2900);
      setCongratulationsVisible(true);
    }

    setTimeout(() => {
      setCongratulationsVisible(false);
    }, 2500);
  }


  return (
    <Container>
      <ContainerRowHeader>
        <LinkedSign onPress={() => router.back()}>
          <Voltar source={ImageVoltar} resizeMode="contain" />
        </LinkedSign>
        <TextTaskDay>Desafio do dia</TextTaskDay>
      </ContainerRowHeader>

      <GradientBorderBox>
        <TarefaImage source={task.image ? { uri: task.image.toString() } : ImageTarefa} />
        <BoxTask>
          <Title customColor={RedColor}>{task.title}</Title>
          <TextTarefa>{task.description}</TextTarefa>
          <ContainerRowTask>
            <TextClick>Clique para finalizar seu desafio</TextClick>
            <CenteredCheckboxContainer>
              <BouncyCheckbox
                disableText
                fillColor="#46f87c"
                size={w(15)}
                innerIconStyle={{ borderColor: '#46f87c', borderRadius: 15, borderWidth: w(1) }}
                iconStyle={{ borderRadius: 15 }}
                style={{ alignSelf: 'center', marginVertical: 10 }}
                isChecked={taskUser.done}
                onPress={() => finishTask(taskUser.id)}
              />
            </CenteredCheckboxContainer>
            <Button onPress={() => setModalVisible(true)}>
              <Dica source={ImageDica} />
            </Button>
          </ContainerRowTask>
          <Tip
            name={name}
            text={task.tip}
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
          />
        </BoxTask>
      </GradientBorderBox>
      <Congratulations
        visible={congratulationsVisible}
        onClose={() => setCongratulationsVisible(false)}
      />
      <FeedbackModal
        visible={feedbackVisible}
        onClose={() => setFeedbackVisible(false)}
        taskUserId={taskUser.id}
        done={taskUser.done}
      />
    </Container>
  )
}
