import { useState } from 'react';
import { ScrollView } from 'react-native';
import {  TextButton } from "@/styles/index";
import { Container, ButtonEdit, GradientBorderBoxTasks, EditImage, InputDescription,
   TarefaImage, Voltar, BoxTasks, Input, ContainerButtonsSign,
    ButtonCreate, Label } from "@/styles/create-task";
    
import { useSession } from '@/hooks/ctx';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';
import { Button } from '@/styles/tasks';
const ImageVoltar = require('@/assets/icons/voltarAmarelo.png');
const ImageTarefa = require('@/assets/images/fundo-tarefa.jpeg');
const ImageEditar = require('@/assets/icons/editar.png');

export default function SignIn() {
  const { } = useSession();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tip, setTip] = useState('');
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
       <Button onPress={() => router.push('/(auth)/(responsible)/(tabs)/tasks')}>
          <Voltar source={ImageVoltar} resizeMode="contain" />
        </Button>
        <GradientBorderBoxTasks>
        <ButtonEdit>
          <EditImage source={ImageEditar} resizeMode="contain"></EditImage>
        </ButtonEdit>  
        <TarefaImage source={ImageTarefa} ></TarefaImage>  
        <BoxTasks>
          <Label>Título do desafio:</Label>
          <Input 
            value={title}
            onChangeText={(text: string) => setTitle(text)}
           />
          <Label>Descrição:</Label> 
          <InputDescription 
          value={description}
          onChangeText={(text: string) => setDescription(text)}
           />  
          <Label>Escreva uma dica:</Label>  
          <Input 
            value={tip}
            onChangeText={(text: string) => setTip(text)}
           />
          <ContainerButtonsSign>
            <ButtonCreate /*onPress={ }*/>
              <TextButton>Criar</TextButton>
            </ButtonCreate>
          </ContainerButtonsSign>
          </BoxTasks>
 
        </GradientBorderBoxTasks>
      </Container>
    </ScrollView>
  );
}