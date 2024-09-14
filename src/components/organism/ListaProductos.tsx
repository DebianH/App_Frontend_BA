import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TodosLosProductos = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todos los productos</Text>
      {/* Aquí irían todos los productos */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50, 
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default TodosLosProductos;
