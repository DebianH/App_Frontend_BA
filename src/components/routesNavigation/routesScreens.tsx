// rutasDeScreens.tsx
import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreenPage from '../Pages/HomeScreenPage';
import DonationScreenPage from '../Pages/DonationScreenPage';
import ChartScreenPage from '../Pages/ChartUserScreenPage'; // Asegúrate de importar el componente correctamente
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import DetailsScreen from '../Pages/NewBAPage';
// import HomeScreenPage from '../Pages/HomeScreenPage';
export type RootStackParamList = {
  HomeScreenPage: undefined;
  DonationScreenPage: undefined;
  ChartScreenPage: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const DonationStack = createNativeStackNavigator();
const ChartStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="A"
        component={HomeScreenPage}
        options={{ headerShown: false, }}
      />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
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
        name="B"
        component={ChartScreenPage}
        options={{ headerShown: false, }}
      />

    </ChartStack.Navigator>
  );
}

const Routes: React.FC = () => {
  return (
    // <Stack.Navigator
    //   initialRouteName="HomeScreenPage"
    //   screenOptions={{
    //     headerShown: false,

    //   }}
    // >
    //   <Stack.Screen
    //     name="HomeScreenPage"
    //     component={HomeScreenPage}
    //     options={{ title: 'Inicio', }}
    //   />
    //   <Stack.Screen
    //     name="DonationScreenPage"
    //     component={DonationScreenPage}
    //     options={{ title: 'Donar' }}
    //   />
    //   <Stack.Screen
    //     name="ChartScreenPage"
    //     component={ChartScreenPage} // Usa el componente directamente
    //     options={{ title: 'Perfil' }}
    //   />

    // </Stack.Navigator>

    // <NavigationContainer >
    <Tab.Navigator screenOptions={{
      headerShown: false, tabBarStyle: {
        height: 70,
        paddingBottom: 10,
        paddingTop: 10,
        elevation: 10,
      }, tabBarLabelStyle: {
        fontSize: 14,
        // fontWeight: 'bold', 
      },
    }}>
      <Tab.Screen name="Graficas" component={ChartStackScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="bar-chart-outline" size={28} color="#f39200" />
        ),
        tabBarActiveTintColor: '#95c11f',
        tabBarInactiveTintColor: 'gray',
      }} />
      <Tab.Screen name="Home" component={HomeStackScreen} options={{ tabBarIcon: ({ color, size }) => (<Icon name="home-outline" size={28} color="#1e110c" />), tabBarActiveTintColor: '#95c11f', tabBarInactiveTintColor: 'gray', }} />
      <Tab.Screen name="Donar" component={DonationStackScreen} options={{ tabBarIcon: ({ color, size }) => (<Icon name="bag-check-outline" size={28} color="#f39200" />), tabBarActiveTintColor: '#95c11f', tabBarInactiveTintColor: 'gray' }} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default Routes;
