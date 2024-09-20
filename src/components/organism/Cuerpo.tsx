import React from 'react';
import { View, StyleSheet, Text, ViewStyle } from 'react-native';
import BotónNormal from '../atoms/BotónNormal';
import CampoDeTexto from '../molecules/CampoDeTexto';
import Imágen from '../atoms/Imágen';

const platoImage = require('../../assets/plato.png');

const Datos: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Imágen source={platoImage} style={styles.image} />
      <Text style={styles.subtitle}>Mis Datos</Text> 
      <CampoDeTexto prompt="¿Cómo te llamas?" placeholder=" " />
      <CampoDeTexto prompt="Contactos" placeholder=" " />
      <CampoDeTexto prompt="Tipo de institución" placeholder=" " />
      <CampoDeTexto prompt="Sucursales" placeholder=" " />
      <BotónNormal style={styles.button} textStyle={styles.buttonText}>Guardar</BotónNormal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFEEE',
    padding: 20,
    top: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    bottom: 40
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 20,
    bottom: 30
  },
  button: {
    marginVertical: 20,
    bottom: 65
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Datos;