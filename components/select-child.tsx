import { Modal, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { useSession } from '@/hooks/ctx';
import { useRouter } from 'expo-router';
import { getMyRelationships, UserRelationshipProps } from '@/services/api/routes/user';
import { CenteredView, ModalView, CloseButton, ModalImage, ModalText } from '@/styles/sign-up-options';
import { ButtonCreate } from '@/styles/create-task';
import { ImageProfile } from '@/styles/profile-page';
import { TextDoing } from '@/styles/tasks';

export default function SelectChild({ visible, onClose, onSelectUser }) {
    const [userRelationships, setUserRelationships] = useState<UserRelationshipProps[]>([]);
    const { session } = useSession(); 
    const router = useRouter();
  
    useEffect(() => {
      const fetchUserRelationships = async () => {
        if (session) {
          const response = await getMyRelationships(session);
          setUserRelationships(response); 
        }
      };
  
      fetchUserRelationships();
    }, [session]); 
  
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}>
        <CenteredView>
          <ModalView>
            <CloseButton onPress={onClose}>
              <ModalImage source={require('../assets/icons/x.png')} />
            </CloseButton>
            <ModalText>Escolha a criança:</ModalText>
            {userRelationships.map((user: UserRelationshipProps) => (
                  <ButtonCreate style={{ flex: 1, alignSelf: 'stretch' }} 
                  key={user.id}
                  onPress={() => {
                    onSelectUser(user.id); 
                    onClose(); 
                    router.push({
                      pathname: '/(auth)/(responsible)/statistics',
                      params: { userId: user.id }, 
                    });
                  }}>
                    <ImageProfile source={user?.image ? { uri: user.image } : require('../assets/icons/perfil.png')} />
                    <TextDoing>{user.name}</TextDoing>
                  </ButtonCreate>
              ))}
          </ModalView>
        </CenteredView>
      </Modal>
    );
}
