import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Header from '../molecules/Header';
import MainSection from '../organism/MainSectionHomeScreen';
import NavigationBar from '../molecules/NavigationBar';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen: React.FC = () => (
  <SafeAreaView style={styles.SafeAreaView}>
    <View style={styles.container}>
      <Header
        logoSource={require('../../assets/BAQ-Logo.png')}
        title="Banco"
      />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.mainSection}>
          <Text style={styles.subtitle}>
            Buen día, José Luis
          </Text>
          <MainSection />
        </View>
      </ScrollView>
      <NavigationBar />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  subtitle: {
    fontSize: 24,
    color: '#000', // Color del texto
    textAlign: 'left', // Alinea el texto a la izquierda
    marginHorizontal: 20, // Espaciado horizontal
    marginVertical: 30, // Espaciado arriba y abajo
    fontWeight: 'bold', // Texto en negrita
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  // Aplica el desplazamiento solo al contenedor de MainSection
  mainSection: {
    transform: [{ translateY: -10 }],  // Ajusta el valor según sea necesario
  },
});

export default HomeScreen;
