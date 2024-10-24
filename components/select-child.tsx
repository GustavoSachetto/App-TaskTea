import { Modal } from 'react-native';
import { useEffect, useState } from 'react';
import { SubTitle } from '@/styles';
import { useSession } from '@/hooks/ctx';
import { useRouter } from 'expo-router';
import { getMyRelationships, UserRelationshipProps } from '@/services/api/routes/user';
import { CenteredView, ModalView, Header, CloseButton, ModalImage, ButtonChild, TextName, ImageProfile, Title } from '@/styles/select-child';
import { ModalOverlay } from '@/styles/overlay';

interface SelectChildProps {
  visible: boolean;
  onClose: () => void;
  onSelectUser: (userId: string) => void;
}

export default function SelectChild({ visible, onClose, onSelectUser }: SelectChildProps) {
  const [userRelationships, setUserRelationships] = useState<UserRelationshipProps[]>([]);
  const { session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const fetchUserRelationships = async () => {
      if (session) {
        const response = await getMyRelationships(session);
        setUserRelationships(response.data);
      }
    }

    fetchUserRelationships();
  }, [session]);

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <ModalOverlay>
        <CenteredView>
          <ModalView>
            <Header>
              <Title>
                Selecione o filho
              </Title>
              <CloseButton onPress={onClose}>
                <ModalImage source={require('../assets/icons/x.png')} />
              </CloseButton>
            </Header>
            {userRelationships?.length > 0 ? userRelationships.map((user: UserRelationshipProps) => (
              <ButtonChild style={{ flex: 1, alignSelf: 'stretch' }}
                key={user.id}
                onPress={() => {
                  onSelectUser(user.id.toString());
                  onClose();
                  router.push({
                    pathname: '/(auth)/(responsible)/statistics',
                    params: { userId: user.id },
                  })
                }}>
                <ImageProfile source={user?.image ? { uri: user.image } : require('../assets/icons/perfil.png')} />
                <TextName>{user.name}</TextName>
              </ButtonChild>
            )) : (
              <SubTitle>Sem filhos cadastrados.</SubTitle>
            )}
          </ModalView>
        </CenteredView>
      </ModalOverlay>
    </Modal>
  )
}
