import { View, Text, TouchableOpacity  } from 'react-native';
import React from 'react';
import { ContainerRow } from '@/styles/index';
import { useRouter } from 'expo-router'; // para navegação manual
import {
  QuebraCabeca, ContainerTasksDoing, ScrollViewContainerTasks, TextTask,
  GradientBorderBoxTasks, ContainerRowTasks, ContainerAllTasks, TextDoing, Task1,
  BoxTasks, Title, Description, Clips
} from '@/styles/tasks';
import { Link } from 'expo-router';
import SignUpOptions from "@/components/tip";

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
              <Task1 style={{ flex: 1, alignSelf: 'stretch' }}>
                <Clips source={ImageClips} resizeMode="contain" />
                <Title>Bom dia!</Title>
                <Description>Entre aqui para saber mais</Description>
              </Task1>
            </TouchableOpacity>
  
          </ScrollViewContainerTasks>
        </BoxTasks>
      </GradientBorderBoxTasks>
    </ContainerAllTasks>
  )
}