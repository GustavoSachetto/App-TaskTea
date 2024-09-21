import { Stack, Tabs } from 'expo-router';
import { Image } from 'react-native';

export default function Layout() {
  return (
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
              style={{ width: 30, height: 30 }}  resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../../../assets/icons/perfil1.png')}
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
  );
}
