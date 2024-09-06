// rutasDeScreens.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreenPage from '../Pages/HomeScreenPage';
import DonationScreenPage from '../Pages/DonationScreenPage';
import ProfileScreenPage from '../Pages/ProfileUserScreenPage'; // Asegúrate de importar el componente correctamente

export type RootStackParamList = {
  HomeScreenPage: undefined;
  DonationScreenPage: undefined;
  ProfileScreenPage: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreenPage"
      screenOptions={{
        headerShown: false, // Opcional: Oculta el encabezado por defecto
      }}
    >
      <Stack.Screen
        name="HomeScreenPage"
        component={HomeScreenPage}
        options={{ title: 'Inicio' }}
      />
      <Stack.Screen
        name="DonationScreenPage"
        component={DonationScreenPage}
        options={{ title: 'Donar' }}
      />
      <Stack.Screen
        name="ProfileScreenPage"
        component={ProfileScreenPage} // Usa el componente directamente
        options={{ title: 'Perfil' }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
