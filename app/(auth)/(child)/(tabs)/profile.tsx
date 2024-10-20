import { Container, Banner, ImageProfile, NameProfile, SectionProfile, About, Button, ButtonText } from '@/styles/profile-page';
import { getMyUser, UserProps } from '@/services/api/routes/user';
import { getMyStatisticTotal, TotalProps } from '@/services/api/routes/statistic';
import { useSession } from '@/hooks/ctx';
import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const [userData, setUserData] = useState<UserProps | undefined>(undefined);
  const [statisticData, setStatisticData] = useState<TotalProps | undefined>(undefined);
  const { session } = useSession();

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

  const defaultBanner = require('../../../../assets/images/fundoazul.png');
  const defaultImage = require('../../../../assets/icons/perfil.png');

  return (
    <Container>
      <Banner source={userData?.banner ? { uri: userData.banner } : defaultBanner} />
      <ImageProfile source={userData?.image ? { uri: userData.image } : defaultImage} />
      <SectionProfile>
        <NameProfile>{userData?.name ?? "Nome não disponível"}</NameProfile>
        <About>Tarefas concluídas: {statisticData?.total_completed ?? "Dado não disponível"}</About>
        <About>Tarefas Incompletas: {statisticData?.total_incomplete ?? "Dado não disponível"}</About>
        <About>Média diária: {statisticData?.user_daily_average ?? "Dado não disponível"}</About>
        <Button>
          <ButtonText>Editar perfil</ButtonText>
        </Button>
      </SectionProfile>
    </Container>
  )
}
