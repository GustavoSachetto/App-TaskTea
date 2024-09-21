import { View, Text } from 'react-native';
import React from 'react';
import { ContainerRow } from '@/styles/index';
import { QuebraCabeca, ContainerTasksDoing, ScrollViewContainerTasks, TextTask,
  ContainerTasks, ContainerRowTasks, ContainerAllTasks } from '@/styles/tasks';

const ImageClips = require('@/assets/icons/clips.png');
const ImageQuebraCabeca = require('@/assets/icons/quebra-cabeca-tasks.png');

export default function TasksPage() {
  return (
    <ContainerAllTasks>
      <ContainerRowTasks>
      <QuebraCabeca source={ImageQuebraCabeca} resizeMode="contain" />
      {/* <Clips source={ImageClips} resizeMode="contain" /> */}
      <TextTask>Desafios</TextTask>
      </ContainerRowTasks>

      <ContainerTasksDoing>
        <Text>Em andamento</Text>
      </ContainerTasksDoing>

      <ContainerTasks>
        <ScrollViewContainerTasks>

        </ScrollViewContainerTasks>
      </ContainerTasks>
    </ContainerAllTasks>
  )
}