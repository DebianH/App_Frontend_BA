import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Imágen from '../atoms/Imágen';

const ImagenTexto: React.FC = () => {
  return (
    <View style={styles.container}>
      <Imágen source={require('../../assets/plato.png')} style={styles.image} />
      <Text style={styles.text}>Verduras:</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D3D3D3', 
    padding: 10,
    borderRadius: 10,
    width: 140,
    bottom: 10
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    backgroundColor: '#D3D3D3', 
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
});

export default ImagenTexto;
