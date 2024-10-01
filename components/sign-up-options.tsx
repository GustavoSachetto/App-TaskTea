import { Modal, StyleSheet, Text, Pressable, View, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Fonts } from '@/constants/Fonts';
import { CenteredView, ModalView, CloseButton, ModalImage, Button, TextStyle, ModalText } from '@/styles/sign-up-options';

export default SignUpOptions = ({ visible, onClose }) => {
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
          <ModalText>Que tipo de </ModalText>
          <ModalText>usuário você é?</ModalText>
          <Button
            onPress={() => router.push('/(public)/sign-up-child')}>
            <TextStyle>Criança</TextStyle>
          </Button>
          <Button
            onPress={() => router.push('/(public)/sign-up-responsible')}>
            <TextStyle>Responsável</TextStyle>
          </Button>
        </ModalView>
      </CenteredView>
    </Modal>
  );
};