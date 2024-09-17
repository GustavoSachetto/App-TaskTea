import { router } from 'expo-router';
import { useState } from 'react';
import { Container, Logo, Title, SubTitle, Border, Input, Line, ContainerButtonsSignIn, ButtonSignIn, LinkStyled } from "@/styles/index";
import { useSession } from '@/hooks/ctx';

import Colors from '@/constants/Colors';
const ImageLogo = require('@/assets/images/logo.png');

export default function SignIn() {
  const { signIn } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <Container>
      <Logo source={ImageLogo} resizeMode="contain"/>
      <Title>Bem-vindo de volta!</Title>
      <SubTitle>Ficamos muito felizes com seu empenho e vontade de prosseguir com seus desafios.</SubTitle>
      <Border customColor={Colors.colors.green}>
        <Title customColor={Colors.title.green} style={{padding:10}}>Entrar</Title>
        <Line customColor={Colors.colors.green} />
        <Input 
          customColor={Colors.colors.green} 
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder='Email' />
        <Input 
          customColor={Colors.colors.green}
          placeholder='Senha' 
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry />
        <ContainerButtonsSignIn>
          <ButtonSignIn customColor={Colors.colors.red}>Voltar</ButtonSignIn>
          <ButtonSignIn customColor={Colors.colors.green}>Entrar</ButtonSignIn>
        </ContainerButtonsSignIn>
      </Border>
      <LinkStyled href="/">Termos de serviços</LinkStyled>
    </Container>
  );
}

      {/* <Text
        onPress={() => {
          signIn('sistemateste@gmail.com', 'admin');

          router.replace('/');
        }}>
        Entrar
      </Text> */}