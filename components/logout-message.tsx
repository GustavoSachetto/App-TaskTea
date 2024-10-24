import { Modal } from 'react-native';
import { useRouter } from 'expo-router';
import {
  CenteredView,
  ModalView,
  CloseButton,
  ModalImage,
  Button,
  TextStyle,
  ModalText,
  ContainerButtons
} from '@/styles/logout-message';
import { ModalOverlay } from '@/styles/overlay';
import { useSession } from '@/hooks/ctx';


type LogoutMessageProps = {
  visible?: boolean,
  onClose: () => void,
  buttonColor?: string
}

export default function LogoutMessage({ visible, onClose, buttonColor }: LogoutMessageProps) {
  const router = useRouter();
  const { signOut, session } = useSession();

  const handleLogout = async () => {
    if (session) {
      await signOut(session);
    }
  }

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

            <ModalText>Realmente deseja </ModalText>
            <ModalText>sair?</ModalText>
            <ContainerButtons>
              <Button onPress={onClose} style={{ backgroundColor: "#737373" }}>
                <TextStyle>Não</TextStyle>
              </Button>

              <Button onPress={handleLogout} style={{ backgroundColor: "#e43b17" }}>
                <TextStyle>Sair</TextStyle>
              </Button>
            </ContainerButtons>
          </ModalView>
        </CenteredView>
      </ModalOverlay>
    </Modal>
  )
}
