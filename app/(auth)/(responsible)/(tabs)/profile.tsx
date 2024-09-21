import React from 'react'
import { Container, Banner, ImageProfile, NameProfile, SectionProfile, About, Button, ButtonText } from '@/styles/profile-page'

export default function ProfilePage() {
  return (
    <Container>
      <Banner 
      source={require('../../../../assets/images/fundoazul.png')}
      />
      <ImageProfile 
      resizeMode="contain"
      source={require('../../../../assets/icons/perfil1.png')}/>
      <SectionProfile>
        <NameProfile>Nome</NameProfile>
        <About>Tarefas concluídas: 3</About>
        <About>Dias de atividade: 7 </About>
        <Button>
          <ButtonText>Editar perfil</ButtonText>
        </Button>
      </SectionProfile>
    </Container>
  )
}