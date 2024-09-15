import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CalificacionFormOrganism from '../organism/ValidationForm';

const CalificacionScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calificación</Text>
      <CalificacionFormOrganism />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default CalificacionScreen;

