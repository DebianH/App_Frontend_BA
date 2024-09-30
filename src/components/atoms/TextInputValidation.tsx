import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface TextInputAtomProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  multiline?: boolean;
  keyboardType?: any;
}

const TextInputValidation: React.FC<TextInputAtomProps> = ({ placeholder, value, onChangeText, multiline = false, keyboardType = 'default' }) => {
  return (
    <TextInput
      style={[styles.input, multiline && styles.textArea]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor="#A9A9A9"
      multiline={multiline}
      keyboardType={keyboardType}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default TextInputValidation;
