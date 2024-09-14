// organisms/useReg3.tsx
import React from 'react';
import { View, StyleSheet, CheckBox, Text } from 'react-native';
import TextInputField from '../atoms/inputData';
import ActionButtons from '../molecules/actionButtons';

export default function RegisterStep3({ onSubmit, onBack }: { onSubmit: () => void, onBack: () => void }) {
  return (
    <View style={styles.container}>
      <TextInputField placeholder="Contraseña" secureTextEntry />
      <TextInputField placeholder="Confirmar Contraseña" secureTextEntry />
      <View style={styles.checkboxContainer}>
        <CheckBox value={true} />
        <Text>Acepto los términos y condiciones</Text>
      </View>
      <ActionButtons onNext={onSubmit} onBack={onBack} nextLabel="Confirmar" backLabel="Atrás" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
});
