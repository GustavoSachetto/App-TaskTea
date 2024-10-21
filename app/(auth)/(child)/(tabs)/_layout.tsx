import { Tabs } from 'expo-router';
import { Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { getMyUser, UserProps } from '@/services/api/routes/user';
import { useEffect, useState } from 'react';
import { useSession } from '@/hooks/ctx';
import { Overlay } from '@/styles';
import { useOverlay } from '@/context/OverlayContext';
import { View } from '@/styles/index-responsible';

export default function Layout() {
  const [activeTab, setActiveTab] = useState<string>('index');
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

  const renderTabIcon = (name: string, source: any) => {
    return (
      <View style={styles.tabContainer}>
        <Image source={source} style={styles.icon} />
        {activeTab === name && <View style={styles.underline} />} {/* Sub-linha */}
      </View>
    );
  };

  return (
    <>
      {isVisible && <Overlay />}
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarButton: (props) => {
            const { route, onPress } = props;
            return (
              <TouchableWithoutFeedback onPress={() => {
                setActiveTab(route.name); // Atualiza a aba ativa
                if (onPress) onPress(); // Chama a função de onPress se estiver definida
              }}>
                {props.children}
              </TouchableWithoutFeedback>
            );
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: () => renderTabIcon('index', require('../../../../assets/icons/casa.png'))
          }}
        />
        <Tabs.Screen
          name="tasks"
          options={{
            tabBarIcon: () => renderTabIcon('tasks', require('../../../../assets/icons/quebra-cabeca.png'))
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
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  underline: {
    width: '100%',
    height: 2,
    backgroundColor: 'blue', // Cor do sublinhado
    marginTop: 4, // Espaço entre o ícone e o sublinhado
  },
});
