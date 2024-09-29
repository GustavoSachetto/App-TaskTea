import { Container, Banner, ImageProfile, NameProfile, SectionProfile, About, Button, ButtonText } from '@/styles/profile-page';
import { getMyUser, UserProps} from '@/services/api/user';
import { getStatisticTotal } from '@/services/api/statistic';
import { useSession } from '@/hooks/ctx';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';

export default function ProfilePage() {
  const [userData, setUserData] = useState<UserProps | undefined>(undefined);
  const [statisticData, setStatisticData] = useState();
  const { session } = useSession(); 
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      if (session) {
          const response = await getMyUser(session);
          setUserData(response); 
      }
    };

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
