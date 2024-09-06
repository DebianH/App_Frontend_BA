// src/components/Pages/ProfileScreenPage.tsx
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreenPage: React.FC = () => (
  <SafeAreaView style={styles.SafeAreaView}>
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Aquí va el contenido del perfil</Text>
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, // Espaciado horizontal
  },
  text: {
    fontSize: 20,
    color: '#000', // Color del texto
    textAlign: 'center', // Alinea el texto al centro
  },
});

export default ProfileScreenPage;
