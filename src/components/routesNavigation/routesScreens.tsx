// rutasDeScreens.tsx
import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreenPage from "../Pages/HomeScreenPage";
import DonationScreenPage from "../Pages/DonationScreenPage";
import ChartScreenPage from "../Pages/ChartUserScreenPage"; // Asegúrate de importar el componente correctamente
import LoginScreenPage from "../Pages/LoginScreenPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/Ionicons";
import DetailsScreen from "../Pages/NewBAPage";
import { createDrawerNavigator } from "@react-navigation/drawer";
import QrScreenPage from "../Pages/QrScreenPage";
import ScannerCameraQR from "../Pages/ScannerCameraQR";
// import HomeScreenPage from '../Pages/HomeScreenPage';
export type RootStackParamList = {
  HomeScreenPage: undefined;
  DonationScreenPage: undefined;
  ChartScreenPage: undefined;
  LoginScreenPage: undefined;
  QrScreenPage: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
// const HomeStack = createStackNavigator();
const DonationStack = createNativeStackNavigator();
const ChartStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const QrStack = createNativeStackNavigator();
//Drawer
const Drawer = createDrawerNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreenPage}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Noticias"
        component={DetailsScreen}
        options={{ presentation: "modal" }}
      />
    </HomeStack.Navigator>
  );
}

function DonationStackScreen() {
  return (
    <DonationStack.Navigator>
      <DonationStack.Screen
        name="¿Qué vamos a donar hoy?"
        component={DonationScreenPage}
      />
    </DonationStack.Navigator>
  );
}
function ChartStackScreen() {
  return (
    <ChartStack.Navigator>
      <ChartStack.Screen
        name="Estadisticas"
        component={ChartScreenPage}
        options={{ headerShown: false }}
      />
    </ChartStack.Navigator>
  );
}
function LoginStackScreen() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Iniciar Sesion"
        component={LoginScreenPage}
        options={{ headerShown: false }}
      />
    </LoginStack.Navigator>
  );
}
// function QrStackScreen() {
//   return (
//     <QrStack.Navigator>
//       <QrStack.Screen
//         name="Qr"
//         component={QrScreenPage}
//         options={{ headerShown: false }}
//       />
//       <QrStack.Screen
//         name="Camera"
//         component={ScannerCameraQR}
//         options={{ headerShown: true }}
//       />
//     </QrStack.Navigator>
//   );
// }

// function DrawerGroup() {
//   return (
//     <Drawer.Navigator screenOptions={{ headerShown: false }}>
//       <Drawer.Screen
//         name="Profile"
//         component={ProfileScreenPage}
//         options={{ headerShown: true }}
//       />
//       <Drawer.Screen name="Routes" component={Routes} />
//     </Drawer.Navigator>
//   );
// }
function Routes() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
          elevation: 10,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
      }}
    >
      {/* <Tab.Screen
        name="Check"
        component={QrStackScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              name={focused ? "qr-code" : "qr-code-outline"}
              size={28}
              color={focused ? "#f39200" : "#c0c0c0"}
            />
          ),
          tabBarActiveTintColor: "#f39200",
          tabBarInactiveTintColor: "#c0c0c0",
        }}
      /> */}
      <Tab.Screen
        name="Gráficas"
        component={LoginStackScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              name={focused ? "bar-chart" : "bar-chart-outline"}
              size={28}
              color={focused ? "#f39200" : "#c0c0c0"}
            />
          ),
          tabBarActiveTintColor: "#f39200",
          tabBarInactiveTintColor: "#c0c0c0",
        }}
      />
      <Tab.Screen
        name="Inicio"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
          tabBarActiveTintColor: "#f39200",
          tabBarInactiveTintColor: "#c0c0c0",
        }}
      />
      <Tab.Screen
        name="Donar"
        component={DonationStackScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              name={focused ? "bag-check" : "bag-check-outline"}
              size={28}
              color={focused ? "#f39200" : "#c0c0c0"}
            />
          ),
          tabBarActiveTintColor: "#f39200",
          tabBarInactiveTintColor: "#c0c0c0",
        }}
      />
      <Tab.Screen
        name="Scan QR"
        component={QrScreenPage}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              name={focused ? "bag-check" : "bag-check-outline"}
              size={28}
              color={focused ? "#f39200" : "#c0c0c0"}
            />
          ),
          tabBarActiveTintColor: "#f39200",
          tabBarInactiveTintColor: "#c0c0c0",
        }}
      />
    </Tab.Navigator>
  );
}
export default Routes;
// export default DrawerGroup;
