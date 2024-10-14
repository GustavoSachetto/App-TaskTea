import { Modal } from 'react-native';
import { CenteredView, ModalView, CloseButton, ModalImage, ModalText, Input } from '@/styles/add-child';
import { createRelationship } from '@/services/api/routes/user';

interface AddChildProps {
  visible: boolean;
  onClose: () => void;
}

export default function AddChild({ visible, onClose }: AddChildProps) {
  const codeRelationship = async () =>{
    createRelationship()

  }

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
          <Input placeholder='Código do usuário'  placeholderTextColor="#a6a6a6"/>
         </ModalView>
      </CenteredView>
    </Modal>
  )
}
