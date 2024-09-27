// src/components/organisms/RegisterStep1.tsx
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { InputAtom } from "../atoms/InputAtom";
import { OptionGroup } from "../molecules/OptionGroup";

export const RegisterStep1: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("Empresa");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <InputAtom placeholder="Nombre Organización" />
      <Text style={styles.label}>Tipo de organización</Text>
      <OptionGroup
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />
      <InputAtom placeholder="RUC/CI" />
      <InputAtom placeholder="Dirección" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
});
