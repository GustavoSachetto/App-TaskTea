import { TouchableOpacity  } from 'react-native';
import { useRouter } from 'expo-router';
import {
  QuebraCabeca, ContainerTasksDoing, ScrollViewContainerTasks, TextTask,
  GradientBorderBoxTasks, ContainerAllTasks, TextDoing, Task,
  BoxTasks, Title, Description, Clips
} from '@/styles/tasks';
import { LinkedSign, Voltar, ContainerRowTasks } from '@/styles/finished-tasks';
import Colors from '@/constants/Colors';

const ImageClips = require('@/assets/icons/clips.png');
const ImageVoltar = require('@/assets/icons/voltar-verde.png');
const ImageQuebraCabeca = require('@/assets/icons/quebra-cabeca-tasks.png');
const green  = Colors.colors.green;

export default function TasksPage() {

  const router = useRouter();
  return (
    <ContainerAllTasks>
      
      <ContainerRowTasks>
      <LinkedSign onPress={() => router.back()}>
          <Voltar source={ImageVoltar} resizeMode="contain" />
      </LinkedSign>

        <QuebraCabeca source={ImageQuebraCabeca} resizeMode="contain" />
        <TextTask customColor={green}>Desafios</TextTask>
        
      </ContainerRowTasks>

      <ContainerTasksDoing customColor={green}>
        <TextDoing>Em andamento</TextDoing>
      </ContainerTasksDoing>

      <GradientBorderBoxTasks customColor={green}>
        <BoxTasks>
          <ScrollViewContainerTasks showsVerticalScrollIndicator={false}>
          <TouchableOpacity 
              style={{ width: '100%' }} 
              onPress={() => router.push('/(auth)/(child)/single-task')}>
              <Task customColor={green} style={{ flex: 1, alignSelf: 'stretch' }} >
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