// atoms/inputData.tsx
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function inputData({ placeholder }: { placeholder: string }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#6c757d"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ced4da',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 16,
  },
});
