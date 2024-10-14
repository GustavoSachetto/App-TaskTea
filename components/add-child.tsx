import { Modal } from 'react-native';
import { CenteredView, ModalView, CloseButton, ModalImage, ModalText, Input } from '@/styles/add-child';
import { createRelationship } from '@/services/api/routes/user';
import { useSession } from '@/hooks/ctx';
import { useState } from 'react';

interface AddChildProps {
  visible: boolean;
  onClose: () => void;
}

export default function AddChild({ visible, onClose }: AddChildProps) {
  const [code, setCode] = useState<string>('');
  const { session } = useSession();

  const codeRelationship = async () => {
    if (session) {
      const response = await createRelationship(code, session);
      console.log(response);
      return response.message;
    }
  };

  const handleChange = (text: string) => {
    if (text.length <= 6) {
      setCode(text);
      if (text.length === 6) {
        codeRelationship();
      }
    }
  };

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
          <Input
            value={code}
            placeholder='Código do usuário'
            placeholderTextColor="#a6a6a6"
            onChangeText={handleChange}
          />
        </ModalView>
      </CenteredView>
    </Modal>
  );
}
