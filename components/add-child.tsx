import { Modal } from 'react-native';
import { CenteredView, ModalView, CloseButton, ModalImage, ModalText, Input } from '@/styles/add-child';
import { createRelationship } from '@/services/api/routes/user';
import { useSession } from '@/hooks/ctx';
import { useState } from 'react';
import Toast from 'react-native-toast-message';

interface AddChildProps {
  visible: boolean;
  onClose: () => void;
}

export default function AddChild({ visible, onClose }: AddChildProps) {
  const [code, setCode] = useState<string>('');
  const { session } = useSession();

  const handleChange = (text: string) => {
    setCode(text);
    if (text.length === 6) {
      codeRelationship(text);
    }
  };


  const codeRelationship = async (codeInput: string) => {
    if (session) {
      const response = await createRelationship(codeInput, session);
      Toast.show({
        text1: 'Mensagem',
        text2: response.message
      });
    }
  };

  return (
    <>
    
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
            <Input
              value={code}
              placeholder='Código do usuário'
              placeholderTextColor="#a6a6a6"
              onChangeText={handleChange}
              maxLength={6}
            />
          </ModalView>
        </CenteredView>
        <Toast />
      </Modal>
  
    </>

  );
}
