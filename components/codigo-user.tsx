import { Modal, StyleSheet, Text, Pressable, View, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Fonts } from '@/constants/Fonts';
import { CenteredView, ModalView, CloseButton, ModalImage, ModalText, TextCodigoUser } from '@/styles/codigo-user';

interface CodigoUserProps {
  visible: boolean;
  onClose: () => void;
}

export default function CodigoUser({ visible, onClose }: CodigoUserProps) {
  const router = useRouter();

  return (
    <Modal
      animationType="slide"
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
          <TextCodigoUser>
            123456
            {/* {userCode ? userCode.name : "Nome não disponível"} */}
            </TextCodigoUser>

        </ModalView>
      </CenteredView>
    </Modal>
  );
}
