import { useState } from 'react';
import { Container, ContainerButton, Logo, Title, SubTitle, Button, LinkButton,
  LinkStyled, Overlay, TextButton, TextTerms } from "@/styles/index";
import SignUpOptions from "@/components/sign-up-options";
import ServiceTerms from '@/components/service-terms';

const ImageLogo = require('@/assets/images/logo.png');

export default function WelcomePage() {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);

  return (
    <Container>
      {modalVisible && <Overlay/>}
      {modalVisible1 && <Overlay/>}
      
      <Logo source={ImageLogo} resizeMode="contain" />
      <Title>Bem-vindo ao seu app de tratamento diário!</Title>
      <SubTitle>Aqui iremos ajudá-lo a se desenvolver tanto psicologicamente quanto em sua coordenação motora.</SubTitle>
      <ContainerButton>
        <Button onPress={() => setModalVisible(true)}>
         <TextButton>Cadastrar</TextButton> 
        </Button>
        <LinkButton href="/(public)/sign-in">
          <TextButton>Entrar</TextButton> 
        </LinkButton>
      </ContainerButton>
      
      <LinkStyled onPress={() => setModalVisible1(true)}>
      <TextTerms>Termos de serviços</TextTerms>
      </LinkStyled>
      <SignUpOptions
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      <ServiceTerms visible={modalVisible1}
      onClose={() => setModalVisible1(false)}/>
    </Container>
  )
}
