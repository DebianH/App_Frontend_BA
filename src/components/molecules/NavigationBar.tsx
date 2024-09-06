// NavigationBar.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomeButton from '../atoms/HomeButton';
import DonationButton from '../atoms/DonationButton';
import ProfileButton from '../atoms/ProfileButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../routesNavigation/routesScreens'; // Ajusta según tu estructura

type NavigationProps = StackNavigationProp<RootStackParamList>;

const NavigationBar: React.FC = () => {
  const navigation = useNavigation<NavigationProps>(); // Ajusta el tipo de navegación

  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <View style={styles.buttonsContainer}>
        <HomeButton onPress={() => navigation.navigate('HomeScreenPage')} />
        <DonationButton onPress={() => navigation.navigate('DonationScreenPage')} />
        <ProfileButton onPress={() => navigation.navigate('ProfileScreenPage')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 1.5,
    backgroundColor: '#000',
    width: '100%',
    position: 'absolute',
    top: 0,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 0,
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
  },
});

export default NavigationBar;
