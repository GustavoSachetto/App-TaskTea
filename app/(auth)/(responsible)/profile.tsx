import React from 'react'
import { Container, Banner, ImageProfile, NameProfile, SectionProfile, About, Button } from '@/styles/profile-page'

export default function ProfilePage() {
  return (
    <Container>
      <Banner 
      source={require('../../../assets/images/fundoazul.jpg')}
      />
      <ImageProfile 
      resizeMode="contain"
      source={require('../../../assets/icons/perfil.png')}/>
      <SectionProfile>
        <NameProfile>Meliante Nome</NameProfile>
        <About>Tarefas concluídas: 3</About>
        <About>Dias de atividade: 7 </About>
        <Button>Editar perfil</Button>
      </SectionProfile>
    </Container>
  )
}