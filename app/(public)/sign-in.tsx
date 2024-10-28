import { useState } from 'react';
import { ScrollView } from 'react-native';
import { Container, Logo, Title, SubTitle, TextButton } from "@/styles/index";
import { Border, Input, Line, ContainerButtonsSign, ButtonSign, LinkedSign, InputPassword, PasswordContainer, InputWrapper } from "@/styles/sign";
import { useSession } from '@/hooks/ctx';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import Toast from 'react-native-toast-message';
import { Ionicons } from '@expo/vector-icons';
import { h, w } from '@/utils/responsiveMesures';

const ImageLogo = require('@/assets/images/logo.png');
const BlueColor  = Colors.colors.blue;
const GrayColor = Colors.colors.gray;

export default function SignIn() {
  const { signIn } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    const debug = await signIn(email, password);

    if (debug) {
      Toast.show({
        text1: 'Mensagem',
        text2: debug
      });
    }
  }

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
            placeholder='E-mail:' 
          />
          <PasswordContainer>
            <InputWrapper customColor={BlueColor}>
              <InputPassword
                placeholderTextColor={GrayColor}
                placeholder='Senha:'
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={!showPassword}
              />
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                onPress={toggleShowPassword}
                color="#808080"
                size={w(5)} 
              />
            </InputWrapper>
          </PasswordContainer>
          <ContainerButtonsSign>
            <Link href="/(public)/">
              <LinkedSign customColor={GrayColor}>
                <TextButton>Voltar</TextButton>
              </LinkedSign>
            </Link>
            <ButtonSign customColor={BlueColor} onPress={handleLogin}>
              <TextButton>Entrar</TextButton>
            </ButtonSign>
          </ContainerButtonsSign>
        </Border>
      </Container>
      <Toast/>
    </ScrollView>
  )
}