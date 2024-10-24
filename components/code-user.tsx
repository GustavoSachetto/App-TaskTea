import { _View, Modal, Text } from 'react-native';
import { CenteredView, ModalView, CloseButton, ModalImage, ModalText, TextCodeUser } from '@/styles/code-user';
import { createToken } from '@/services/api/routes/relationship';
import { useSession } from '@/hooks/ctx';
import { ModalOverlay } from '@/styles/overlay';
import { useEffect, useState } from 'react';
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
      const data = await createToken(session);
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
      <ModalOverlay>
        <CenteredView>
          <ModalView>
            <CloseButton onPress={() => { onClose(); }}>
              <ModalImage source={require('../assets/icons/x.png')} />
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
      </ModalOverlay>
    </Modal>
  )
}
