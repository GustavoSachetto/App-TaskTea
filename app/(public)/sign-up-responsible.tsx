import { View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { Container, Logo, Title, SubTitle, LinkStyled, TextButton } from "@/styles/index";
import { Border, Input, Line, ContainerButtonsSign, ButtonSign, LinkedSign } from "@/styles/sign";
import Colors from '@/constants/Colors';
const ImageLogo = require('@/assets/images/logo.png');


export default function SignUpResponsible() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <Logo source={ImageLogo} resizeMode="contain"/>
        <SubTitle>Só precisamos de algumas informações e você já poderá começar!</SubTitle>
        <Border customColor={Colors.colors.blue}>
          <Title customColor={Colors.colors.blue} style={{padding:10}}>Cadastro responsável</Title>
          <Line customColor={Colors.colors.blue} />
          <Input 
            placeholder='Data de nascimento:'
            placeholderTextColor={Colors.colors.gray}
            customColor={Colors.colors.blue} 
            // value={age}
            // onChangeText={(text) => setAge(text)} 
            />
          <Input 
            placeholder='Nome:'
            placeholderTextColor={Colors.colors.gray}
            customColor={Colors.colors.blue} 
            // value={name}
            // onChangeText={(text) => setName(text)} 
            />
          <Input 
            placeholder='E-mail:'
            placeholderTextColor={Colors.colors.gray}
            customColor={Colors.colors.blue}
            // value={email}
            // onChangeText={(text) => setEmail(text)} 
            />
          <Input 
            placeholder='Senha:'
            placeholderTextColor={Colors.colors.gray}
            customColor={Colors.colors.blue}
            // value={password}
            // onChangeText={(text) => setPassword(text)}
            // secureTextEntry 
            />
          <Input 
            placeholder='E-mail responsável:'
            placeholderTextColor={Colors.colors.gray}
            customColor={Colors.colors.blue}
            // value={emailResponsable}
            // onChangeText={(text) => setEmailResponsable(text)} 
            />
          <ContainerButtonsSign>
            <LinkedSign customColor={Colors.colors.gray} href="/(public)/">
              <TextButton>Voltar</TextButton>
            </LinkedSign>
            <ButtonSign customColor={Colors.colors.blue} 
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