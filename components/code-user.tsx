import { Modal, StyleSheet, Text, Pressable, View, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Fonts } from '@/constants/Fonts';
import { CenteredView, ModalView, CloseButton, ModalImage, ModalText, TextCodeUser } from '@/styles/code-user';

interface CodigoUserProps {
  visible: boolean;
  onClose: () => void;
}

export default function CodigoUser({ visible, onClose }: CodigoUserProps) {
  const router = useRouter();

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <CenteredView>
        <ModalView>
          <CloseButton onPress={onClose}>
            <ModalImage
              source={require('../assets/icons/x.png')} 
            />
          </CloseButton>
          <ModalText>Código do usuário:</ModalText>
          <TextCodeUser>
            123456
            {/* {userCode ? userCode.name : "Código não disponível"} */}
            </TextCodeUser>

        </ModalView>
      </CenteredView>
    </Modal>
  );
}
