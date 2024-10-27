import { Modal } from 'react-native';
import {
  CenteredView,
  ModalView,
  CloseButton,
  ModalImage,
  Button,
  TextStyle,
  ModalText,
  ContainerButtons
} from '@/styles/modal-delete-account';
import { deleteMyUser } from '@/services/api/routes/user';
import { ModalOverlay } from '@/styles/overlay';
import { useSession } from '@/hooks/ctx';


type LogoutMessageProps = {
  visible?: boolean,
  onClose: () => void,
  buttonColor?: string
}

export default function LogoutMessage({ visible, onClose, buttonColor }: LogoutMessageProps) {
  const { session, signOut } = useSession();

  const handleDelete = async () => {
    if (session) {
      await deleteMyUser(session);
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

            <ModalText>Deseja apagar a sua</ModalText>
            <ModalText>conta?</ModalText>
            <ContainerButtons>
              <Button onPress={onClose} style={{ backgroundColor: "#737373" }}>
                <TextStyle>Não</TextStyle>
              </Button>

              <Button onPress={handleDelete} style={{ backgroundColor: "#e43b17" }}>
                <TextStyle>Sim</TextStyle>
              </Button>
            </ContainerButtons>
          </ModalView>
        </CenteredView>
      </ModalOverlay>
    </Modal>
  )
}
