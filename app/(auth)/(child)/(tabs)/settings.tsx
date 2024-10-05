import { Container, Header, Logo, Title, Functions, Text } from '@/styles/settings'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSession } from '@/hooks/ctx';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Image } from 'react-native';
import { useRouter } from 'expo-router';
import CodigoUser from "@/components/code-user";
import { useState } from 'react';
import { Overlay } from "@/styles/index";

const ImageRelogio = require('@/assets/icons/historico-de-desafios.png');
const ImageCodigoUsuario = require('@/assets/icons/codigo-usuario.png');

export default function SettingsPage() {
  const router = useRouter();
  const { signOut, session } = useSession();
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = async () => {
    if (session) {
      await signOut(session); 
    }
  }

  return (
    <Container>
      {modalVisible && <Overlay/>}
      
      <Header>
        <Logo
        resizeMode='contain'
        source={require('../../../../assets/icons/configuracao.png')}/>
        <Title>Configurações</Title>
      </Header>

      <Functions>
        <Ionicons name="book-outline" size={wp('4.5%')} />
         <Text>Termos de serviço</Text>
      </Functions>
     
      <Functions>
        <Ionicons name="lock-closed-outline" size={wp('4.5%')} />
         <Text>Segurança e informação</Text>
      </Functions>

      <Functions onPress={() => router.push('/(auth)/(child)/finished-tasks')}>
        <Image source={ImageRelogio} style={{ width: wp('5%'), height: wp('5%') }} />
         <Text>Histórico de Desafios</Text>
      </Functions>

      <Functions onPress={() => setModalVisible(true)}>
        <Image source={ImageCodigoUsuario} style={{ width: wp('5%'), height: wp('5%') }} />
         <Text >Código usuário</Text>
      </Functions>

      <Functions onPress={handleLogout}>
        <Ionicons name="exit-outline" size={wp('4.5%')} color="#ff3f00" />
         <Text style={{color:'#ff3f00'}}>Sair</Text>
      </Functions>

      <CodigoUser
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </Container>
  )
}