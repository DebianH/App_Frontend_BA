import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BotonImagen from '../molecules/BotónImágen';

const ProductosPrioritarios = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prioritarios</Text>
      <View style={styles.row}>
        <BotonImagen icon={require('../../assets/plato.png')} text="Lechuga" />
        <BotonImagen icon={require('../../assets/plato.png')} text="Papa" />
        <BotonImagen icon={require('../../assets/plato.png')} text="Zanahoria" />
      </View>
      <View style={styles.row}>
      <BotonImagen icon={require('../../assets/plato.png')} text="Pera" />
      <BotonImagen icon={require('../../assets/plato.png')} text="Mora" />
      <BotonImagen icon={require('../../assets/plato.png')} text="Manzana" />
      </View>
      <View style={styles.row}>
      <BotonImagen icon={require('../../assets/plato.png')} text="Pera" />
      <BotonImagen icon={require('../../assets/plato.png')} text="Mora" />
      <BotonImagen icon={require('../../assets/plato.png')} text="Manzana" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    padding: 0,
    top: -50,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
});

export default ProductosPrioritarios;
