import { _View, Modal, Text } from 'react-native';
import { CenteredView, ModalView, CloseButton, ModalImage, ModalText, TextCodeUser } from '@/styles/code-user';
import { getCodeUser } from '@/services/api/routes/user';
import { useSession } from '@/hooks/ctx';
import { useEffect, useState } from 'react';
import { View } from '@/styles/index-responsible';
import { Container } from '@/styles';

interface CodigoUserProps {
  visible: boolean;
  onClose: () => void;
}

export default function CodigoUser({ visible, onClose }: CodigoUserProps) {
  const [token, setToken] = useState<string>('');
  const { session } = useSession();

  const fetchToken = async () => {
    if (session) {
      const data = await getCodeUser(session);
      setToken(data.token);
    }
  }

  useEffect(() => {
    fetchToken();
  }, [])

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <CenteredView>
        <ModalView>
          <CloseButton onPress={onClose} >
            <ModalImage source={require('../assets/icons/x.png')}  />
          </CloseButton>
          <Container>
            {token ? (
              <>
                <ModalText>Código do usuário:</ModalText>
                <TextCodeUser>{token}</TextCodeUser>
              </>
            ) : (
              <Text>Nenhum código disponível no momento.</Text>
            )}
          </Container>
        </ModalView>
      </CenteredView>
    </Modal>
  )
}
