import { View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { Container, Logo, Title, SubTitle, LinkStyled, TextButton } from "@/styles/index";
import { Border, Input, Line, ContainerButtonsSign, ButtonSign, LinkedSign } from "@/styles/sign";
import Colors from '@/constants/Colors';
const ImageLogo = require('@/assets/images/logo.png');

const GrayColor  = Colors.colors.gray;
const GreenColor = Colors.colors.green;

export default function SignUpResponsible() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <Logo source={ImageLogo} resizeMode="contain" style={{marginTop:140}}/>
        <SubTitle>Só precisamos de algumas informações e você já poderá começar!</SubTitle>
        <Border customColor={GreenColor}>
          <Title customColor={GreenColor} style={{padding:10}}>Cadastro responsável</Title>
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
            placeholder='CPF:'
            placeholderTextColor={GrayColor}
            customColor={GreenColor} 
            // value={cpf}
            // onChangeText={(text) => setCpf(text)} 
            />
          <Input 
            placeholder='E-mail:'
            placeholderTextColor={GrayColor}
            customColor={GreenColor}
            // value={email}
            // onChangeText={(text) => setEmail(text)} 
            />
          <Input 
            placeholder='Telefone:'
            placeholderTextColor={GrayColor}
            customColor={GreenColor} 
            // value={telefone}
            // onChangeText={(text) => setTelefone(text)} 
            />
          <Input 
            placeholder='Data de nascimento:'
            placeholderTextColor={GrayColor}
            customColor={GreenColor} 
            // value={age}
            // onChangeText={(text) => setAge(text)} 
            />
          <Input 
            placeholder='Senha:'
            placeholderTextColor={GrayColor}
            customColor={GreenColor}
            // value={password}
            // onChangeText={(text) => setPassword(text)}
            // secureTextEntry 
            />
          <ContainerButtonsSign>
            <LinkedSign customColor={GrayColor} href="/(public)/">
              <TextButton>Voltar</TextButton>
            </LinkedSign>
            <ButtonSign customColor={GreenColor} 
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