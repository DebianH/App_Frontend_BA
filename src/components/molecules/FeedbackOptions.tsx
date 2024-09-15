// src/components/molecules/FeedbackOptions.tsx
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  options: string[];
  onSelect: (option: string) => void;
};

const FeedbackOptions: React.FC<Props> = ({ options, onSelect }) => (
  <View style={styles.container}>
    {options.map((option, index) => (
      <TouchableOpacity key={index} style={styles.optionButton} onPress={() => onSelect(option)}>
        <Text style={styles.optionText}>{option}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#D3D3D3',
    padding: 12,
    borderRadius: 8,
    marginVertical: 5,
    width: '45%',
  },
  optionText: {
    textAlign: 'center',
    fontSize: 14,
  },
});

export default FeedbackOptions;
