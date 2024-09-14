import React from 'react';
import { View, StyleSheet } from 'react-native';
import Botón from '../atoms/Botón';

const BotonImagen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Botón 
        icon={require('../../assets/tomate.png')} 
        textStyle={styles.text} 
        style={styles.button} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  button: {
    backgroundColor: '#FFFEEE',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#000',
    marginLeft: 10,
  },
});

export default BotonImagen;
