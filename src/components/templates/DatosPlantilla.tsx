import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Cabecera from '../organism/Cabecera';
import Datos from '../organism/Cuerpo';
import Botónes from '../organism/BotónesNavegación';

const DatosPlantilla: React.FC<{ containerStyle?: ViewStyle }> = ({ containerStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Cabecera />
      <Datos />
      <Botónes />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFEEE',
  },
});

export default DatosPlantilla;
