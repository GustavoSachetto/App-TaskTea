import { Container, Header, Logo, Title, Functions, Text } from '@/styles/settings';
import Ionicons from '@expo/vector-icons/Ionicons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Image } from 'react-native';
import { useRouter } from 'expo-router';
import CodigoUser from "@/components/code-user";
import { useEffect, useState } from 'react';
import { useOverlay } from '@/context/OverlayContext';
import ServiceTerms from '@/components/service-terms';
import LogoutMessage from '@/components/logout-message';
import Security from '@/components/security';

const ImageRelogio = require('@/assets/icons/historico-de-desafios.png');
const ImageCodigoUsuario = require('@/assets/icons/codigo-usuario.png');

export default function SettingsPage() {
  const router = useRouter();
  const { showOverlay, hideOverlay } = useOverlay();
  const [modalServiceTerms, setModalServiceTerms] = useState(false);
  const [modalLogoutMessage, setModalLogoutMessage] = useState(false);
  const [modalCode, setModalCode] = useState(false);
  const [modalSecurity, setModalSecurity] = useState(false);

  useEffect(() => {
    if (modalServiceTerms || modalLogoutMessage || modalCode || modalSecurity) {
      showOverlay();
    } else {
      hideOverlay();
    }
  }, [modalServiceTerms, modalLogoutMessage, modalCode, modalSecurity, showOverlay, hideOverlay]);

  return (
    <Container>
      <Header>
        <Logo
          resizeMode='contain'
          source={require('../../../../assets/icons/configuracao.png')}
        />
        <Title>Configurações</Title>
      </Header>

      <Functions onPress={() => setModalServiceTerms(true)}>
        <Ionicons name="book-outline" size={wp('4.5%')} />
        <Text>Termos de serviço</Text>
      </Functions>

      <Functions onPress={() => setModalSecurity(true)}>
        <Ionicons name="lock-closed-outline" size={wp('4.5%')} />
        <Text>Segurança e informação</Text>
      </Functions>

      <Functions onPress={() => router.push('/(auth)/(child)/finished-tasks')}>
        <Image source={ImageRelogio} style={{ width: wp('5%'), height: wp('5%') }} />
        <Text>Histórico de Desafios</Text>
      </Functions>

      <Functions onPress={() => setModalCode(true)}>
        <Image source={ImageCodigoUsuario} style={{ width: wp('5%'), height: wp('5%') }} />
        <Text>Código usuário</Text>
      </Functions>

      <Functions onPress={() => setModalLogoutMessage(true)}>
        <Ionicons name="exit-outline" size={wp('4.5%')} color="#ff3f00" />
        <Text style={{ color: '#ff3f00' }}>Sair</Text>
      </Functions>

      <CodigoUser
        visible={modalCode}
        onClose={() => setModalCode(false)}
      />
      <ServiceTerms
        visible={modalServiceTerms}
        onClose={() => setModalServiceTerms(false)}
      />
      <LogoutMessage
        visible={modalLogoutMessage}
        onClose={() => setModalLogoutMessage(false)}
      />
      <Security
        visible={modalSecurity}
        onClose={() => setModalSecurity(false)}
      />
    </Container>
  );
}
