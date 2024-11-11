// rutasDeScreens.tsx
import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Image,
  Animated,
  Dimensions,
  SafeAreaView,
  Text,
  Pressable,
} from "react-native";
import HomeScreenPage from "../Pages/HomeScreenPage";
import DonationScreenPage from "../Pages/DonationScreenPage";
import ChartScreenPage from "../Pages/ChartUserScreenPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/Ionicons";

import DetailsScreen from "../Pages/NewBAPage";
import QrScreenPage from "../Pages/QrScreenPage";
import ProfileHomeScreenPage from "../Pages/ProfileHomeScreenPage";
import ProfileEditPage from "../Pages/ProfileEditPage";
import ProfileAccountPage from "../Pages/ProfileAccountPage";
import BtnPaymenPage from "../Pages/BtnPaymenPage";
import HelpPage from "../Pages/HelpPage";
import PartnersPage from "../Pages/PartnersPage";
import ProductItem from "../organism/ProductItem";
import QrGeneratePage from "../Pages/QrGeneratePage";
import ReceiveProductsPage from "../Pages/ReceiveProductsPage";
import BottomSheetModalMap from "../organism/BottomSheetMap";
import MapView, { Marker } from "react-native-maps";
import Detalles from "../Pages/Detalles";
import Pagar from "../Pages/Pagar";
import Cantidad from "../Pages/Cantidad";

export type RootStackParamList = {
  HomeStack: undefined;
  DonationStack: undefined;
  ChartStack: undefined;
  QrStack: undefined;
  Drawer: undefined;
  EditProfileStack: undefined;
  Routes: undefined;
};

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = createNativeStackNavigator();
const ChartStack = createNativeStackNavigator();
const DonationStack = createNativeStackNavigator();
const EditProfileStack = createNativeStackNavigator();
const BtnPaymenStack = createNativeStackNavigator();

function BtnPaymenScreen() {
  return (
    <BtnPaymenStack.Navigator>
      <BtnPaymenStack.Screen
        name="BtnPaymenPage"
        component={BtnPaymenPage}
        options={{ headerShown: false }}
      />
      <BtnPaymenStack.Screen
        name="Cantidad"
        component={Cantidad}
        options={{ headerShown: false }}
      />
      <BtnPaymenStack.Screen
        name="Detalles"
        component={Detalles}
        options={{ headerShown: false }}
      />
      <BtnPaymenStack.Screen
        name="Pagar"
        component={Pagar}
        options={{ headerShown: false }}
      />
    </BtnPaymenStack.Navigator>
  );
}

function ProfileScreen() {
  return (
    <EditProfileStack.Navigator initialRouteName="HomeProfile">
      <EditProfileStack.Screen
        name="HomeProfile"
        component={ProfileHomeScreenPage}
        options={{ headerShown: false }}
      />
      <EditProfileStack.Screen
        name="EditProfile"
        component={ProfileEditPage}
        options={{ presentation: "modal" }}
      />
      <EditProfileStack.Screen
        name="AccountProfile"
        component={ProfileAccountPage}
        options={{ presentation: "modal" }}
      />
      <EditProfileStack.Screen
        name="AvatarProfile"
        component={ProfileEditPage}
        options={{ presentation: "modal" }}
      />
    </EditProfileStack.Navigator>
  );
}

