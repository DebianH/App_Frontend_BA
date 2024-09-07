import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import MainSection from '../organism/MainSectionHomeScreen';
import NavigationBar from '../molecules/NavigationBar';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen: React.FC = () => (
  <SafeAreaView style={styles.SafeAreaView}>
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.mainSection}>
          <Text style={styles.subtitle}>
            Hola, Jose Luis!
          </Text>
          <MainSection />
        </View>
      </ScrollView>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  subtitle: {
    fontSize: 24,
    color: '#000',
    flex: 1,
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 10,
    fontWeight: 'bold',
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
