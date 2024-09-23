import { View, Text } from 'react-native';
import React from 'react';
import { ContainerRow } from '@/styles/index';
import { QuebraCabeca, ContainerTasksDoing, ScrollViewContainerTasks, TextTask,
  GradientBorderBoxTasks, ContainerRowTasks, ContainerAllTasks, TextDoing, Task1,
  BoxTasks, Title, Description, Clips } from '@/styles/tasks';
import SignUpOptions from "@/components/tip";

const ImageClips = require('@/assets/icons/clips.png');
const ImageQuebraCabeca = require('@/assets/icons/quebra-cabeca-tasks.png');

export default function TasksPage() {
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
            <Task1 href="/(auth)/(child)/single-task">
              <Clips source={ImageClips} resizeMode="contain" />
              <Title>Bom dia!</Title>
              <Description>Entre aqui para saber mais</Description>
            </Task1>

            <Task1 href="/(auth)/(child)/single-task">
              <Clips source={ImageClips} resizeMode="contain" />
              <Title>Bom dia!</Title>
              <Description>Entre aqui para saber mais</Description>
            </Task1>

            <Task1 href="/(auth)/(child)/single-task">
              <Clips source={ImageClips} resizeMode="contain" />
              <Title>Bom dia!</Title>
              <Description>Entre aqui para saber mais</Description>       
            </Task1>
            
            <Task1 href="/(auth)/(child)/single-task">
              <Clips source={ImageClips} resizeMode="contain" />
              <Title>Bom dia!</Title>
              <Description>Entre aqui para saber mais</Description>
              
            </Task1>
            <Task1 href="/(auth)/(child)/single-task">
              <Clips source={ImageClips} resizeMode="contain" />
              <Title>Bom dia!</Title>
              <Description>Entre aqui para saber mais</Description>
              
            </Task1>
            <Task1 href="/(auth)/(child)/single-task">
              <Clips source={ImageClips} resizeMode="contain" />
              <Title>Bom dia!</Title>
              <Description>Entre aqui para saber mais</Description>
              
            </Task1>
            <Task1 href="/(auth)/(child)/single-task">
              <Clips source={ImageClips} resizeMode="contain" />
              <Title>Bom dia!</Title>
              <Description>Entre aqui para saber mais</Description>
              
            </Task1>
            <Task1 href="/(auth)/(child)/single-task">
              <Clips source={ImageClips} resizeMode="contain" />
              <Title>Bom dia!</Title>
              <Description>Entre aqui para saber mais</Description>
              
            </Task1>

          </ScrollViewContainerTasks>
        </BoxTasks>
      </GradientBorderBoxTasks>
    </ContainerAllTasks>
  )
}