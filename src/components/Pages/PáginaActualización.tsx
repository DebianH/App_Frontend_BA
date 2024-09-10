import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import DatosPlantilla from '../templates/DatosPlantilla';

const PáginaActualización: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DatosPlantilla />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFEEE',
  },
});

export default PáginaActualización;
