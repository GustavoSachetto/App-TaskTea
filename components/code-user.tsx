import { Modal } from 'react-native';
import { CenteredView, ModalView, CloseButton, ModalImage, ModalText, TextCodeUser } from '@/styles/code-user';

interface CodigoUserProps {
  visible: boolean;
  onClose: () => void;
}

export default function CodigoUser({ visible, onClose }: CodigoUserProps) {
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <CenteredView>
        <ModalView>
          <CloseButton onPress={onClose}>
            <ModalImage source={require('../assets/icons/x.png')} />
          </CloseButton>
          <ModalText>Código do usuário:</ModalText>
          <TextCodeUser>
            123456
            {/* {userCode ? userCode.name : "Código não disponível"} */}
          </TextCodeUser>
        </ModalView>
      </CenteredView>
    </Modal>
  )
}
