import { Container, Header, Logo, Title, Functions, Text } from '@/styles/settings'
import Ionicons from '@expo/vector-icons/Ionicons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Image } from 'react-native';
import { useOverlay } from '@/context/OverlayContext';
import { useState, useEffect } from 'react';
import ServiceTerms from '@/components/service-terms';
import LogoutMessage from '@/components/logout-message';
import Security from '@/components/security';
import { router, useRouter } from 'expo-router';

const ImageTemplates = require('@/assets/icons/templates-desafios.png');

export default function SettingsPage() {
  const [modalServiceTerms, setModalServiceTerms] = useState(false);
  const [modalLogoutMessage, setModalLogoutMessage] = useState(false);
  const [modalSecurity, setModalSecurity] = useState(false);

  const { showOverlay, hideOverlay } = useOverlay();

  useEffect(() => {
    if (modalServiceTerms || modalLogoutMessage || modalSecurity) {
      showOverlay();
    } else {
      hideOverlay();
    }
  }, [modalServiceTerms, modalLogoutMessage, modalSecurity, showOverlay, hideOverlay]);

  return (
    <>
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

        <Functions onPress={() => router.push('/(auth)/(responsible)/template-tasks')}>
          <Image source={ImageTemplates} style={{ width: wp('6%'), height: wp('6%') }}
           />
          <Text>Templates de desafios</Text>
        </Functions>

        <Functions onPress={() => setModalLogoutMessage(true)}>
          <Ionicons name="exit-outline" size={wp('4.5%')} color="#ff3f00" />
          <Text style={{ color: '#ff3f00' }}>Sair</Text>
        </Functions>

        <Security 
        visible={modalSecurity}
        onClose={() => setModalSecurity(false)}
        />

        <ServiceTerms
          visible={modalServiceTerms}
          onClose={() => setModalServiceTerms(false)}
        />
        <LogoutMessage
          visible={modalLogoutMessage}
          onClose={() => setModalLogoutMessage(false)}
        />
      </Container>
    </>
  )
}