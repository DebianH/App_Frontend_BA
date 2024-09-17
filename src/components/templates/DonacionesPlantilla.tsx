import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Búsqueda from '../organism/Búqueda'
import ProductosPrioritarios from '../organism/ProductosPrioritarios';
import TodosLosProductos from '../organism/ListaProductos';
const ProductosScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Búsqueda />
      <ProductosPrioritarios />
      <TodosLosProductos />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default ProductosScreen;
