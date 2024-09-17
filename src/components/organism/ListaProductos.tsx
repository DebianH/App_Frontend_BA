import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BotónNormal from '../atoms/BotónNormal';

const TodosLosProductos = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todos los productos</Text>
      <View style={styles.spacer} />
      <View style={styles.buttonRow}>
        <BotónNormal style={styles.button1} textStyle={styles.buttonText1}>Cancelar</BotónNormal>
        <BotónNormal style={styles.button2} textStyle={styles.buttonText2}>Está listo !</BotónNormal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    padding: 0,
    top: -110,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  spacer: {
    height: 200, 
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button1: {
    height: 50,
    width: 150, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: 'rgba(0, 0, 0, 0.25)', // Borde con 25% de opacidad
    borderWidth: 1,
  },
  button2: {
    height: 50,
    width: 150, 
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(0, 0, 0, 0.25)', // Borde con 25% de opacidad
    borderWidth: 1,
  },
  buttonText1: {
    color: '#000000',
    fontSize: 16, 
  },
  buttonText2: {
    color: '#fff',
    fontSize: 16, 
  },
});

export default TodosLosProductos;
