import { useSession } from '@/hooks/ctx';
import { getMyUser, UserProps } from '@/services/api/routes/user';
import {
  Logo, QuebraCabeca, Text, Data, Calendario,
  ContainerHeader
} from '@/styles/header-index';
import { CurrentDate } from '@/utils/currentDate';
import { useEffect, useState } from 'react';
import { View } from 'react-native';

const ImageLogo = require('@/assets/images/logo.png');
const ImageCalendario = require('@/assets/icons/calendario.png');
const ImageDesafios = require('@/assets/icons/desafios-quebra-cabeca.png');

export default function HeaderIndex() {
  const [userData, setUserData] = useState<UserProps | undefined>(undefined);
  const { session } = useSession();

  useEffect(() => {
    fetchUserData();  
  }, [session])

  const fetchUserData = async () => {
    if (session) {
      const response = await getMyUser(session);
      setUserData(response.data); 
    }
  }

  return (
    <View>
      <QuebraCabeca source={ImageDesafios} resizeMode="contain" />
      <Logo source={ImageLogo} resizeMode="contain" />
      <Text>Olá, {userData?.name ?? "name"}!</Text>
      <ContainerHeader>
        <Calendario source={ImageCalendario} resizeMode="contain" />
        <Data>
          <CurrentDate />
        </Data>
      </ContainerHeader>
    </View>
  )
}