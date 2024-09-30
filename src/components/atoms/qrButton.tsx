/*
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface AtomButtonProps {
  onPress: () => void;
  isActive: boolean;
  label: string;
}

const AtomButton: React.FC<AtomButtonProps> = ({ onPress, isActive, label }) => (
  <TouchableOpacity
    style={[styles.button, isActive && styles.activeButton]}
    onPress={onPress}
  >
    <Text style={[styles.buttonText, isActive && styles.activeButtonText]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 50,
  },
  activeButton: {
    backgroundColor: '#4caf50',
  },
  buttonText: {
    fontSize: 16,
    color: '#888',
  },
  activeButtonText: {
    color: '#fff',
  },
});

export default AtomButton;*/