function DrawerGroup() {
  const [origin, setOrigin] = useState<any>({
    latitude: -0.271049,
    longitude: -78.527303,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [destination, setDestination] = useState<any>({
    latitude: -0.267844,
    longitude: -78.537671,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const refBSheetMap = useRef();
  return (
    <Drawer.Navigator
      initialRouteName={"Routes"}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#f39200",
        drawerInactiveTintColor: "#9e9e9e",
      }}
      drawerContent={(props) => {
        return (
          <SafeAreaView style={{ flex: 1 }}>
            <View
              style={{
                height: 250,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                gap: 10,
                borderBottomColor: "#c0c0c0",
                borderBottomWidth: 1,
              }}
            >
              <Image
                source={require("../../assets/avatarMen.png")}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  borderColor: "#67b349",
                  borderWidth: 1,
                }}
                resizeMode="contain"
              />
              <Text style={{ fontSize: 18, color: "#b1b1b1" }}>Jose Luis</Text>
              <View
                style={{
                  flexDirection: "row",
                  gap: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 12, color: "#4a4a4a" }}>
                  Beneficiarios
                </Text>
                <Text
                  style={{ fontSize: 12, color: "#4a4a4a", fontWeight: "bold" }}
                >
                  29
                </Text>
              </View>
            </View>
            <DrawerItemList {...props} />
            <View>
              <Text
                style={{
                  fontSize: 14,
                  color: "#c0c0c0",
                  textAlign: "center",
                  marginTop: 250,
                }}
              >
                Rol: Organización
              </Text>
            </View>
          </SafeAreaView>
        );
      }}
    >
      <Drawer.Screen
        name="Routes"
        component={Routes}
        options={{
          headerShown: true,
          drawerLabel: "Inicio",
          drawerIcon: ({ color, size }) => (
            <Icon name="home-outline" size={28} color={"black"} />
          ),
          headerStyle: {
            height: 100,
            elevation: 10,
            shadowColor: "#A9A9A9",
            shadowOpacity: 0.5,
            shadowRadius: 10,
          },
          headerTitle: () => (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/BAQ-Logo.png")}
                style={{ width: 120, height: 50 }}
                resizeMode="contain"
              />
            </View>
          ),
          headerTitleAlign: "center",
          headerRight: () => (
            <>
              <Pressable onPress={() => refBSheetMap.current.open()}>
                <Icon
                  name="trail-sign-outline"
                  // name='cart-outline'
                  size={28}
                  color="black"
                  style={{ marginRight: 10 }}
                />
              </Pressable>
              <BottomSheetModalMap bottonSheRef={refBSheetMap}>
                <View
                  style={{
                    flexDirection: "column",
                    gap: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 20, color: "#303030" }}>
                    Retirar donación
                  </Text>
                  <MapView
                    style={{ width: "100%", height: 400 }}
                    initialRegion={origin}
                  >
                    <Marker coordinate={origin} title="Origen" />
                    <Marker coordinate={destination} title="Destino" />
                  </MapView>
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 25,
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 30,
                    }}
                  >
                    <Pressable
                      style={{
                        flexDirection: "row",
                        borderColor: "#b2e38d",
                        borderWidth: 1,
                        paddingHorizontal: 25,
                        paddingVertical: 10,
                        borderRadius: 20,
                        gap: 10,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Icon name="exit-outline" size={18} color="#c0c0c0" />
                      <Text style={{ fontSize: 18, color: "#c0c0c0" }}>
                        Cerrar
                      </Text>
                    </Pressable>
                    <Pressable
                      style={{
                        flexDirection: "row",
                        backgroundColor: "#6dcc25",
                        paddingHorizontal: 25,
                        paddingVertical: 10,
                        borderRadius: 20,
                        gap: 10,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Icon
                        name="notifications-outline"
                        size={28}
                        color="#fff"
                      />
                      <Text style={{ fontSize: 18, color: "#fff" }}>
                        Notificar
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </BottomSheetModalMap>
            </>
          ),
        }}
      />

      <Drawer.Screen
        name="ProfileNavigation"
        component={ProfileNavigation}
        options={{
          headerShown: true,
          headerTitle: "Mi Perfil",
          headerTitleAlign: "center",
          drawerLabel: "Mi Perfil",
          drawerIcon: ({ color, size }) => (
            <Icon name="person-outline" size={28} color={"black"} />
          ),
        }}
      />

      <Drawer.Screen
        name="Contributions"
        component={BtnPaymenNavigation}
        options={{
          headerShown: true,
          headerTitle: "Contribuciones",
          headerTitleAlign: "center",
          drawerLabel: "Contribuciones",
          drawerIcon: ({ color, size }) => (
            <Icon name="heart-outline" size={28} color={"black"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Partners"
        component={PartnersPage}
        options={{
          headerShown: true,
          headerTitle: "Aliados",
          headerTitleAlign: "center",
          drawerLabel: "Aliados",
          drawerIcon: ({ color, size }) => (
            <Icon name="happy-outline" size={28} color={"black"} />
          ),
        }}
      />

      <Drawer.Screen
        name="Help"
        component={HelpPage}
        options={{
          headerShown: true,
          headerTitle: "Soporte",
          headerTitleAlign: "center",
          drawerLabel: "Ayuda",
          drawerIcon: ({ color, size }) => (
            <Icon name="help-circle-outline" size={28} color={"black"} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
function Routes() {
  const rolState = true;
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
          borderTopColor: "#c0c0c0",
          borderTopWidth: 1,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
      })}
    >
      {rolState ? (
        <Tab.Screen
          name="Check"
          component={QrStackScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Icon
                name={
                  focused
                    ? "checkmark-done-circle"
                    : "checkmark-done-circle-outline"
                }
                size={focused ? 30 : size}
                color={focused ? "#f39200" : "#c0c0c0"}
              />
            ),
            tabBarActiveTintColor: "#f39200",
            tabBarInactiveTintColor: "#c0c0c0",
          }}
        />
      ) : (
        <Tab.Screen
          name="Mi QR"
          component={QrGeneratePage}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Icon
                name={focused ? "qr-code" : "qr-code-outline"}
                size={focused ? 30 : size}
                color={focused ? "#f39200" : "#c0c0c0"}
              />
            ),
            tabBarActiveTintColor: "#f39200",
            tabBarInactiveTintColor: "#c0c0c0",
          }}
        />
      )}
      <Tab.Screen
        name="Gráficas"
        component={ChartStackScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              name={focused ? "bar-chart" : "bar-chart-outline"}
              size={focused ? 30 : size}
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
              size={focused ? 30 : size}
              color={color}
            />
          ),
          tabBarActiveTintColor: "#f39200",
          tabBarInactiveTintColor: "#c0c0c0",
        }}
      />
      {rolState ? (
        <Tab.Screen
          name="Donar"
          component={DonationStackScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Icon
                name={focused ? "bag-check" : "bag-check-outline"}
                size={focused ? 30 : size}
                color={focused ? "#f39200" : "#c0c0c0"}
              />
            ),
            tabBarActiveTintColor: "#f39200",
            tabBarInactiveTintColor: "#c0c0c0",
          }}
        />
      ) : (
        <Tab.Screen
          name="Recibir"
          component={ReceiveProductsPage}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Icon
                name={focused ? "balloon-sharp" : "balloon-outline"}
                size={focused ? 30 : size}
                color={focused ? "#f39200" : "#c0c0c0"}
              />
            ),
            tabBarActiveTintColor: "#f39200",
            tabBarInactiveTintColor: "#c0c0c0",
          }}
        />
      )}
    </Tab.Navigator>
  );
}

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
        name="Donaciones"
        component={DonationScreenPage}
        options={{ headerShown: false }}
      />
      <DonationStack.Screen
        name="ProductItem"
        component={ProductItem}
        options={{ headerShown: true, headerTitle: "Productos" }}
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
function QrStackScreen() {
  return (
    <ChartStack.Navigator>
      <ChartStack.Screen
        name="Generar QR"
        component={QrScreenPage}
        options={{ headerShown: false }}
      />
    </ChartStack.Navigator>
  );
}

function ProfileNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarStyle: { display: "none" },
        }}
      />
    </Tab.Navigator>
  );
}
function BtnPaymenNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="BtnPayment"
        component={BtnPaymenScreen}
        options={{
          headerShown: false,
          tabBarStyle: { display: "none" },
        }}
      />
    </Tab.Navigator>
  );
}

export default DrawerGroup;
