import { Tabs } from 'expo-router';
import { Image, StyleSheet, View } from 'react-native';
import { getMyUser, UserProps } from '@/services/api/routes/user';
import { useEffect, useState } from 'react';
import { useSession } from '@/hooks/ctx';
import { h, w } from '@/utils/responsiveMesures';

export default function Layout() {
  const [userData, setUserData] = useState<UserProps | undefined>(undefined);
  const [tabPress, setTabPress] = useState<boolean>(false);
  const { session } = useSession();

  useEffect(() => {
    fetchUserData();
  }, [session, tabPress]);

  const fetchUserData = async () => {
    if (session) {
      const response = await getMyUser(session);
      setUserData(response.data);
    }
  }

  return (
    <>
      <Tabs
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {height:  h(8)},
          tabBarIcon: ({ focused }) => {
            let iconSource;
            let customStyle = styles.icon; 
            let resize: "cover" | "contain" = "contain"; 

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
                  <Image source={iconSource} style={styles.icon} resizeMode={resize} />
                </View>
                {focused && <View style={styles.underline} />}
              </View>
            );
          },
        })}
      >
        <Tabs.Screen name="index" listeners={{tabPress: () => {
          setTabPress(!tabPress);
        }}}/>
        <Tabs.Screen name="tasks" listeners={{tabPress: () => {
          setTabPress(!tabPress);
        }}}/>
        <Tabs.Screen name="profile" listeners={{tabPress: () => {
          setTabPress(!tabPress);
        }}}/>
        <Tabs.Screen name="settings" listeners={{tabPress: () => {
          setTabPress(!tabPress);
        }}}/>
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
