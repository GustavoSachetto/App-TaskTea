import { View, Text } from 'react-native'
import React from 'react'
import { Container, ContainerRowTask, Voltar, TextTaskDay, LinkedSign, BoxTask, TarefaImage,
  Dica, TextClick, TextTarefa } from '@/styles/single-task';
import {  GradientBorderBox } from '@/styles/index-child';
import Colors from '@/constants/Colors';
import { Title } from "@/styles";

const ImageVoltar = require('@/assets/icons/voltar.png');
const ImageDica = require('@/assets/icons/dica.png');
const ImageTarefa = require('@/assets/images/tarefa-exemplo.png');
const RedColor  = Colors.colors.red;

export default function SingleTaskPage() {
  return (
    <Container>
      <ContainerRowTask>
        <LinkedSign href="/(auth)/(child)/(tabs)">
          <Voltar source={ImageVoltar} resizeMode="contain" />
        </LinkedSign>
        <TextTaskDay>Desafio do dia</TextTaskDay>
      </ContainerRowTask>

      <GradientBorderBox>
        <TarefaImage source={ImageTarefa} ></TarefaImage>
        <BoxTask>
          <Title customColor={RedColor}>Dê bom dia a alguém!</Title>
          <TextTarefa>
            Fale “Bom dia para alguém!”
          </TextTarefa>
          <ContainerRowTask>
            <TextClick>Clique para finalizar</TextClick>

            <Dica source={ImageDica} ></Dica>
          </ContainerRowTask>
        </BoxTask>
      </GradientBorderBox>
    </Container>
  )
}