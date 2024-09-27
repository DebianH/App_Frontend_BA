// src/components/organisms/RegisterStep2.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { InputGroup } from '../molecules/InputGroup';

export const RegisterStep2: React.FC = () => {
  const inputFields = [
    { placeholder: 'Nombres' },
    { placeholder: 'Apellidos' },
    { placeholder: 'Cédula' },
    { placeholder: 'Contacto (teléf/Celular)' }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <InputGroup inputs={inputFields} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});
