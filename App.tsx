import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import DrawerGroup from './src/components/routesNavigation/routesScreens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { G } from 'react-native-svg';
export default function App() {
  return (
    //Provedor de area nos permite tomar las medidas de la pantalla de maner global si lo necesitamos
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer >
          <DrawerGroup />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>

  );
}
