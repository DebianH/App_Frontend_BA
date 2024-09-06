import React from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/components/routesNavigation/routesScreens';
import Header from './src/components/molecules/Header';
import NavigationBar from './src/components/molecules/NavigationBar';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Header
          logoSource={require('./src/assets/BAQ-Logo.png')}
          title="Banco"
        />
        <Routes />
        <NavigationBar />
      </NavigationContainer>
    </View>
  );
}
