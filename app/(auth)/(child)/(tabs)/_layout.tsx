import { Tabs } from 'expo-router';
import { Image, StyleSheet, View } from 'react-native';
import { getMyUser, UserProps } from '@/services/api/routes/user';
import { useEffect, useState } from 'react';
import { useSession } from '@/hooks/ctx';
import { Overlay } from '@/styles';
import { useOverlay } from '@/context/OverlayContext';
import { h, w } from '@/utils/responsiveMesures';

export default function Layout() {
  const [userData, setUserData] = useState<UserProps | undefined>(undefined);
  const { session } = useSession();
  const { isVisible } = useOverlay(); 

  useEffect(() => {
    fetchUserData();
  }, [session]);

  const fetchUserData = async () => {
    if (session) {
      const response = await getMyUser(session);
      setUserData(response.data);
    }
  };

  return (
    <>
      {isVisible && <Overlay />}
      <Tabs
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            let iconSource;
            let customStyle = styles.icon; 
            let resize = "contain"; 

            switch (route.name) {
              case 'index':
                iconSource = require('../../../../assets/icons/casa.png');
                break;
              case 'tasks':
                iconSource = require('../../../../assets/icons/quebra-cabeca.png');
                break;
              case 'profile':
                iconSource = userData?.image
                  ? { uri: userData.image }
                  : require('../../../../assets/icons/perfil.png');
                customStyle = styles.profileContainer;
                resize = "cover"; 
                break;
              case 'settings':
                iconSource = require('../../../../assets/icons/configuracao.png');
                break;
            }

            return (
              <View style={styles.tabContainer}>
                <View style={customStyle}>
                  <Image source={iconSource} style={styles.icon} resizeMode={resize}  />
                </View>
                {focused && <View style={styles.underline} />}
              </View>
            );
          },
        })}
      >
        <Tabs.Screen name="index" />
        <Tabs.Screen name="tasks" />
        <Tabs.Screen name="profile" />
        <Tabs.Screen name="settings" />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: w(8),
    height: w(8),
  },
  profileContainer: {
    width: w(8),
    height: w(8),
    borderRadius: w(8), 
    overflow: 'hidden', 
  },
  underline: {
    width: '100%',
    height: 2,
    backgroundColor: 'blue',
    marginTop: 4,
  },
});
