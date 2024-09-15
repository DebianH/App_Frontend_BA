import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextInputValidation from '../atoms/TextInputValidation';

interface LabelInputMoleculeProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  multiline?: boolean;
  keyboardType?: any;
}

const LabelInputValidation: React.FC<LabelInputMoleculeProps> = ({ label, placeholder, value, onChangeText, multiline, keyboardType }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInputValidation
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default LabelInputValidation;
