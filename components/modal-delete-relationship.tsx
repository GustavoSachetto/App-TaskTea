import { useEffect, useState } from 'react';
import { CenteredView, CloseButton, ModalImage, ModalText, ModalView, ContainerButtons } from '@/styles/modal-delete-relationship';
import { deleteRelationshipById } from '@/services/api/routes/relationship';
import { Button, TextStyle } from '@/styles/modal-delete-account';
import { ModalOverlay } from '@/styles/overlay';
import { Modal, Text } from "react-native";
import { useSession } from '@/hooks/ctx';
import { ImageProfile, TextName } from '@/styles/select-child';
import { ContainerRow } from '@/styles';
import { TextHelp, TextTip } from '@/styles/tip';
import { UserRelationshipProps } from '@/services/api/routes/user';
import Toast from 'react-native-toast-message';

type ModalDeleteRelationshipProps = {
  visible: boolean;
  onClose: () => void;
  childData?: UserRelationshipProps;
}


export default function ModalDeleteRelationship({ visible, onClose, childData }: ModalDeleteRelationshipProps) {
  const { session } = useSession();
  const [confirming, setConfirming] = useState(false);

  const handleInitialConfirm = () => {
    setConfirming(true);
  };

  const handleDeleteRelationship = async () => {
    if (session && childData) {
      const response = await deleteRelationshipById(childData.id, session);
      Toast.show({
        text1: 'Mensagem',
        text2: 'Relacionamento excluído com sucesso'
      }); 
      setTimeout(() => {
        onClose()
      }, 2000);
      
    }
   
  };

  const handleClose = () => {
    setConfirming(false);
    onClose();
  };

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}
    >
      <ModalOverlay>
        <CenteredView>
          <ModalView>
            <CloseButton onPress={handleClose}>
              <ModalImage source={require('../assets/icons/x.png')} />
            </CloseButton>

            {!confirming ? (
              <>
                <ModalText>Você deseja remover {"\n"} esse usuário?</ModalText>

                <ContainerRow style={{ borderRadius: 30 }}>
                  <ImageProfile source={childData?.image ? { uri: childData.image } : require('../assets/icons/perfil.png')} />
                  <Text>{childData?.name}</Text>
                </ContainerRow>

                <ContainerButtons>
                  <Button onPress={handleClose} style={{ backgroundColor: "#737373" }}>
                    <TextStyle>Não</TextStyle>
                  </Button>
                  <Button onPress={handleInitialConfirm} style={{ backgroundColor: "#e43b17" }}>
                    <TextStyle>Sim</TextStyle>
                  </Button>
                </ContainerButtons>
              </>
            ) : (
              <>
                <ModalText>Realmente deseja deletar {"\n"}seu relacionamento?</ModalText>
                <ContainerButtons>
                  <Button onPress={handleClose} style={{ backgroundColor: "#737373" }}>
                    <TextStyle>Não</TextStyle>
                  </Button>
                  <Button onPress={handleDeleteRelationship} style={{ backgroundColor: "#e43b17" }}>
                    <TextStyle>Sim</TextStyle>
                  </Button>
                </ContainerButtons>
              </>
            )}
          </ModalView>
        </CenteredView>
      </ModalOverlay>
      <Toast />
    </Modal>
  );
}
