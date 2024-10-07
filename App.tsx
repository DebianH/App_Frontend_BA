import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import DrawerGroup from './src/components/routesNavigation/routesScreens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {

  GestureHandlerRootView,
} from 'react-native-gesture-handler';
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer >
        <DrawerGroup />
      </NavigationContainer>
    </SafeAreaProvider>


  );
} 
