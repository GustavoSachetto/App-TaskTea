import { TouchableOpacity  } from 'react-native';
import { useRouter } from 'expo-router';
import {
  QuebraCabeca, ContainerTasksDoing, ScrollViewContainerTasks, TextTask,
  GradientBorderBoxTasks, ContainerRowTasks, ContainerAllTasks, TextDoing, Task,
  BoxTasks, Title, Description, Clips
} from '@/styles/tasks';

const ImageClips = require('@/assets/icons/clips.png');
const ImageQuebraCabeca = require('@/assets/icons/quebra-cabeca-tasks.png');

export default function TasksPage() {
  const router = useRouter();
  return (
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
          <ScrollViewContainerTasks showsVerticalScrollIndicator={false}>
          <TouchableOpacity 
              style={{ width: '100%' }} 
              onPress={() => router.push('/(auth)/(child)/single-task')}>
              <Task style={{ flex: 1, alignSelf: 'stretch' }}>
                <Clips source={ImageClips} resizeMode="contain" />
                <Title>Bom dia!</Title>
                <Description>Entre aqui para saber mais</Description>
              </Task>
            </TouchableOpacity>
  
          </ScrollViewContainerTasks>
        </BoxTasks>
      </GradientBorderBoxTasks>
    </ContainerAllTasks>
  )
}