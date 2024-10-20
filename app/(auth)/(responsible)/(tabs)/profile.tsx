import { Container, Banner, ImageProfile, NameProfile, SectionProfile, About, Button, ButtonText } from '@/styles/profile-page';
import { getMyUser, UserProps } from '@/services/api/routes/user';
import { useSession } from '@/hooks/ctx';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';


export default function ProfilePage() {
  const [userData, setUserData] = useState<UserProps | undefined>(undefined);
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

  const defaultBanner = require('../../../../assets/images/fundoazul.png');
  const defaultImage = require('../../../../assets/icons/perfil.png');

  return (
    <Container>
      <Banner source={userData?.banner ? { uri: userData.banner } : defaultBanner}/>
      <ImageProfile source={userData?.image ? { uri: userData.image } : defaultImage}/>
      <SectionProfile>
        <NameProfile>{userData?.name ?? "Nome não disponível"}</NameProfile>
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
