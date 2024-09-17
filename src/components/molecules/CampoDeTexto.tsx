import React from 'react';
import { View, Text, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Input from '../atoms/Entrada';

const CampoDeTexto = ({
  prompt,
  placeholder,
}: {
  prompt: string;
  placeholder: string;
}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.prompt}>{prompt}</Text>
      <Input style={styles.input} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 20,
    width: '100%',
    bottom: 30
  } as ViewStyle,
  prompt: {
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 0,
  } as TextStyle,
  input: {
    marginBottom: 10,
  } as ViewStyle,
});

export default CampoDeTexto;
