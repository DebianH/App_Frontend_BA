import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Botón from '../atoms/Botón';
import Imágen from '../atoms/Imágen';

const BotonImagen: React.FC<{ icon: any, text: string }> = ({ icon, text }) => {
  return (
    <View style={styles.container}>
      <Botón style={styles.button}>
        <Text style={styles.text}>{text}</Text>
        <Imágen source={icon} style={styles.icon} />
      </Botón>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  button: {
    backgroundColor: '#D8E6D3',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'column', 
    alignItems: 'center',
    width: 112,
  },
  icon: {
    width: 50,
    height: 50,
    backgroundColor: '#D8E6D3',
    marginTop: 10, 
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
});

export default BotonImagen;
