import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Cabecera from '../organism/Cabecera';

import Botónes from '../organism/BotónesNavegación';

const DonacionesPlantilla: React.FC<{ containerStyle?: ViewStyle }> = ({ containerStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Cabecera />
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

export default DonacionesPlantilla;
