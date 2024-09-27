// src/components/atoms/InputAtom.tsx
import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";

export const InputAtom: React.FC<TextInputProps> = (props) => (
  <TextInput style={styles.input} {...props} />
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
});
