import { useState } from 'react';
import { Container, ContainerButton, Logo, Title, SubTitle, Button, LinkButton,
  LinkStyled, TextButton, TextTerms } from "@/styles/index";
import SignUpOptions from "@/components/sign-up-options";
import ServiceTerms from '@/components/service-terms';

const ImageLogo = require('@/assets/images/logo.png');

export default function WelcomePage() {

  const [modalSignUp, setModalSignUp] = useState(false);
  const [modalTerms, setModalTerms] = useState(false);

  return (
    <Container>  
      <Logo source={ImageLogo} resizeMode="contain" />
      <Title>Bem-vindo ao seu app de tratamento diário!</Title>
      <SubTitle>Aqui iremos ajudá-lo a se desenvolver tanto psicologicamente quanto em sua coordenação motora.</SubTitle>
      
      <ContainerButton>
        <Button onPress={() => setModalSignUp(true)}>
         <TextButton>Cadastrar</TextButton> 
        </Button>
        <LinkButton href="/(public)/sign-in">
          <TextButton >Entrar</TextButton> 
        </LinkButton>
      </ContainerButton>
      
      <LinkStyled onPress={() => setModalTerms(true)}>
        <TextTerms>Termos de serviços</TextTerms>
      </LinkStyled>
      <SignUpOptions
        visible={modalSignUp}
        onClose={() => setModalSignUp(false)}
      />
      <ServiceTerms 
        visible={modalTerms}
        onClose={() => setModalTerms(false)}
      />
    </Container>
  )
}
