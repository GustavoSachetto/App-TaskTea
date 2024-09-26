import { Container, Header, Logo, Title, Functions, Text } from '@/styles/settings'
import Ionicons from '@expo/vector-icons/Ionicons';
import { logout } from '@/services/api/auth';

async function Logout() {
  const debug = logout();
  console.log(debug);
}

export default function SettingsPage() {
  return (
    <Container>
      <Header>
        <Logo
        resizeMode='contain'
        source={require('../../../../assets/icons/configuracao.png')}/>
        <Title>Configurações</Title>
      </Header>
      <Functions>
        <Ionicons name="book-outline" size={25} />
         <Text>Termos de serviço</Text>
      </Functions>
      <Functions>
        <Ionicons name="lock-closed-outline" size={25} />
         <Text>Segurança e informação</Text>
      </Functions>
      <Functions onPress={Logout}>
        <Ionicons name="exit-outline" size={25} color="#ff3f00" />
         <Text style={{color:'#ff3f00'}}>Sair</Text>
      </Functions>
    </Container>
  )
}