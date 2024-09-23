import { View, Text } from 'react-native'
import React, { useState} from 'react';
import { Title, Container, ContainerRowTask, Voltar, TextTaskDay, LinkedSign, BoxTask, TarefaImage,
  Dica, TextClick, TextTarefa, GradientBorderBox } from '@/styles/single-task';
import { Overlay } from "@/styles/index";
import { Button } from '@/styles/tip';
import Colors from '@/constants/Colors';
import Tip from '@/components/tip';

const ImageVoltar = require('@/assets/icons/voltar.png');
const ImageDica = require('@/assets/icons/dica.png');
const ImageTarefa = require('@/assets/images/tarefa-exemplo.png');
const RedColor  = Colors.colors.red;

export default function SingleTaskPage() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      {modalVisible && <Overlay />}
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
            <Button onPress={() => setModalVisible(true)}>
              <Dica source={ImageDica} ></Dica>
            </Button>
          </ContainerRowTask>
          <Tip
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
          />
        </BoxTask>
      </GradientBorderBox>
    </Container>
  )
}