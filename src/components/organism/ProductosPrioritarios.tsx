import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BotonImagen from '../molecules/BotónImágen';
import VentanaEmergente from './VentanaEmergente';

const ProductosPrioritarios = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState('');

  const mostrarVentanaEmergente = (producto: string) => {
    setProductoSeleccionado(producto);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prioritarios</Text>
      <View style={styles.row}>
        <BotonImagen icon={require('../../assets/plato.png')} text="Lechuga" onPress={() => mostrarVentanaEmergente('Lechuga')} />
        <BotonImagen icon={require('../../assets/plato.png')} text="Papa" onPress={() => mostrarVentanaEmergente('Papa')} />
        <BotonImagen icon={require('../../assets/plato.png')} text="Zanahoria" onPress={() => mostrarVentanaEmergente('Zanahoria')} />
      </View>
      <View style={styles.row}>
        <BotonImagen icon={require('../../assets/plato.png')} text="Pera" onPress={() => mostrarVentanaEmergente('Pera')} />
        <BotonImagen icon={require('../../assets/plato.png')} text="Mora" onPress={() => mostrarVentanaEmergente('Mora')} />
        <BotonImagen icon={require('../../assets/plato.png')} text="Manzana" onPress={() => mostrarVentanaEmergente('Manzana')} />
      </View>
      <View style={styles.row}>
        <BotonImagen icon={require('../../assets/plato.png')} text="Pera" onPress={() => mostrarVentanaEmergente('Pera')} />
        <BotonImagen icon={require('../../assets/plato.png')} text="Mora" onPress={() => mostrarVentanaEmergente('Mora')} />
        <BotonImagen icon={require('../../assets/plato.png')} text="Manzana" onPress={() => mostrarVentanaEmergente('Manzana')} />
      </View>
      <VentanaEmergente
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        producto={productoSeleccionado}
      />
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
