import { Modal } from 'react-native';
import { useRouter } from 'expo-router';
import { CenteredView, ModalView, CloseButton, ModalImage, Button, TextStyle, ModalText } from '@/styles/sign-up-options';
import { ModalOverlay } from '@/styles/overlay';

type SignUpOptionsProps = {
  visible?: boolean,
  onClose: () => void
}

export default function SignUpOptions({ visible, onClose }: SignUpOptionsProps) {
  const router = useRouter();

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
            <CloseButton onPress={onClose}>
              <ModalImage source={require('../assets/icons/x.png')} />
            </CloseButton>

            <ModalText>Que tipo de </ModalText>
            <ModalText>usuário você é?</ModalText>

            <Button onPress={() => router.push('/(public)/sign-up-child')}>
              <TextStyle>Criança</TextStyle>
            </Button>

            <Button onPress={() => router.push('/(public)/sign-up-responsible')}>
              <TextStyle>Responsável</TextStyle>
            </Button>
          </ModalView>
        </CenteredView>
      </ModalOverlay>

    </Modal>
  )
}