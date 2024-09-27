// src/components/molecules/InputGroup.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import { InputAtom } from "../atoms/InputAtom";

interface InputGroupProps {
  inputs: { placeholder: string }[];
}

export const InputGroup: React.FC<InputGroupProps> = ({ inputs }) => {
  return (
    <View style={styles.container}>
      {inputs.map((input, index) => (
        <InputAtom key={index} placeholder={input.placeholder} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
