import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Routes from "./src/components/routesNavigation/routesScreens";
import Header from "./src/components/molecules/Header";
import LoginScreenPage from "./src/components/Pages/LoginScreenPage";
//import DrawerGroup from './src/components/routesNavigation/routesScreens';

export default function App() {
  return (
    <NavigationContainer>
      <Header logoSource={require("./src/assets/BAQ-Logo.png")} title="Banco" />
      <Routes />
    </NavigationContainer>
  );
}
{
  /*    <NavigationContainer>
      <Header logoSource={require("./src/assets/BAQ-Logo.png")} title="Banco" />
      <Routes />
    </NavigationContainer> */
}
