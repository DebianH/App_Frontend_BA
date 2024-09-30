// src/components/atoms/ConfirmButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  onPress: () => void;
};

const ConfirmButton: React.FC<Props> = ({ onPress }) => (
  <TouchableOpacity style={styles.confirmButton} onPress={onPress}>
    <Text style={styles.confirmButtonText}>Confirmar respuesta</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  confirmButton: {
    backgroundColor: '#67bc52',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: 'normal',
    fontSize: 16,
  },
});

export default ConfirmButton;
