// src/components/molecules/OptionGroup.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface OptionGroupProps {
  selectedOption: string;
  onSelect: (option: string) => void;
}

export const OptionGroup: React.FC<OptionGroupProps> = ({
  selectedOption,
  onSelect,
}) => {
  return (
    <View style={styles.optionContainer}>
      <TouchableOpacity
        style={[styles.option, selectedOption === "Empresa" && styles.selected]}
        onPress={() => onSelect("Empresa")}
      >
        <Text>Empresa</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.option, selectedOption === "ONG" && styles.selected]}
        onPress={() => onSelect("ONG")}
      >
        <Text>ONG</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  option: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    width: 100,
    alignItems: "center",
  },
  selected: {
    borderColor: "#4CAF50",
    backgroundColor: "#e6f7e6",
  },
});
