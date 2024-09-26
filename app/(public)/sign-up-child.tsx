import { View, Text } from 'react-native'
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { Border, Input, Line, ContainerButtonsSign, ButtonSign, LinkedSign,
  ContainerScrollView, Logo, Title, SubTitle, LinkStyled, TextButton, TextReadAndAgree,
  LinkPopUp, ContainerRow } from "@/styles/sign";
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
const ImageLogo = require('@/assets/images/logo.png');
import BouncyCheckbox from "react-native-bouncy-checkbox"; 

const GrayColor = Colors.colors.gray;
const GreenColor = Colors.colors.green;

export default function SignUpChild() {
  let bouncyCheckboxRef: typeof BouncyCheckbox | null = null;

  return (
    <ContainerScrollView>
      <Logo source={ImageLogo} resizeMode="contain" />
      <SubTitle>Só precisamos de algumas informações e você já poderá começar!</SubTitle>
      <Border customColor={GreenColor}>
        <Title customColor={GreenColor} style={{ padding: 10 }}>Cadastro</Title>
        <Line customColor={GreenColor} />
        <Input
          placeholder='Nome:'
          placeholderTextColor={GrayColor}
          customColor={GreenColor}
        // value={name}
        // onChangeText={(text) => setName(text)} 
        />
        <Input
          placeholder='Nome de usuário:'
          placeholderTextColor={GrayColor}
          customColor={GreenColor}
        // value={nickname}
        // onChangeText={(text) => setNickname(text)} 
        />
        <Input
          placeholder='Data de nascimento:'
          placeholderTextColor={GrayColor}
          customColor={GreenColor}
        // value={age}
        // onChangeText={(text) => setAge(text)} 
        />
        <Input
          placeholder='E-mail:'
          placeholderTextColor={GrayColor}
          customColor={GreenColor}
        // value={email}
        // onChangeText={(text) => setEmail(text)} 
        />
        <Input
          placeholder='Senha:'
          placeholderTextColor={GrayColor}
          customColor={GreenColor}
        // value={password}
        // onChangeText={(text) => setPassword(text)}
        // secureTextEntry 
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
            <LinkedSign customColor={GrayColor}>
              <TextButton>Voltar</TextButton>
            </LinkedSign>
          </Link>
          <ButtonSign customColor={GreenColor}
          // onPress={}
          >
            <TextButton>Entrar</TextButton>
          </ButtonSign>
        </ContainerButtonsSign>
      </Border>
    </ContainerScrollView>

  )
}