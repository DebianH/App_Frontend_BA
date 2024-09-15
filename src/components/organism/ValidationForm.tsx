import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LabelInputValidation from '../molecules/LabelInputValidation';
import ButtonValidation from '../atoms/buttonValidation';

const CalificacionFormOrganism = () => {
  const [peso, setPeso] = useState('');
  const [descripcionProducto, setDescripcionProducto] = useState('');
  const [observacion, setObservacion] = useState('');

  const handleAceptar = () => {
    console.log('Peso:', peso);
    console.log('Descripción de Producto:', descripcionProducto);
    console.log('Observación:', observacion);
  };

  const handleLimpiar = () => {
    setPeso('');
    setDescripcionProducto('');
    setObservacion('');
  };

  return (
    <View style={styles.container}>
      <LabelInputValidation
        label="Peso en [kg]:"
        placeholder="Ingrese dígitos, por ejemplo: 50,00 "
        value={peso}
        onChangeText={setPeso}
        keyboardType="numeric"
      />
      <LabelInputValidation
        label="Descripción de producto"
        placeholder="Ingrese la descripción del producto"
        value={descripcionProducto}
        onChangeText={setDescripcionProducto}
      />
      <LabelInputValidation
        label="Observación"
        placeholder="Ingrese observaciones necesarias"
        value={observacion}
        onChangeText={setObservacion}
        multiline
      />

      <ButtonValidation title="Aceptar" onPress={handleAceptar} backgroundColor="green" textColor="#fff" />
      <ButtonValidation title="Limpiar" onPress={handleLimpiar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default CalificacionFormOrganism;
