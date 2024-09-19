import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from 'expo-router';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '.';
import SettingsPage from './settings';
import TasksPage from './tasks';
import ProfilePage from './profile';
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { Fonts } from '../../../constants/Fonts'; 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    logo: {
      width: 30,
      height: 30,
    },
  })

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
      <Tab.Navigator screenOptions={{
        tabBarShowLabel: false,
        headerShown: false, 
      }}>
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../../../assets/icons/casa.svg')}
                style={[styles.logo]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Task"
          component={TasksPage}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../../../assets/icons/quebra-cabeca.svg')}
                style={[styles.logo]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfilePage}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../../../assets/icons/perfil.png')}
                style={[styles.logo]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsPage}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../../../assets/icons/configuracao.svg')}
                style={[styles.logo]}
              />
            ),
          }}
        />
      </Tab.Navigator>
  );
}


export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const fetchFonts = async () => {
    try {
      await Font.loadAsync({
        [Fonts.RalewayRegular]: require('../../../assets/fonts/Raleway-Regular.ttf'),
        [Fonts.RalewayBold]: require('../../../assets/fonts/Raleway-Bold.ttf'),
        [Fonts.RalewayExtraBold]: require('../../../assets/fonts/Raleway-ExtraBold.ttf'),
      });
      setFontsLoaded(true);
    } catch (error) {
      console.error('Error loading fonts', error);
    } 
  };

  useEffect(() => {
    fetchFonts();
  }, []);

  return (
    <TabNavigator></TabNavigator>
  )

}
