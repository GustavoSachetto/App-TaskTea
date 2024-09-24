import { useState } from 'react';
import { Container, ContainerButton, Logo, Title, SubTitle, Button, LinkButton,
  LinkStyled, Overlay, TextButton } from "@/styles/index";
import SignUpOptions from "@/components/sign-up-options";

const ImageLogo = require('@/assets/images/logo.png');

export default function WelcomePage() {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      {modalVisible && <Overlay />}
      
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
      <SignUpOptions
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      <LinkStyled href="/">Termos de serviços</LinkStyled>
    </Container>
  )
}
