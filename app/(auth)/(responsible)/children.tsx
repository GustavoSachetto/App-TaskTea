import { Container, Voltar, TextChildren, LinkedSign, BoxChildren, GradientBorderBox, ContainerRowHeader, View ,ProfilePhoto, Name, Childs } from '@/styles/children';
import { Overlay } from "@/styles/index";
import { useEffect, useState } from 'react';
import { getMyRelationships, UserRelationshipProps } from '@/services/api/routes/user'
import { router } from 'expo-router';
import { useSession } from '@/hooks/ctx';
import { SubTitle } from '@/styles/index';


const ImageVoltar = require('@/assets/icons/voltar.png');
const DefaultProfileImage = require('@/assets/icons/perfil.png');

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
          <View>
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
          </View>

        </BoxChildren>
      </GradientBorderBox>
    </Container>
  )
}