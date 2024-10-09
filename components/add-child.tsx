import { Modal } from 'react-native';
import { CenteredView, ModalView, CloseButton, ModalImage, ModalText, Input } from '@/styles/add-child';

interface AddChildProps {
  visible: boolean;
  onClose: () => void;
}

export default function AddChild({ visible, onClose }: AddChildProps) {
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
          <ModalText>Adicionar crianças</ModalText>
          <Input placeholder='Código do usuário'   placeholderTextColor="#a6a6a6"
 />
        </ModalView>
      </CenteredView>
    </Modal>
  )
}
