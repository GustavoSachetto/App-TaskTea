import { useSession } from '@/hooks/ctx';
import { getMyUser, UserProps } from '@/services/api/routes/user';
import {
  Logo, QuebraCabeca, Text, Data, Calendario,
  ContainerHeader, Header
} from '@/styles/header-index';
import { CurrentDate } from '@/utils/currentDate';
import { PropsWithChildren, useEffect, useState } from 'react';
import { Pressable } from 'react-native';
import Tutorial from '@/components/tutorial';

const ImageLogo = require('@/assets/images/logo.png');
const ImageCalendario = require('@/assets/icons/calendario.png');
const ImageDesafios = require('@/assets/icons/desafios-quebra-cabeca.png');
const ImageAjuda = require('@/assets/icons/ajuda.png');

export default function HeaderIndex({ children }: PropsWithChildren) {
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
  const [modalVisible, setModalVisible] = useState(false);


  return (
    <Header>
      <QuebraCabeca source={ImageDesafios} resizeMode="contain" />
      <Logo source={ImageLogo} resizeMode="contain" />
      <Pressable onPress={() => setModalVisible(true)}>
      <Logo source={ImageAjuda} resizeMode="contain" />

      </Pressable>

      <Text>Olá, {userData?.name ?? "name"}!</Text>
      { children }
      <ContainerHeader>
        <Calendario source={ImageCalendario} resizeMode="contain" />
        <Data>
          <CurrentDate />
        </Data>
      </ContainerHeader>
      <Tutorial
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </Header>
  )
}