import { View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { Container, Logo, Title, SubTitle, LinkStyled, TextButton } from "@/styles/index";
import { Border, Input, Line, ContainerButtonsSign, ButtonSign, LinkedSign } from "@/styles/sign";
import Colors from '@/constants/Colors';
const ImageLogo = require('@/assets/images/logo.png');

export default function SignUpChild() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <Logo source={ImageLogo} resizeMode="contain"/>
        <SubTitle>Só precisamos de algumas informações e você já poderá começar!</SubTitle>
        <Border customColor={Colors.colors.green}>
          <Title customColor={Colors.colors.green} style={{padding:10}}>Cadastro</Title>
          <Line customColor={Colors.colors.green} />
          <Input 
            placeholder='Nome:'
            placeholderTextColor={Colors.colors.gray}
            customColor={Colors.colors.green} 
            // value={name}
            // onChangeText={(text) => setName(text)} 
            />
          <Input 
            placeholder='Nome de usuário:'
            placeholderTextColor={Colors.colors.gray}
            customColor={Colors.colors.green} 
            // value={nickname}
            // onChangeText={(text) => setNickname(text)} 
            />
          <Input 
            placeholder='Data de nascimento:'
            placeholderTextColor={Colors.colors.gray}
            customColor={Colors.colors.green} 
            // value={age}
            // onChangeText={(text) => setAge(text)} 
            />
          <Input 
            placeholder='E-mail:'
            placeholderTextColor={Colors.colors.gray}
            customColor={Colors.colors.green}
            // value={email}
            // onChangeText={(text) => setEmail(text)} 
            />
          <Input 
            placeholder='Senha:'
            placeholderTextColor={Colors.colors.gray}
            customColor={Colors.colors.green}
            // value={password}
            // onChangeText={(text) => setPassword(text)}
            // secureTextEntry 
            />
          <ContainerButtonsSign>
            <LinkedSign customColor={Colors.colors.gray} href="/(public)/">
              <TextButton>Voltar</TextButton>
            </LinkedSign>
            <ButtonSign customColor={Colors.colors.green} 
            // onPress={}
            >
              <TextButton>Entrar</TextButton>
            </ButtonSign>
          </ContainerButtonsSign>
        </Border>
        <LinkStyled href="/">Termos de serviços</LinkStyled>
      </Container>
    </ScrollView>
  )
}