// src/components/atoms/CheckboxAtom.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface CheckboxAtomProps {
  checked: boolean;
  onToggle: () => void;
  label: string;
}

export const CheckboxAtom: React.FC<CheckboxAtomProps> = ({
  checked,
  onToggle,
  label,
}) => (
  <TouchableOpacity style={styles.container} onPress={onToggle}>
    <View style={[styles.checkbox, checked && styles.checked]} />
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 10,
  },
  checked: {
    backgroundColor: "#4CAF50",
  },
  label: {
    fontSize: 16,
  },
});
