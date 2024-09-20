import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from 'expo-router';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '.';
import SettingsPage from './settings';
import TasksPage from './tasks';
import ProfilePage from './profile';

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

export default function TabNavigator() {
  return (
      <Tab.Navigator screenOptions={{
        tabBarShowLabel: false, 
      }}>
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../../../assets/icons/casa.png')}
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
                source={require('../../../assets/icons/quebra-cabeca.png')}
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
                source={require('../../../assets/icons/configuracao.png')}
                style={[styles.logo]}
              />
            ),
          }}
        />
      </Tab.Navigator>
  );
}