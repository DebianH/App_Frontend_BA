import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Header from "./src/components/molecules/Header";
import DrawerGroup from "./src/components/routesNavigation/routesScreens";

export default function App() {
  return (
    <NavigationContainer>
      {/* <Header
        logoSource={require('./src/assets/BAQ-Logo.png')}
        title="Banco"
      /> */}
      <DrawerGroup />
    </NavigationContainer>
  );
}
