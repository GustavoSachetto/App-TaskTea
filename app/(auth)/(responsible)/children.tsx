import { Container, Voltar, TextChildren, LinkedSign, BoxChildren, GradientBorderBox, ContainerRowHeader } from '@/styles/children';
import { Overlay } from "@/styles/index";
import { useState } from 'react';
import { router } from 'expo-router';

const ImageVoltar = require('@/assets/icons/voltar.png');

export default function ChildrenPage() {
    const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      {modalVisible && <Overlay />}
      <ContainerRowHeader>
        <LinkedSign onPress={() => router.back()}>
            <Voltar source={ImageVoltar} resizeMode="contain" />
        </LinkedSign>
        <TextChildren>Crianças</TextChildren>
      </ContainerRowHeader>

      {/* <GradientBorderBox>
        <BoxChildren></BoxChildren>
      </GradientBorderBox> */}
    </Container>
  )
}