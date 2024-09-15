import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


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

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
    </View>
  );
}

function TaskScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
      </View>
    );
}

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
      <Tab.Navigator screenOptions={{
        tabBarShowLabel: false, 
      }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../assets/icons/casa.svg')}
                style={[styles.logo]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../assets/icons/configuracao.svg')}
                style={[styles.logo]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Task"
          component={TaskScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../assets/icons/quebra-cabeca.svg')}
                style={[styles.logo]}
              />
            ),
          }}
        />
      </Tab.Navigator>
  );
}
