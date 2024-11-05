import { Container, Voltar, TextChildren, LinkedSign, BoxChildren, GradientBorderBox, ContainerRowHeader, ViewChildren, ProfilePhoto, Name, Childs } from '@/styles/children';
import { AddTask, TextAddTask } from '@/styles/tasks';
import { useEffect, useState } from 'react';
import { getMyRelationships, UserRelationshipProps } from '@/services/api/routes/user';
import { router } from 'expo-router';
import { useSession } from '@/hooks/ctx';
import { SubTitle } from '@/styles/index';
import { Pressable, View } from 'react-native';
import AddChild from '@/components/add-child';
import ModalDeleteRelationship from '@/components/modal-delete-relationship';

const ImageVoltar = require('@/assets/icons/voltar.png');
const DefaultProfileImage = require('@/assets/icons/perfil.png');
const ImageAdicionarCriança = require('@/assets/icons/botao-criar-azul.png');

export default function ChildrenPage() {
  const [userRelationships, setUserRelationships] = useState<UserRelationshipProps[]>([]);
  const [childData, setChildData] = useState<UserRelationshipProps | undefined>(undefined);
  const { session } = useSession();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDeleteRelationship, setModalDeleteRelationship] = useState(false);

  useEffect(() => {
    fetchUserRelationships();
  }, [session, modalVisible]);

  const fetchUserRelationships = async () => {
    if (session) {
      const response = await getMyRelationships(session);
      if (response && response.data) { 
        setUserRelationships(response.data);
      } else {
        setUserRelationships([]); 
      }
    }
  };
  const openDeleteModal = (child: UserRelationshipProps) => {
    setChildData(child);
    setModalDeleteRelationship(true);
  };

  return (
    <Container>
      <ContainerRowHeader>
        <LinkedSign onPress={() => router.back()}>
          <Voltar source={ImageVoltar} resizeMode="contain" />
        </LinkedSign>
        <TextChildren>Crianças</TextChildren>
      </ContainerRowHeader>

      <GradientBorderBox>
        <BoxChildren>
          <ViewChildren>
            {userRelationships && userRelationships.length > 0 ? (
              userRelationships.map((child) => (
                <Pressable key={child.id} onPress={() => openDeleteModal(child)}>
                  <Childs>
                    <ProfilePhoto
                      source={child.image ? { uri: child.image } : DefaultProfileImage}
                    />
                    <Name>{child.name}</Name>
                  </Childs>
                </Pressable>
              ))
            ) : (
              <SubTitle>Nenhuma criança encontrada.</SubTitle>
            )}

          </ViewChildren>
        </BoxChildren>
      </GradientBorderBox>

      <View style={{ paddingBottom: 15 }}>
        <Pressable onPress={() => setModalVisible(true)}>
          <AddTask source={ImageAdicionarCriança} resizeMode="contain" />
        </Pressable>
        <TextAddTask>Adicionar filho</TextAddTask>
      </View>

      <AddChild
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      <ModalDeleteRelationship
        visible={modalDeleteRelationship}
        onClose={() => setModalDeleteRelationship(false)}
        childData={childData}
      />
    </Container>
  );
}
