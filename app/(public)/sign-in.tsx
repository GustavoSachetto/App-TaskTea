import { useState } from 'react';
import { ScrollView } from 'react-native';
import { Container, Logo, Title, SubTitle, LinkStyled, TextButton } from "@/styles/index";
import { Border, Input, Line, ContainerButtonsSign, ButtonSign, LinkedSign } from "@/styles/sign";
import { useSession } from '@/hooks/ctx';
import Colors from '@/constants/Colors';
const ImageLogo = require('@/assets/images/logo.png');

const BlueColor  = Colors.colors.blue;
const GrayColor = Colors.colors.gray;

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
        <Border customColor={BlueColor}>
          <Title customColor={BlueColor} style={{padding:10}}>Entrar</Title>
          <Line customColor={BlueColor} />
          <Input 
          
            placeholderTextColor={GrayColor}
            customColor={BlueColor} 
            value={email}
            onChangeText={(text: string) => setEmail(text)}
            placeholder='E-mail:' />
          <Input 
            placeholderTextColor={GrayColor}
            customColor={BlueColor}
            placeholder='Senha:' 
            value={password}
            onChangeText={(text: string) => setPassword(text)}
            secureTextEntry />
          <ContainerButtonsSign>
            <LinkedSign customColor={GrayColor} href="/(public)/">
              <TextButton>Voltar</TextButton>
            </LinkedSign>
            <ButtonSign customColor={BlueColor} onPress={handleLogin}>
              <TextButton>Entrar</TextButton>
            </ButtonSign>
          </ContainerButtonsSign>
        </Border>
        <LinkStyled href="/">Termos de serviços</LinkStyled>
      </Container>
    </ScrollView>
  );
}