import { useState } from 'react';
import { ContainerScrollView, Logo, Title, SubTitle, LinkStyled, TextButton, Border, Input, Line, ContainerButtonsSign, ButtonSign, LinkedSign } from "@/styles/sign";
import Colors from '@/constants/Colors';
import { createUserResponsible } from '@/services/api/user'
const ImageLogo = require('@/assets/images/logo.png');
import { Link } from 'expo-router';
import BouncyCheckbox from "react-native-bouncy-checkbox"; 
import { TextReadAndAgree, LinkPopUp, ContainerRow } from "@/styles/sign";
const GrayColor = Colors.colors.gray;
const GreenColor = Colors.colors.green;

export default function SignUpResponsible() {
  let bouncyCheckboxRef: typeof BouncyCheckbox | null = null;

  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    
    const userData = {
      name,
      email,
      nickname,
      password,
      age: Number(age),
      cpf,
      phone_number: phoneNumber,
    };

    const response = await createUserResponsible(userData);
    if(response.data)
      console.log('usuário criado com sucesso') // falta tratamento de erro
    if(response.message)
      console.log(response.message)
  };

  return (
    <ContainerScrollView>
      <Logo source={ImageLogo} resizeMode="contain" />
      <SubTitle>Só precisamos de algumas informações e você já poderá começar!</SubTitle>
      <Border customColor={GreenColor}>
        <Title customColor={GreenColor} style={{ padding: 10 }}>Cadastro responsável</Title>
        <Line customColor={GreenColor} />
        <Input
          placeholder='Nome:'
          placeholderTextColor={GrayColor}
          customColor={GreenColor}
          value={name}
          onChangeText={(text: string) => setName(text)}
        />
        <Input
          placeholder='Nome de usuário:'
          placeholderTextColor={GrayColor}
          customColor={GreenColor}
          value={nickname}
          onChangeText={(text: string) => setNickname(text)}
        />
        <Input
          placeholder='CPF:'
          placeholderTextColor={GrayColor}
          customColor={GreenColor}
          value={cpf}
          onChangeText={(text: string) => setCpf(text)}
        />
        <Input
          placeholder='E-mail:'
          placeholderTextColor={GrayColor}
          customColor={GreenColor}
          value={email}
          onChangeText={(text: string) => setEmail(text)}
        />
        <Input
          placeholder='Telefone:'
          placeholderTextColor={GrayColor}
          customColor={GreenColor}
          value={phoneNumber}
          onChangeText={(text: string) => setPhoneNumber(text)}
        />
        <Input
          placeholder='Data de nascimento:'
          placeholderTextColor={GrayColor}
          customColor={GreenColor}
          value={age}
          onChangeText={(text: string) => setAge(text)}
        />
        <Input
          placeholder='Senha:'
          placeholderTextColor={GrayColor}
          customColor={GreenColor}
          value={password}
          onChangeText={(text: string) => setPassword(text)}
          secureTextEntry
        />
        <ContainerRow>
          <BouncyCheckbox
                    ref={bouncyCheckboxRef}
                    disableText
                    fillColor="#46f87c"
                    size={30}
                    innerIconStyle={{borderColor: '#46f87c', borderRadius: 5, borderWidth: 2.5}}
                    iconStyle={{ borderRadius: 5}}
                    onPress={isChecked => {
                    }}

          />
          <TextReadAndAgree>Eu li e concordo com a&ensp;
          <LinkPopUp>Política de Privacidade</LinkPopUp> 
          &ensp; e &ensp; 
          <LinkPopUp>Termos de uso</LinkPopUp></TextReadAndAgree> 
        </ContainerRow>
        <ContainerButtonsSign>
        <Link href="/(public)/">
          <LinkedSign customColor={GrayColor} href="/(public)/">
            <TextButton>Voltar</TextButton>
          </LinkedSign>
        </Link>
          <ButtonSign customColor={GreenColor} onPress={handleSignUp}>
            <TextButton>Entrar</TextButton>
          </ButtonSign>
        </ContainerButtonsSign>
      </Border>
      <LinkStyled href="/">Termos de serviços</LinkStyled>
    </ContainerScrollView>
  )
}
