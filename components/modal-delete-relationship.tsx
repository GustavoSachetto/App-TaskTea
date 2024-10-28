import { CenteredView, CloseButton, ModalImage, ModalText, ModalView, ContainerButtons } from '@/styles/modal-delete-relationship';
import { deleteMyRelationship } from '@/services/api/routes/relationship';
import { Button, TextStyle } from '@/styles/modal-delete-account';
import { ModalOverlay } from '@/styles/overlay';
import { Modal } from "react-native";
import { useSession } from '@/hooks/ctx';

type ModalDeleteRelationshipProps = {
  visible: boolean;
  onClose: () => void;
}

export default function ModalDeleteRelationship({ visible, onClose }: ModalDeleteRelationshipProps) {
  const { session } = useSession();

  const handleDeleteRelationship = async () => {
    if (session) await deleteMyRelationship(session);
    
    onClose();
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

            <ModalText>Realmente deseja deletar seu relacionamento?</ModalText>
            
            <ContainerButtons>
              <Button onPress={onClose} style={{ backgroundColor: "#737373" }}>
                <TextStyle>Não</TextStyle>
              </Button>

              <Button onPress={handleDeleteRelationship} style={{ backgroundColor: "#e43b17" }}>
                <TextStyle>Sim</TextStyle>
              </Button>
            </ContainerButtons>
          </ModalView>
        </CenteredView>
      </ModalOverlay>
    </Modal>
  )
}