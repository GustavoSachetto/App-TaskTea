import { useState } from 'react';
import { ScrollView } from 'react-native';
import { Container, Logo, Title, SubTitle, LinkStyled, TextButton } from "@/styles/index";
import { Border, Input, Line, ContainerButtonsSign, ButtonSign, LinkedSign } from "@/styles/sign";
import { useSession } from '@/hooks/ctx';
import Colors from '@/constants/Colors';
const ImageLogo = require('@/assets/images/logo.png');

export default function SignIn() {
  const { signIn } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    let debug = signIn(email, password);
    console.log(debug);
  };
  
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <Logo source={ImageLogo} resizeMode="contain"/>
        <Title>Bem-vindo de volta!</Title>
        <SubTitle>Ficamos muito felizes com seu empenho e vontade de prosseguir com seus desafios.</SubTitle>
        <Border customColor={Colors.colors.blue}>
          <Title customColor={Colors.colors.blue} style={{padding:10}}>Entrar</Title>
          <Line customColor={Colors.colors.blue} />
          <Input 
          
            placeholderTextColor={Colors.colors.gray}
            customColor={Colors.colors.blue} 
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder='E-mail:' />
          <Input 
            placeholderTextColor={Colors.colors.gray}
            customColor={Colors.colors.blue}
            placeholder='Senha:' 
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry />
          <ContainerButtonsSign>
            <LinkedSign customColor={Colors.colors.gray} href="/(public)/">
              <TextButton>Voltar</TextButton>
            </LinkedSign>
            <ButtonSign customColor={Colors.colors.blue} onPress={handleLogin}>
              <TextButton>Entrar</TextButton>
            </ButtonSign>
          </ContainerButtonsSign>
        </Border>
        <LinkStyled href="/">Termos de serviços</LinkStyled>
      </Container>
    </ScrollView>
  );
}