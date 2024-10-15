import { Container, Banner, ImageProfile, NameProfile, SectionProfile, About, Button, ButtonText } from '@/styles/profile-page';
import { getMyUser, UserProps} from '@/services/api/routes/user';
import { getMyStatisticTotal, TotalProps } from '@/services/api/routes/statistic';
import { useSession } from '@/hooks/ctx';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';

export default function ProfilePage() {
  const [userData, setUserData] = useState<UserProps | undefined>(undefined);
  const [statisticData, setStatisticData] = useState<TotalProps | undefined>(undefined);
  const { session } = useSession(); 
  const router = useRouter();

  useEffect(() => {
    fetchStatisticData();
    fetchUserData(); 
  }, [])

  const fetchUserData = async () => {
    if (session) {
      const response = await getMyUser(session);
      setUserData(response.data); 
    }
  }

  const fetchStatisticData = async () => {
    if (session) {
      const response = await getMyStatisticTotal(session);
      setStatisticData(response) 
    }
  }

  return (
    <Container>
      <Banner source={require('../../../../assets/images/fundoazul.png')} />
      <ImageProfile  source={userData?.image ? { uri: userData.image } : require('../../../../assets/icons/perfil.png')} />
      <SectionProfile>
        <NameProfile>{userData ? userData.name : "Nome não disponível"}</NameProfile>
        <About>Tarefas concluídas: {statisticData ? statisticData.total_completed : "Dado não disponível"}</About>
        <About>Tarefas Incompletas: {statisticData ? statisticData.total_incomplete : "Dado não disponível"}</About>
        <About>Média diária: {statisticData ? statisticData.user_daily_average : "Dado não disponível"}</About>
        <Button onPress={() => router.push('/(auth)/(child)/edit-profile')}>
          <ButtonText>Editar perfil</ButtonText>
        </Button>
      </SectionProfile>
    </Container>
  )
}
