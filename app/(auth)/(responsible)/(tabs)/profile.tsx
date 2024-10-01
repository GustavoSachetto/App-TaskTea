import { Container, Banner, ImageProfile, NameProfile, SectionProfile, About, Button, ButtonText } from '@/styles/profile-page';
import { getMyUser, UserProps} from '@/services/api/routes/user';
import { fetchStatisticTotalById } from '@/services/api/routes/statistic';
import { useSession } from '@/hooks/ctx';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';

const ImageAdicionarAzul = require('@/assets/icons/templates-desafios.png');

export default function ProfilePage() {
  const [userData, setUserData] = useState<UserProps | undefined>(undefined);
  const [statisticData, setStatisticData] = useState();
  const { session } = useSession(); 
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      if (session) {
        const response = await getMyUser(session);
        setUserData(response.data); 
      }
    }

    fetchUserData(); 
  }, []); 

  return (
    <Container>
      <Banner source={require('../../../../assets/images/fundoazul.png')} />
      <ImageProfile  source={userData?.image ? { uri: userData.image } : require('../../../../assets/icons/perfil.png')} />
      <SectionProfile>
        <NameProfile>{userData ? userData.name : "Nome não disponível"}</NameProfile>
        <Button>
          <ButtonText>Editar perfil</ButtonText>
        </Button>

        <Button onPress={() => router.push('/(auth)/(responsible)/children')}>
          <ButtonText>Ver meus filhos</ButtonText>
        </Button>
      </SectionProfile>
    </Container>
  );
}
