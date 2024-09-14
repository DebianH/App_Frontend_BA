import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductosPrioritarios = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prioritarios</Text>
      {/* Aquí irían los productos prioritarios */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50, // Ajusta este valor según sea necesario
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ProductosPrioritarios;
