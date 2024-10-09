import { Container, Voltar, TextChildren, LinkedSign, BoxChildren, GradientBorderBox, ContainerRowHeader, ViewChildren ,ProfilePhoto, Name, Childs } from '@/styles/children';
import {
  AddTask,
  TextAddTask
} from '@/styles/tasks';
import { Overlay } from "@/styles/index";
import { useEffect, useState } from 'react';
import { getMyRelationships, UserRelationshipProps } from '@/services/api/routes/user'
import { router } from 'expo-router';
import { useSession } from '@/hooks/ctx';
import { SubTitle } from '@/styles/index';
import { Pressable, View } from 'react-native'
import AddChild from '@/components/add-child'


const ImageVoltar = require('@/assets/icons/voltar.png');
const DefaultProfileImage = require('@/assets/icons/perfil.png');
const ImageAdicionarCriança = require('@/assets/icons/botao-criar-azul.png');

export default function ChildrenPage() {
  const [userRelationships, setUserRelationships] = useState<UserRelationshipProps[]>([]);
  const { session } = useSession();
  const [modalVisible, setModalVisible] = useState(false);
  

  useEffect(() => {
    const fetchUserRelationships = async () => {
      if (session) {
        const response = await getMyRelationships(session);
        setUserRelationships(response);
      }
    }

    fetchUserRelationships();
  }, [session]);


  return (
    <Container>
      {modalVisible && <Overlay />}
      <ContainerRowHeader>
        <LinkedSign onPress={() => router.back()}>
          <Voltar source={ImageVoltar} resizeMode="contain" />
        </LinkedSign>
        <TextChildren>Crianças</TextChildren>
      </ContainerRowHeader>
      <GradientBorderBox>
        <BoxChildren>
          <ViewChildren>
            {userRelationships.length > 0 ? (
              userRelationships.map((child) => (
                <Childs key={child.id}>
                  <ProfilePhoto
                    source={child.image ? { uri: child.image } : DefaultProfileImage}
                  />
                  <Name>{child.name}</Name>
                </Childs>
              ))
            ) : (
              <SubTitle>
                Nenhuma criança encontrada.
              </SubTitle>
            )}
          </ViewChildren>

        </BoxChildren>
      </GradientBorderBox>

        <View style={{paddingBottom:15}}>
          <Pressable onPress={() => setModalVisible(true)}>
            <AddTask source={ImageAdicionarCriança} resizeMode="contain" />
          </Pressable>
          <TextAddTask>Adicionar filho</TextAddTask>
        </View>

        <AddChild
           visible={modalVisible}
           onClose={() => setModalVisible(false)}
          />

    </Container>
  )
}