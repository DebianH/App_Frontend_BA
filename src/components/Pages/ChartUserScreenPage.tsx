// src/components/Pages/ProfileScreenPage.tsx
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChartScreenPage: React.FC = () => (

  <View style={styles.container}>
    <Text style={styles.text}>Aquí va el contenido de estadistica</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#000', // Color del texto
    textAlign: 'center', // Alinea el texto al centro
  },
});

export default ChartScreenPage;
