// src/components/atoms/Button.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#40bf40",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    // borderColor: "#c0c0c0",
    // shadowColor: "#000000",
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // shadowOffset: {
    //   height: 1,
    //   width: 1
    // },
    width: 200,
    // textAlign: "center",

  },
  text: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
  },
});

export default Button;
