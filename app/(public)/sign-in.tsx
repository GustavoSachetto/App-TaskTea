import { router } from 'expo-router';
import { Container, Logo, Title, SubTitle, Border, Input, Line, ContainerButton, Button, LinkStyled } from "@/styles/index";
import { useSession } from '@/hooks/ctx';

import Colors from '@/constants/Colors';
const ImageLogo = require('@/assets/images/logo.png');

export default function SignIn() {
  const { signIn } = useSession();
  
  return (
    <Container>
      <Logo source={ImageLogo}/>
      <Title>Bem-vindo de volta!</Title>
      <SubTitle>Ficamos muito felizes com seu empenho e vontade de prosseguir com seus desafios.</SubTitle>
      <Border customColor={Colors.colors.green}>
        <Title customColor={Colors.title.green} style={{padding:10}}>Entrar</Title>
        <Line customColor={Colors.colors.green} />
        <Input customColor={Colors.colors.green} placeholder='Email' />
        <Input customColor={Colors.colors.green} placeholder='Senha' />
        <ContainerButton direction={'row'}>
          <Button>Voltar</Button>
          <Button>Entrar</Button>
        </ContainerButton>
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