import { Tabs } from 'expo-router';
import { Image } from 'react-native';
import { getMyUser, UserProps } from '@/services/api/routes/user';
import { useEffect, useState } from 'react';
import { useSession } from '@/hooks/ctx';
import { useOverlay } from '@/context/OverlayContext';
import { Overlay } from '@/styles';

export default function Layout() {
  const [userData, setUserData] = useState<UserProps | undefined>(undefined);
  const { session } = useSession();
  const { isVisible } = useOverlay(); 

  useEffect(() => {
    fetchUserData();
  }, [])

  const fetchUserData = async () => {
    if (session) {
      const response = await getMyUser(session);
      setUserData(response.data);
    }
  }

  return (
    <>
      {isVisible && <Overlay />}
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../../../../assets/icons/casa.png')}
                style={{ width: 30, height: 30 }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="tasks"
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../../../../assets/icons/quebra-cabeca.png')}
                style={{ width: 30, height: 30 }} resizeMode="contain"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: () => (
              <Image
                source={userData?.image ? { uri: userData.image } : require('../../../../assets/icons/perfil.png')}
                style={{ width: 30, height: 30, borderRadius: 100 }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: () => (
              <Image
                source={require('../../../../assets/icons/configuracao.png')}
                style={{ width: 30, height: 30 }}
              />
            ),
          }}
        />
      </Tabs>
    </>

  )
}
