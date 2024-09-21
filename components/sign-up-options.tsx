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

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: 225,
    height: 175,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#00d46e',
    borderStyle: 'solid',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  Image: {
    width: 28,
    height: 28,
  },
  button: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    marginTop: 10,
    width: 160,
    height: 30,
  },
  buttonClose: {
    backgroundColor: '#00d46e',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: Fonts.RalewayBold,
  },
  modalText: {
    fontWeight: '500',
    fontSize: 19,
    color: '#737373',
    textAlign: 'center', 
    marginBottom: 3,
    fontFamily: Fonts.RalewayBold,
  },
});