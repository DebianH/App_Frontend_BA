import React from 'react';
import { TextInput, StyleSheet, TextInputProps, ViewStyle, TextStyle } from 'react-native';

const Entrada: React.FC<{
  style?: ViewStyle;
  inputStyle?: TextStyle;
} & TextInputProps> = ({ 
    style, 
    inputStyle, 
    ...rest 
}) => {
  return (
    <TextInput
      style={[styles.input, style, inputStyle]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 350,     
    height: 40,     
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 0, 
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});

export default Entrada;
