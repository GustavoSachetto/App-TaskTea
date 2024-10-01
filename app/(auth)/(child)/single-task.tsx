import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Title, Container, ContainerRowTask, Voltar, TextTaskDay, LinkedSign, BoxTask, TarefaImage,
  Dica, TextClick, TextTarefa, GradientBorderBox, ContainerRowHeader } from '@/styles/single-task';
import { Overlay } from "@/styles/index";
import { router } from 'expo-router';
import { Button } from '@/styles/tip';
import Colors from '@/constants/Colors';
import Tip from '@/components/tip';
import BouncyCheckbox from "react-native-bouncy-checkbox"; 

const ImageVoltar = require('@/assets/icons/voltar.png');
const ImageDica = require('@/assets/icons/dica.png');
const ImageTarefa = require('@/assets/images/tarefa-exemplo.png');
const RedColor = Colors.colors.red;

export default function SingleTaskPage() {

  const [modalVisible, setModalVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

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
        <TarefaImage source={ImageTarefa} />
        <BoxTask>
          <Title customColor={RedColor}>Dê bom dia a alguém!</Title>
          <TextTarefa>Fale “Bom dia para alguém!”</TextTarefa>
          <ContainerRowTask>
            <TextClick>Clique para finalizar</TextClick>
            <BouncyCheckbox
              disableText
              fillColor="#46f87c"
              size={50}
              innerIconStyle={{ borderColor: '#46f87c', borderRadius: 15, borderWidth: 3.5 }}
              iconStyle={{ borderRadius: 15 }}
              isChecked={isChecked}
              onPress={checked => setIsChecked(checked)}
            />
            <Button onPress={() => setModalVisible(true)}>
              <Dica source={ImageDica} />
            </Button>
          </ContainerRowTask>
          <Tip
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
          />
        </BoxTask>
      </GradientBorderBox>
    </Container>
  );
}
