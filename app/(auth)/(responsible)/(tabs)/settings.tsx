import { View, Image } from 'react-native'
import { Container, Header, Logo, Title, Functions, Text } from '@/styles/settings'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SettingsPage() {
  return (
    <Container>
      <Header>
        <Logo
        resizeMode='contain'
        source={require('../../../../assets/icons/configuracao.png')}/>
        <Title>Configurações</Title>
      </Header>
      <Functions>
        <Ionicons name="book-outline" size={25} />
         <Text>Termos de serviço</Text>
      </Functions>
      <Functions>
        <Ionicons name="lock-closed-outline" size={25} />
         <Text>Segurança e informação</Text>
      </Functions>
      <Functions>
        <Ionicons name="exit-outline" size={25} color="#ff3f00" />
         <Text style={{color:'#ff3f00'}}>Sair</Text>
      </Functions>
    </Container>
  )
}