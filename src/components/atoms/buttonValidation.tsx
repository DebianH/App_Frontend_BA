import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonAtomProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
}

const ButtonAtom: React.FC<ButtonAtomProps> = ({ title, onPress, backgroundColor = '#fff', textColor = '#000' }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPress}>
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ButtonAtom;
