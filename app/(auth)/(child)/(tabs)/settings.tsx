import { Container, Header, Logo, Title, Functions, Text } from '@/styles/settings';
import { RelationshipProps, getMyRelationships } from '@/services/api/routes/user';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useEffect, useState } from 'react';
import { useSession } from '@/hooks/ctx';
import { useRouter } from 'expo-router';
import { Image } from 'react-native';
import LogoutMessage from '@/components/logout-message';
import ServiceTerms from '@/components/service-terms';
import Ionicons from '@expo/vector-icons/Ionicons';
import CodigoUser from "@/components/code-user";
import ModalDeleteRelationship from '@/components/modal-delete-relationship';

const IconAlert = require('@/assets/icons/icon-alert.png');
const ImageRelogio = require('@/assets/icons/historico-de-desafios.png');
const ImageCodigoUsuario = require('@/assets/icons/codigo-usuario.png');

export default function SettingsPage() {
  const [myRelationship, setMyRelationship] = useState<RelationshipProps>({ data: [] });
  const [modalLogoutMessage, setModalLogoutMessage] = useState(false);
  const [modalServiceTerms, setModalServiceTerms] = useState(false);
  const [modalCode, setModalCode] = useState(false);
  const [modalDeleteRelationship, setModalDeleteRelationship] = useState(false);
  
  const router = useRouter();

  const { session } = useSession();

  useEffect(() => {
    fetchMyRelationshipStatus();
  }, [session, modalCode, modalDeleteRelationship, modalLogoutMessage])

  const fetchMyRelationshipStatus = async () => {
    if (session) {
      let response = await getMyRelationships(session);

      setMyRelationship(response);
    }
  }

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

      <Functions onPress={() => router.push('/(auth)/security')}>
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

      <ModalDeleteRelationship 
        visible={modalDeleteRelationship} 
        onClose={() => setModalDeleteRelationship(false)} 
      />
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
    </Container>
  );
}
